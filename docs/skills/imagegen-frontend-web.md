---
prev:
  text: "<span class=\"sk-name\">brandkit</span><span class=\"sk-desc\">让 AI 帮你生成品牌视觉:Logo 概念、色彩系统、字体样本,一套品牌板搞定。</span>"
  link: "/skills/brandkit"
next: false
---
# imagegen-frontend-web

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">设计/前端</span>
  <span class="source">来源: <a href="https://github.com/Leonxlnx/taste-skill" target="_blank" rel="noopener">https://github.com/Leonxlnx/taste-skill</a></span>
</div>

网站设计参考图的生成规范。以"高端前端艺术总监"视角生成设计图:每个页面板块独立一张横图,强制构图多样化(不全是左文右图)、背景自由、CTA 多样、统一调色板。产出可直接交给编码工具照着实现。适合想先"看到"网站长什么样、再动手做的用户。需配合图像生成工具使用。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">设计参考图生成规范详尽(每板块一图+构图多样化+统一调色),产出高级感强;需配合图像生成工具。</p>
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
    <td class="cmp-scene">想做网站但不知道长啥样</td>
    <td class="cmp-without">只能让 AI 直接写代码,做出来才知道好不好看。</td>
    <td class="cmp-with">AI 先生成设计参考图,你先"看到"效果,满意再实现。</td>
  </tr>
  <tr>
    <td class="cmp-scene">AI 生成的页面很平庸</td>
    <td class="cmp-without">千篇一律的左文右图、默认配色。</td>
    <td class="cmp-with">强制构图多样化、背景自由、CTA 多样,摆脱模板感。</td>
  </tr>
  <tr>
    <td class="cmp-scene">多个板块风格不统一</td>
    <td class="cmp-without">每块各搞各的,整体很乱。</td>
    <td class="cmp-with">全站锁定统一调色板,整体协调。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我设计一个咖啡品牌网站</span></div>
    <div class="demo-step ai">AI:作为艺术总监,规划页面结构——首页、产品、关于、门店。</div>
    <div class="demo-step ai">AI:每个板块生成一张独立设计图,构图各不相同。</div>
    <div class="demo-step ai">AI:全站统一暖色调色板,整体协调高级 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 imagegen-frontend-web 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 imagegen-frontend-web 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/imagegen-frontend-web</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
