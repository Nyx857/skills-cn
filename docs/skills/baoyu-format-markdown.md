---
prev:
  text: "<span class=\"sk-name\">baoyu-translate</span><span class=\"sk-desc\">中英互译的\"精翻\"神器:快翻/标准/精翻三档,支持术语表与长文分块。</span>"
  link: "/skills/baoyu-translate"
next:
  text: "<span class=\"sk-name\">redesign-existing-projects</span><span class=\"sk-desc\">把现有网站从\"AI 味\"升级到高级质感:审计设计问题、逐个修复,不重写。</span>"
  link: "/skills/redesign-existing-projects"
---
# baoyu-format-markdown

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">工具</span>
  <span class="source">来源: <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></span>
</div>

自动为纯文本或 Markdown 文件补充标题、摘要、粗体、列表和代码块等格式,让文章结构清晰、排版规整,输出为 {filename}-formatted.md。适合公众号文章、博客等内容的快速美化。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">排版实用、输出规整;适合与公众号/博客发布流程搭配。</p>
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
    <td class="cmp-scene">文章是一坨纯文本</td>
    <td class="cmp-without">没有标题没有重点,读者划走。</td>
    <td class="cmp-with">自动补标题、粗体、列表,结构清晰。</td>
  </tr>
  <tr>
    <td class="cmp-scene">写好的 Markdown 想美化</td>
    <td class="cmp-without">手动调格式,费时间。</td>
    <td class="cmp-with">一键排版成规整文章。</td>
  </tr>
  <tr>
    <td class="cmp-scene">要发公众号/博客</td>
    <td class="cmp-without">排版粗糙,阅读体验差。</td>
    <td class="cmp-with">输出规整 Markdown,直接可用。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我把这段文字排版成文章</span></div>
    <div class="demo-step ai">AI:分析内容结构。</div>
    <div class="demo-step ai">AI:补标题、摘要、粗体、列表。</div>
    <div class="demo-step ai">AI:输出格式化后的文件。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 baoyu-format-markdown 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 baoyu-format-markdown 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/baoyu-format-markdown</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
