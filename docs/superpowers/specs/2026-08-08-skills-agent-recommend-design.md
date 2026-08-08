# 设计:skills-cn 技能推荐服务(技能编排 Agent)

日期:2026-08-08
状态:已确认(用户 2026-08-08 批准分期方案与 DeepSeek 选型)

## 1. 背景与目标

skills-cn(中文 AI 技能库导航站)目前是纯静态导航:用户手动浏览 17 个技能 + 6 个自媒体 Agent,找到感兴趣的 skill 后复制"一句话安装语"发给自己的 AI 助手安装。

本设计将其升级为**技能编排服务**:用户(或 AI 工具)输入项目需求,服务主动检索技能库,推荐"该用什么技能、怎么装、按什么顺序用",可选展开成步骤化开发路线。定位:**先自用后开放**。

核心价值:把"人逛库找技能"变成"Agent 按需找技能"(对应《深入理解 AI Agent》第 4 章主动工具发现 / 第 5 章代码作为系统适配器)。

开放策略(用户确认):"开放"指**开源分发**——服务代码随仓库开源,任何人自部署、自配 key;不提供公共托管 API(费用各用各的 key)。skills-cn 公共站点永久保持纯静态导航。

## 2. 核心流程:三阶段混合引擎

```
输入需求(自然语言)
   │
   ▼
① 解析   LLM(DeepSeek deepseek-chat)把需求解析为结构化查询
         { scenario: 场景类型, keywords: [关键词], platform: 目标平台 }
   │
   ▼
② 检索   本地规则匹配 skills.json + agents.json(分类/关键词/标签/name)
         → Top-N 候选(slug 列表)
   │
   ▼
③ 排序   LLM 对照候选条目详情评估契合度
         → 推荐列表:每条含 理由 / ask_phrase(安装语) / 使用顺序
```

### 各阶段细节

**① 解析(1 次 LLM 调用)**
- 系统提示词:给定技能库的分类清单与标签词表,把用户需求解析成 `{scenario, keywords[], platform}`,输出 JSON
- 平台枚举:web / cli / agent-skill / 内容创作 / 数据分析 / 其他
- 该步骤把开放问题压缩成可规则匹配的结构,保证检索确定性

**② 检索(纯本地,零成本)**
- 匹配维度(按优先级):category 命中 > tags 命中 > keywords 命中 name/summary > platform 匹配
- 每个候选计分,取 Top-8
- 技能与 Agent 两个库都参与(agents.json 的 6 个自媒体角色也是"技能")

**③ 排序(1 次 LLM 调用)**
- 把候选条目的 `name/summary/tags/category`(压缩字段,避免超长)作为上下文,让 LLM 判断每条对当前需求的契合度与建议使用顺序
- 输出 JSON:`[{slug, reason, order}]`
- 要求:宁缺毋滥——无匹配时明确说"库里没有直接匹配",不允许硬凑

**detail=true 时(重展示)** 追加第 3 次 LLM 调用(①解析 + ③排序 + 本次)生成"开发路线":步骤化方案(按推荐顺序,每步做什么、用什么技能、产出什么)。

## 3. API 设计

`POST /api/skills/recommend`(Cloudflare Pages Functions)

请求:
```json
{ "query": "我要做一个记体重的工具", "detail": false }
```

响应(200):
```json
{
  "recommendations": [
    {
      "slug": "brainstorming",
      "name": "brainstorming",
      "category": "开发流程",
      "reason": "先确认需求边界,避免直接动手返工",
      "ask_phrase": "帮我安装 brainstorming 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的",
      "order": 1
    }
  ],
  "matched": true,
  "roadmap": null
}
```

错误处理:
- `env.DEEPSEEK_API_KEY` 缺失 → 500 `{error: "DEEPSEEK_API_KEY missing"}`
- ①③ LLM 调用失败 → **降级**:跳过 LLM 阶段,返回纯规则检索结果(②的结果直接作为推荐,reason 用 summary),`matched` 标记 + `degraded: true`
- ② 无候选 → 200 `{recommendations: [], matched: false}` + 最接近的 1-2 条(降低阈值再检一次),由 LLM 说明"没有直接匹配,但 X 可能沾边"

## 4. 数据利用(不新增字段)

复用现有 `data/skills.json` / `data/agents.json` 字段:
- `category` / `tags` / `name` / `slug` → 检索维度
- `summary` / `detail` / `compare` → 排序与理由生成素材
- `ask_phrase` → 安装语,直接回传
- 技能库条目数(23)远小于上下文窗口,候选详情整体注入排序阶段即可,无需向量化(YAGNI)

## 5. 代码结构

```
skills-cn/
├── functions/api/skills/recommend.js   # 入口:onRequestPost,编排三阶段
├── functions/api/skills/lib/           # 可本地单测的纯逻辑
│   ├── catalog.js                      # 读取 data JSON,导出检索索引
│   ├── parse.js                        # ①解析提示词 + 调用 DeepSeek + JSON 解析
│   ├── search.js                       # ②规则检索计分
│   └── rank.js                         # ③排序提示词 + 调用 + JSON 解析
└── data/skills.json, data/agents.json  # 现有,functions 运行时读取(打包进部署)
```

注意事项:
- Pages Functions 中读取 `data/*.json` 用相对路径 `../../data/...`(functions 目录相对项目根),Cloudflare 构建时 functions 与 data 同目录部署
- 若路径读取不可行(构建产物限制),退路:生成 `functions/api/skills/lib/catalog.generated.js`(由 `npm run gen` 同步生成),保证函数自带数据
- 提示词模板与 JSON 解析容错:LLM 输出可能带 markdown 代码块包裹,解析时先剥 ``` 再 JSON.parse,失败降级

## 6. 部署与配置

- Cloudflare Pages(现有流程,见 deploy-cloudflare-pages skill)
- 环境变量:`DEEPSEEK_API_KEY`(用户提供新 key,在 Cloudflare Pages 设置 → Variables and Secrets → 生产环境配置,保存后重试部署)
- 与 ai-exam-coach 同模式(`functions/api/chat.js` 已验证)

## 7. 分期

**一期(本次交付)**
- `functions/api/skills/recommend.js` + lib/ 三阶段引擎
- 部署 Cloudflare + 配 DEEPSEEK_API_KEY
- curl 回归测试(5 个真实需求样本)+ Reasonix 接入实测(web_fetch 调 API 拿推荐)

**二期**
- 网页助手:docs 页内嵌聊天框(复用同一 API,前端调同域,不暴露 key;可选"展开开发路线" detail=true)
- MCP 薄壳:本地 stdio MCP server 把 API 包装成 `recommend_skills` 工具,注册进 Reasonix/Claude Code

**三期(开放)**
- **开源分发模式**(用户 2026-08-08 确认):整个技能推荐服务(API + 网页助手 + MCP)作为独立开源模板/仓库发布(或并入 skills-cn 仓库),任何人 fork/克隆后自行部署、自配 `DEEPSEEK_API_KEY`——**不提供公共托管 API,API 费用各用各的 key**
- skills-cn 公共站点保持纯静态导航(零成本),不带任何需要 key 的功能
- 发布内容包括:functions/ 代码、data/ 技能库、部署文档(Cloudflare Pages 步骤)、网页助手页面
- 若技能库规模显著增长,再评估向量检索

## 8. 测试方案

回归样本(5 个,覆盖不同场景):
1. "我要做一个记体重的工具"(工具开发 → 期待 brainstorming/writing-plans/TDD 类)
2. "帮我运营小红书账号,写笔记"(自媒体 → 期待 xiaohongshu-operator)
3. "写一个爬虫抓房价数据"(数据分析/开发 → 期待开发流程 + 工具类)
4. "帮我做一个客服机器人"(Agent 开发 → 期待 agent 相关技能)
5. "把现有网站重新设计得好看点"(前端 → 期待 redesign-existing-projects)

验证点:
- 每个样本推荐数 1-5,含理由与安装语
- degraded 路径:断 LLM 时仍有规则结果
- 无匹配场景:返回 matched=false 不硬凑
- 响应 < 15s(3 次 LLM 调用),token 消耗可控

## 9. 不做的事(明确排除)

- 不新增技能字段、不做向量数据库
- 一期不做网页 UI 与 MCP(二期)
- 不做技能自动安装执行(只给安装语,由调用方 Agent 执行——技能安装有权限边界,服务不越权)
- 不做用户行为追踪/个性化
