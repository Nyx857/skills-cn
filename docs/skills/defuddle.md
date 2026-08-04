---
prev:
  text: "<span class=\"sk-name\">json-canvas</span><span class=\"sk-desc\">让 AI 帮你画思维导图、流程图、架构图,画完直接能在白板软件里编辑。</span>"
  link: "/skills/json-canvas"
next: false
---
# defuddle

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">工具</span>
  <span class="source">来源: <a href="https://github.com/kepano/obsidian-skills" target="_blank" rel="noopener">https://github.com/kepano/obsidian-skills</a></span>
</div>

从网页中提取干净正文并转换为 Markdown 的工具技能,自动去除导航、广告等干扰内容。适用于分析在线文档、文章与博客,可有效节省处理网页时的 token 消耗。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★☆☆ <span class="review-stars-num">3/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">极简封装(单条命令),依赖预先 npm 全局安装 defuddle;作为网页提取小工具有用,内容偏薄。</p>
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
    <td class="cmp-scene">让 AI 读网页</td>
    <td class="cmp-without">AI 把广告、导航、推荐位全读进去,又乱又费流量。</td>
    <td class="cmp-with">AI 先提取干净正文,只读有用的部分。</td>
  </tr>
  <tr>
    <td class="cmp-scene">分析长文章</td>
    <td class="cmp-without">整页内容都读,占用大量额度,还容易抓错重点。</td>
    <td class="cmp-with">只保留正文,省额度,重点清晰。</td>
  </tr>
  <tr>
    <td class="cmp-scene">收集网页资料</td>
    <td class="cmp-without">存下来的内容带着一堆杂乱元素。</td>
    <td class="cmp-with">存下的是干净的纯文字,方便后续用。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:总结这篇文章 https://xxx.com/...</span></div>
    <div class="demo-step ai">AI:先提取网页正文(自动去掉广告和导航)。</div>
    <div class="demo-step ai">AI:正文拿到了,帮你总结重点如下……</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 defuddle 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 defuddle 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/defuddle</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
