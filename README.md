# SkillsCN · 中文 AI 技能库

面向中文用户的 AI agent skills 导航与一键安装平台。聚合优质 skill、中文导读、跨工具适配、信任背书。

## 快速开始

```bash
npm install        # 安装依赖
npm run dev        # 本地开发(http://localhost:5173)
npm run build      # 构建静态站(输出到 docs/.vitepress/dist)
npm run preview    # 预览构建产物
```

## 项目结构

```
skills-cn/
├── data/skills.json       # 唯一数据源:全部技能元数据(13 个,持续扩充)
├── scripts/generate.mjs   # 生成器:JSON → 技能详情页 + 列表页
├── docs/                  # VitePress 站点
│   ├── index.md           # 首页
│   ├── about.md           # 关于/合规声明
│   ├── skills/            # 生成产物(勿手改,改 data 后 npm run gen)
│   └── .vitepress/        # 配置 + 主题(含安装适配器交互)
```

## 内容模型

每个技能条目字段:`slug / name / category / summary / detail / author / source_url / source_path / license / license_url / source_stars / tags / install(按工具)`。

**合规原则(内建于流程)**:
- 只收录宽松许可证(MIT / Apache-2.0),无 LICENSE 一律不收
- 中文导读自己写,不是机器翻译原文
- 不重新托管原文件,安装命令指向原仓库
- 每页固定展示原作者、原仓库、许可证、版权声明

## 收录新技能

1. 编辑 `data/skills.json` 追加条目(字段见上)
2. `npm run gen` 重新生成页面
3. 提交

## 里程碑

- [x] M1 原型:静态站 + 13 个精选条目 + 安装适配器(6 工具)
- [ ] M2 内容:扩到 50+ 条目,覆盖 6+ 分类
- [ ] M3 上线:域名 + 部署 + 收录指南公开
- [ ] M4 社区:提交 / 评分 / 评测

## 许可证

本站代码 MIT。收录的 skill 版权归各自原作者,详见各页面合规信息。
