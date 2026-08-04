---
prev:
  text: "<span class=\"sk-name\">obsidian-bases</span><span class=\"sk-desc\">让 AI 会做 Obsidian 的\"数据库视图\",笔记像表格一样筛选排序。</span>"
  link: "/skills/obsidian-bases"
next:
  text: "<span class=\"sk-name\">json-canvas</span><span class=\"sk-desc\">让 AI 帮你画思维导图、流程图、架构图,画完直接能在白板软件里编辑。</span>"
  link: "/skills/json-canvas"
---
# obsidian-cli

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">笔记知识库</span>
  <span class="source">来源: <a href="https://github.com/kepano/obsidian-skills" target="_blank" rel="noopener">https://github.com/kepano/obsidian-skills</a></span>
</div>

基于 Obsidian 官方命令行工具,指导 AI 直接操作笔记库:检索内容、创建笔记、更新属性,并支持插件与主题开发场景。需要本机安装 Obsidian 及对应命令行工具后使用。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★☆☆ <span class="review-stars-num">3/5</span> <span class="rv-level adv">进阶向</span></div>
  <p class="review-summary">依赖最重:需本机装 obsidian CLI 且应用运行中,无环境完全不可用;适合开发者深度使用。</p>
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
    <td class="cmp-scene">想直接操作笔记库</td>
    <td class="cmp-without">AI 看不到你的库,只能凭空建议,帮不上忙。</td>
    <td class="cmp-with">AI 能搜、能建、能改你的真实笔记。</td>
  </tr>
  <tr>
    <td class="cmp-scene">笔记很多找东西</td>
    <td class="cmp-without">自己在 Obsidian 里翻半天。</td>
    <td class="cmp-with">AI 用命令行快速检索,几秒定位。</td>
  </tr>
  <tr>
    <td class="cmp-scene">批量整理笔记</td>
    <td class="cmp-without">一篇篇手动整理,费时。</td>
    <td class="cmp-with">AI 批量搜索、归类、更新,一次搞定。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我找所有关于"减肥"的笔记</span></div>
    <div class="demo-step ai">AI:用命令行搜索你的笔记库……找到 12 篇相关笔记。</div>
    <div class="demo-step ai">AI:我把标题和日期列给你,要整理成一份清单吗?</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 obsidian-cli 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 obsidian-cli 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的">复制这句话</button>
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
      <pre class="install-cmd">/plugin marketplace add kepano/obsidian-skills
/plugin install</pre>
    </div>
    <div class="install-block" data-tool="codex">
      <pre class="install-cmd">/plugins → 搜索 obsidian-skills → Install Plugin</pre>
    </div>
    <div class="install-block" data-tool="cursor">
      <pre class="install-cmd">在 Cursor Agent 聊天中输入 /add-plugin obsidian-skills</pre>
    </div>
    <div class="install-block" data-tool="gemini-cli">
      <pre class="install-cmd">gemini extensions install https://github.com/kepano/obsidian-skills</pre>
    </div>
    <div class="install-block" data-tool="opencode">
      <pre class="install-cmd">git clone https://github.com/kepano/obsidian-skills.git 对应技能目录(详见原仓库 README)</pre>
    </div>
    <div class="install-block" data-tool="reasonix">
      <pre class="install-cmd">用 install_source 安装 https://github.com/kepano/obsidian-skills(Reasonix 会引导你完成)</pre>
    </div>
  </div>
</details>

<div class="origin-box">
  <h4>来源与版权</h4>
  <ul>
    <li>原作者:Steph Ango (kepano)</li>
    <li>原仓库:<a href="https://github.com/kepano/obsidian-skills" target="_blank" rel="noopener">https://github.com/kepano/obsidian-skills</a></li>
    <li>许可证:<a href="https://github.com/kepano/obsidian-skills/blob/main/LICENSE" target="_blank" rel="noopener">MIT</a>(允许复制、修改、翻译、再分发,需保留版权声明)</li>
    <li>仓库路径:skills/obsidian-cli</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
