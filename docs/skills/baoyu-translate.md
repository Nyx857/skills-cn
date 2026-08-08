---
prev:
  text: "<span class=\"sk-name\">baoyu-post-to-wechat</span><span class=\"sk-desc\">一键把文章/图文发布到微信公众号,自动排版、外部链接转文末引用。</span>"
  link: "/skills/baoyu-post-to-wechat"
next:
  text: "<span class=\"sk-name\">baoyu-format-markdown</span><span class=\"sk-desc\">把杂乱文本/Markdown 排版成规整文章:标题、摘要、粗体、列表一次到位。</span>"
  link: "/skills/baoyu-format-markdown"
---
# baoyu-translate

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">工具</span>
  <span class="source">来源: <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></span>
</div>

面向中文用户的多模式翻译技能。三种模式:快速翻译、标准翻译、精细翻译;默认目标语言为中文,内置英中术语表,长文自动并行分块,支持学术/商务等风格预设。适合翻译文章、文档和网页。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">中文用户最实用的翻译技能:三档模式+术语表+长文分块,默认中译很贴心。</p>
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
    <td class="cmp-scene">要翻译一篇长文</td>
    <td class="cmp-without">直接丢给 AI 翻,后半段越翻越烂。</td>
    <td class="cmp-with">长文自动分块,上下文连贯,风格统一。</td>
  </tr>
  <tr>
    <td class="cmp-scene">专业术语总翻不准</td>
    <td class="cmp-without">术语翻得五花八门。</td>
    <td class="cmp-with">内置术语表,还可自定义,前后一致。</td>
  </tr>
  <tr>
    <td class="cmp-scene">翻译质量要求高</td>
    <td class="cmp-without">机翻味重,改半天。</td>
    <td class="cmp-with">三档模式,精翻档质量接近人工。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:把这篇文章精翻成中文</span></div>
    <div class="demo-step ai">AI:识别语言与目标。</div>
    <div class="demo-step ai">AI:选精翻模式,应用术语表。</div>
    <div class="demo-step ai">AI:输出译文,保留格式。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 baoyu-translate 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 baoyu-translate 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/baoyu-translate</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
