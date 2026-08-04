---
prev:
  text: "<span class=\"sk-name\">obsidian-cli</span><span class=\"sk-desc\">让 AI 能直接操作你的 Obsidian 笔记库:搜笔记、建笔记、整理笔记。</span>"
  link: "/skills/obsidian-cli"
next:
  text: "<span class=\"sk-name\">defuddle</span><span class=\"sk-desc\">让 AI 把网页变成干净的纯文字,去掉广告和导航,更省流量。</span>"
  link: "/skills/defuddle"
---
# json-canvas

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">可视化</span>
  <span class="source">来源: <a href="https://github.com/kepano/obsidian-skills" target="_blank" rel="noopener">https://github.com/kepano/obsidian-skills</a></span>
</div>

生成符合 JSON Canvas 开放规范的画布文件,涵盖节点、连线、分组等结构,可用于思维导图、流程图与架构图等可视化表达。产出文件可在 Obsidian 等支持该规范的软件中直接打开编辑。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">严格对照官方规范,字段表与验证清单实用;零依赖纯知识型,适合画白板/流程图场景。</p>
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
    <td class="cmp-scene">想让 AI 画图</td>
    <td class="cmp-without">AI 只能给文字描述,想要图还得自己画。</td>
    <td class="cmp-with">AI 直接生成白板文件,打开就是能编辑的图。</td>
  </tr>
  <tr>
    <td class="cmp-scene">画思维导图/流程图</td>
    <td class="cmp-without">自己用工具慢慢拖,费时间。</td>
    <td class="cmp-with">AI 生成节点连线,打开就能看、能改。</td>
  </tr>
  <tr>
    <td class="cmp-scene">把思路可视化</td>
    <td class="cmp-without">想法堆在脑子里,理不清。</td>
    <td class="cmp-with">AI 画成图,结构一目了然,还能持续修改。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:把装修思路画成思维导图</span></div>
    <div class="demo-step ai">AI:生成一个白板文件:预算、风格、工期三个分支。</div>
    <div class="demo-step ai">AI:每个分支下挂具体事项,连线清晰。</div>
    <div class="demo-step ai">AI:生成好了,用白板软件打开就能编辑 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 json-canvas 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 json-canvas 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/json-canvas</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
