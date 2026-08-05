---
prev:
  text: "<span class=\"sk-name\">redesign-existing-projects</span><span class=\"sk-desc\">把现有网站从\"AI 味\"升级到高级质感:审计设计问题、逐个修复,不重写。</span>"
  link: "/skills/redesign-existing-projects"
next:
  text: "<span class=\"sk-name\">minimalist-skill</span><span class=\"sk-desc\">强制\"高级极简编辑风\" UI:具体色值、字体、间距,照着做就高级。</span>"
  link: "/skills/minimalist-skill"
---
# output-skill

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">设计/前端</span>
  <span class="source">来源: <a href="https://github.com/Leonxlnx/taste-skill" target="_blank" rel="noopener">https://github.com/Leonxlnx/taste-skill</a></span>
</div>

解决 AI 生成代码时偷懒截断的行为问题:禁止 "// ..."、"其余同理" 等省略套路,要求按请求逐项核对交付,接近长度上限时用断点标记等待续写。适用于任何需要 AI 完整产出代码、文档或长内容的场景。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">纯提示词行为约束,无外部依赖;治"AI 写一半省略"有效,适合生成完整代码/文档。</p>
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
    <td class="cmp-scene">让 AI 写长代码</td>
    <td class="cmp-without">AI 写一半就"// 其余同理",你还要追着让它补全。</td>
    <td class="cmp-with">AI 强制完整输出,不省略不占位,一次给全。</td>
  </tr>
  <tr>
    <td class="cmp-scene">接近长度上限</td>
    <td class="cmp-without">AI 直接截断,后半部分丢失。</td>
    <td class="cmp-with">AI 用断点标记"已完成 X/Y",你说继续就接着写。</td>
  </tr>
  <tr>
    <td class="cmp-scene">检查交付完整性</td>
    <td class="cmp-without">说不清给没给全,漏了也没发现。</td>
    <td class="cmp-with">AI 按请求逐项核对,缺什么明说。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我写一个完整的登录功能代码</span></div>
    <div class="demo-step ai">AI:好的,完整输出——HTML、CSS、JS 全部给全,不用省略号。</div>
    <div class="demo-step ai">AI:代码较长,先给前半部分,标记 [PAUSED — 1 of 2]。</div>
    <div class="demo-step user">你:继续 → AI 接着输出后半部分,直到全部完成 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 output-skill 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 output-skill 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的">复制这句话</button>
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
      <pre class="install-cmd">/plugin marketplace add Leonxlnx/taste-skill
/plugin install</pre>
    </div>
    <div class="install-block" data-tool="codex">
      <pre class="install-cmd">/plugins → 搜索 taste-skill → Install Plugin</pre>
    </div>
    <div class="install-block" data-tool="cursor">
      <pre class="install-cmd">在 Cursor Agent 聊天中输入 /add-plugin taste-skill</pre>
    </div>
    <div class="install-block" data-tool="gemini-cli">
      <pre class="install-cmd">gemini extensions install https://github.com/Leonxlnx/taste-skill</pre>
    </div>
    <div class="install-block" data-tool="opencode">
      <pre class="install-cmd">git clone https://github.com/Leonxlnx/taste-skill.git 对应技能目录(详见原仓库 README)</pre>
    </div>
    <div class="install-block" data-tool="reasonix">
      <pre class="install-cmd">用 install_source 安装 https://github.com/Leonxlnx/taste-skill(Reasonix 会引导你完成)</pre>
    </div>
  </div>
</details>

<div class="origin-box">
  <h4>来源与版权</h4>
  <ul>
    <li>原作者:Leon (Leonxlnx)</li>
    <li>原仓库:<a href="https://github.com/Leonxlnx/taste-skill" target="_blank" rel="noopener">https://github.com/Leonxlnx/taste-skill</a></li>
    <li>许可证:<a href="https://github.com/Leonxlnx/taste-skill/blob/main/LICENSE" target="_blank" rel="noopener">MIT</a>(允许复制、修改、翻译、再分发,需保留版权声明)</li>
    <li>仓库路径:skills/output-skill</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
