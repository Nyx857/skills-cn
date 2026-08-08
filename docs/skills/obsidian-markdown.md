---
prev:
  text: "<span class=\"sk-name\">requesting-code-review</span><span class=\"sk-desc\">写完代码先派个\"评审官\"检查再合并,问题早发现、少返工。</span>"
  link: "/skills/requesting-code-review"
next:
  text: "<span class=\"sk-name\">obsidian-bases</span><span class=\"sk-desc\">让 AI 会做 Obsidian 的\"数据库视图\",笔记像表格一样筛选排序。</span>"
  link: "/skills/obsidian-bases"
---
# obsidian-markdown

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">笔记知识库</span>
  <span class="source">来源: <a href="https://github.com/kepano/obsidian-skills" target="_blank" rel="noopener">https://github.com/kepano/obsidian-skills</a></span>
</div>

指导生成符合 Obsidian 规范的 Markdown 内容。覆盖双向链接、嵌入、提示框、属性等 Obsidian 专属语法,确保 AI 产出的笔记在 Obsidian 中正确渲染与关联。适用于依赖 Obsidian 进行知识管理的用户。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">干净的 Obsidian 语法速查,每种语法配示例;纯知识型零依赖,装完即用无坑。</p>
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
    <td class="cmp-scene">让 AI 写 Obsidian 笔记</td>
    <td class="cmp-without">AI 不懂 Obsidian 语法,写出来的笔记显示乱、链接失效。</td>
    <td class="cmp-with">AI 会用双向链接、提示框、属性,笔记打开全正常。</td>
  </tr>
  <tr>
    <td class="cmp-scene">整理笔记之间的关联</td>
    <td class="cmp-without">笔记各写各的,连不起来,找信息靠翻。</td>
    <td class="cmp-with">AI 用 [[双链]] 把相关笔记连成网,一点就跳。</td>
  </tr>
  <tr>
    <td class="cmp-scene">笔记格式统一</td>
    <td class="cmp-without">每篇格式都不一样,看着乱。</td>
    <td class="cmp-with">AI 按统一规范写,标题、属性、提示框都规整。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:把这篇读书笔记整理进 Obsidian</span></div>
    <div class="demo-step ai">AI:好的,我会用 Obsidian 格式整理:标题、属性、正文。</div>
    <div class="demo-step ai">AI:相关笔记用 [[双链]] 连起来,重点用提示框标注。</div>
    <div class="demo-step ai">AI:整理好了,打开 Obsidian 全部正常显示 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 obsidian-markdown 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 obsidian-markdown 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/obsidian-markdown</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
