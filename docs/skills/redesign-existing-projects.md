---
prev:
  text: "<span class=\"sk-name\">defuddle</span><span class=\"sk-desc\">让 AI 把网页变成干净的纯文字,去掉广告和导航,更省流量。</span>"
  link: "/skills/defuddle"
next:
  text: "<span class=\"sk-name\">output-skill</span><span class=\"sk-desc\">强制 AI 完整输出代码,禁止\"写一半省略\"和占位符。</span>"
  link: "/skills/output-skill"
---
# redesign-existing-projects

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">设计/前端</span>
  <span class="source">来源: <a href="https://github.com/Leonxlnx/taste-skill" target="_blank" rel="noopener">https://github.com/Leonxlnx/taste-skill</a></span>
</div>

针对已有网站或应用的设计升级流程。先扫描代码审计设计问题(字体、配色、布局、交互状态),再按优先级逐项修复,保留现有技术栈不重写。适用于任何想让 AI 产出页面摆脱"千篇一律模板感"的场景。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level adv">进阶向</span></div>
  <p class="review-summary">审计+修复式设计升级,清单详尽(字体/配色/布局/交互/可访问性),纯提示词无外部依赖,对已有项目直接生效。</p>
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
    <td class="cmp-scene">AI 做出的页面</td>
    <td class="cmp-without">千篇一律:Inter 字体、三卡布局、紫蓝渐变,一股"AI 味"。</td>
    <td class="cmp-with">高级质感:有性格的字体、打破对称的布局、克制的配色。</td>
  </tr>
  <tr>
    <td class="cmp-scene">想改现有网站</td>
    <td class="cmp-without">AI 要么重写要么乱改,把好的也改坏了。</td>
    <td class="cmp-with">先审计再按优先级小步修复,不破坏现有功能。</td>
  </tr>
  <tr>
    <td class="cmp-scene">追求设计品质</td>
    <td class="cmp-without">只能靠你自己懂设计,不然说不出哪里不好。</td>
    <td class="cmp-with">AI 按专业清单逐项检查,把"说不出的丑"变成可修复的问题。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我把这个页面改得高级一点</span></div>
    <div class="demo-step ai">AI:先扫描你的代码,诊断设计问题:字体、配色、布局、交互。</div>
    <div class="demo-step ai">AI:发现 6 个问题——Inter 字体、卡片边框太 generic、缺 hover 状态。</div>
    <div class="demo-step ai">AI:按优先级逐个修复:先换字体,再调配色,加交互反馈。</div>
    <div class="demo-step ai">AI:改完逐项验证,功能没破坏,观感提升明显 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 redesign-existing-projects 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 redesign-existing-projects 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/redesign-skill</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
