---
prev:
  text: "<span class=\"sk-name\">json-canvas</span><span class=\"sk-desc\">让 AI 帮你画思维导图、流程图、架构图,画完直接能在白板软件里编辑。</span>"
  link: "/skills/json-canvas"
next:
  text: "<span class=\"sk-name\">baoyu-cover-image</span><span class=\"sk-desc\">给文章生成高质量封面图:5 个设计维度 × 11 套配色 × 7 种渲染风格。</span>"
  link: "/skills/baoyu-cover-image"
---
# baoyu-xhs-images

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">可视化</span>
  <span class="source">来源: <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></span>
</div>

将复杂内容拆解为适合社媒传播的图文卡片系列,12 种视觉风格、8 种布局、3 种配色方案,专为小红书/微信图文场景优化。生成卡片前先确认内容与风格偏好。⚠️ 需要可用的图像生成后端(如 Codex imagegen 或 Cursor GenerateImage)。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">小红书图文卡片神器,风格布局选项丰富;依赖图像生成后端,纯文本环境用不了。</p>
  <p class="review-note">本报告由自动化实测生成:读取技能完整内容,按描述验证可执行性与依赖。</p>
</div>



<div class="compare-box">
  <h3>有这个技能,差别在哪</h3>
  <table class="compare-table">
    <thead>
      <tr>
        <th>遇到的情况</th>
        <th>没有这个技能</th>
        <th>有这个技能</th>
      </tr>
    </thead>
    <tbody>
  <tr>
    <td class="cmp-scene">想发小红书但只有一段文字</td>
    <td class="cmp-without">干巴巴一段话,没人看。</td>
    <td class="cmp-with">AI 拆成多张图文卡片,风格任选,视觉抓人。</td>
  </tr>
  <tr>
    <td class="cmp-scene">不会做卡片设计</td>
    <td class="cmp-without">用模板做出来很土。</td>
    <td class="cmp-with">12 种视觉风格 × 8 种布局,专业级设计。</td>
  </tr>
  <tr>
    <td class="cmp-scene">内容太长不适合社交平台</td>
    <td class="cmp-without">硬塞一段话,划走。</td>
    <td class="cmp-with">自动拆解成 1-10 张卡片,节奏感强。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:把这篇科普拆成小红书图文卡片</span></div>
    <div class="demo-step ai">AI:确认内容与目标平台。</div>
    <div class="demo-step ai">AI:选风格、布局,拆成卡片系列。</div>
    <div class="demo-step ai">AI:逐张生成卡片,可调整。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 baoyu-xhs-images 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 baoyu-xhs-images 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的">复制这句话</button>
</div>

> 你的 AI 助手可能还会问你放在哪、怎么用,照常回答它就行——就像平时让它干活一样,不用懂技术细节。

<details>
  <summary>想自己动手?(不推荐,给懂命令行的人)</summary>

  <div class="installer">
    <p>下面的命令按工具区分,均来自原仓库。普通用户请直接使用上面的一句话方式,让智能体代劳。</p>
    <div class="tool-pills">
      <span class="tool-pill" data-tool="claude-code">Claude Code</span>
      <span class="tool-pill" data-tool="codex">Codex</span>
      <span class="tool-pill" data-tool="cursor">Cursor</span>
      <span class="tool-pill" data-tool="gemini-cli">Gemini CLI</span>
      <span class="tool-pill" data-tool="opencode">OpenCode</span>
      <span class="tool-pill" data-tool="reasonix">Reasonix</span>
    </div>
    <div class="install-block" data-tool="claude-code">
      <pre class="install-cmd">/plugin marketplace add JimLiu/baoyu-skills
/plugin install</pre>
    </div>
    <div class="install-block" data-tool="codex">
      <pre class="install-cmd">/plugins → 搜索 baoyu-skills → Install Plugin</pre>
    </div>
    <div class="install-block" data-tool="cursor">
      <pre class="install-cmd">在 Cursor Agent 聊天中输入 /add-plugin baoyu-skills</pre>
    </div>
    <div class="install-block" data-tool="gemini-cli">
      <pre class="install-cmd">gemini extensions install https://github.com/JimLiu/baoyu-skills</pre>
    </div>
    <div class="install-block" data-tool="opencode">
      <pre class="install-cmd">git clone https://github.com/JimLiu/baoyu-skills.git 对应技能目录(详见原仓库 README)</pre>
    </div>
    <div class="install-block" data-tool="reasonix">
      <pre class="install-cmd">用 install_source 安装 https://github.com/JimLiu/baoyu-skills(Reasonix 会引导你完成)</pre>
    </div>
  </div>
</details>

<div class="origin-box">
  <h4>来源与版权</h4>
  <ul>
    <li>原作者:JimLiu</li>
    <li>原仓库:<a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></li>
    <li>许可证:<a href="https://github.com/JimLiu/baoyu-skills/blob/main/LICENSE" target="_blank" rel="noopener">MIT</a>(允许复制、修改、翻译、再分发,需保留版权声明)</li>
    <li>仓库路径:skills/baoyu-xhs-images</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
