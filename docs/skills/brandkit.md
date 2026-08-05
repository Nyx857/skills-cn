---
prev:
  text: "<span class=\"sk-name\">minimalist-skill</span><span class=\"sk-desc\">强制\"高级极简编辑风\" UI:具体色值、字体、间距,照着做就高级。</span>"
  link: "/skills/minimalist-skill"
next:
  text: "<span class=\"sk-name\">imagegen-frontend-web</span><span class=\"sk-desc\">让 AI 生成高级网站设计参考图,每个板块一张图,照着做就是高级感。</span>"
  link: "/skills/imagegen-frontend-web"
---
# brandkit

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">设计/前端</span>
  <span class="source">来源: <a href="https://github.com/Leonxlnx/taste-skill" target="_blank" rel="noopener">https://github.com/Leonxlnx/taste-skill</a></span>
</div>

品牌视觉套件的图像生成技能。按品牌策略(品类、受众、核心隐喻)推导 Logo 概念,输出品牌板——Logo 封面、构造图、数字应用、色彩系统、字体样本、实物 mockup 等九宫格面板。适合想给产品或项目建立视觉形象,但不会设计的用户。需配合图像生成工具使用。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">品牌视觉生成规范完整(Logo 5 种推导法+九宫格品牌板);需配合图像生成工具,适合想做品牌但不会设计的用户。</p>
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
    <td class="cmp-scene">想给项目做 Logo</td>
    <td class="cmp-without">自己不会设计,AI 直接生成又很随意,不像正经品牌。</td>
    <td class="cmp-with">AI 按品牌策略推导 Logo 概念,给出完整的品牌视觉。</td>
  </tr>
  <tr>
    <td class="cmp-scene">需要一整套品牌形象</td>
    <td class="cmp-without">只有个 Logo,色彩/字体/应用全没有,不成体系。</td>
    <td class="cmp-with">AI 输出品牌板:Logo、色彩系统、字体、应用场景全都有。</td>
  </tr>
  <tr>
    <td class="cmp-scene">不知道品牌该怎么定调</td>
    <td class="cmp-without">无从下手,方向模糊。</td>
    <td class="cmp-with">AI 先分析品类和受众,再定视觉方向,有依据不瞎来。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:给我的咖啡店做一套品牌视觉</span></div>
    <div class="demo-step ai">AI:先确认品牌策略——目标客户、想传达的感觉(温暖?专业?)。</div>
    <div class="demo-step ai">AI:推导 Logo 概念(字母+隐喻),生成品牌板九宫格。</div>
    <div class="demo-step ai">AI:包含色彩系统、字体样本、杯子 mockup 等应用场景 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 brandkit 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 brandkit 这个技能,它来自 https://github.com/Leonxlnx/taste-skill ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/brandkit</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
