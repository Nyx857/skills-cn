---
prev:
  text: "<span class=\"sk-name\">output-skill</span><span class=\"sk-desc\">强制 AI 完整输出代码,禁止\"写一半省略\"和占位符。</span>"
  link: "/skills/output-skill"
next: false
---
# minimalist-skill

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">设计/前端</span>
  <span class="source">来源: <a href="https://github.com/Leonxlnx/taste-skill" target="_blank" rel="noopener">https://github.com/Leonxlnx/taste-skill</a></span>
</div>

极简风格 UI 的落地规范:给出具体的色值(暖骨白背景、深色主按钮)、字体家族、禁渐变禁重阴影、1px 细边框、8-12px 圆角、bento 网格等可直接照抄的参数。适用于想要干净高级、不花哨的页面设计。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">参数化的极简风规范,色值/字体/间距都给了具体值,照抄即可;纯提示词无依赖。</p>
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
    <td class="cmp-scene">想要简洁高级的页面</td>
    <td class="cmp-without">AI 默认给花哨的渐变、重阴影,不够"高级"。</td>
    <td class="cmp-with">AI 按极简规范:暖白底、细边框、克制动效,干净利落。</td>
  </tr>
  <tr>
    <td class="cmp-scene">不知道怎么描述风格</td>
    <td class="cmp-without">你说不清要什么风格,AI 自由发挥容易跑偏。</td>
    <td class="cmp-with">技能自带完整极简规范,AI 照着参数做就行。</td>
  </tr>
  <tr>
    <td class="cmp-scene">配色和字体选择</td>
    <td class="cmp-without">AI 用默认的,显得普通。</td>
    <td class="cmp-with">给定色值和字体,一眼高级。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:做一个极简风格的落地页</span></div>
    <div class="demo-step ai">AI:按极简规范来——暖骨白背景 #F7F6F3,主按钮深色 #111。</div>
    <div class="demo-step ai">AI:字体用 Outfit,1px 细边框,8-12px 圆角,bento 网格。</div>
    <div class="demo-step ai">AI:禁渐变、禁重阴影,动效克制。</div>
    <div class="demo-step ai">AI:完成,干净高级 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 minimalist-skill 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 minimalist-skill 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/minimalist-skill</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
