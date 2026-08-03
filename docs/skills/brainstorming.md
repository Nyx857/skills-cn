---
prev: false
next:
  text: "<span class=\"sk-name\">writing-plans</span><span class=\"sk-desc\">把\"要做的事\"拆成一步步的计划,像菜谱一样照着做。</span>"
  link: "/skills/writing-plans"
---
# brainstorming

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">开发流程</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

面向创作性工作的前置设计流程。在动手实现前,通过结构化对话梳理需求、探索项目上下文、提出候选方案,并产出可评审的设计文档。适用于任何需要构建新功能、修改现有行为的场景,确保实现方向在投入编码前得到确认。

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
    <td class="cmp-scene">想做个新功能或工具</td>
    <td class="cmp-without">AI 直接动手写代码,做完你才发现不是想要的,来回返工。</td>
    <td class="cmp-with">AI 先把你的想法问清楚、整理成方案,你确认后它才开始写。</td>
  </tr>
  <tr>
    <td class="cmp-scene">需求只说了个大概</td>
    <td class="cmp-without">AI 按自己的理解猜,做出来的东西对不上你的预期。</td>
    <td class="cmp-with">AI 逐个确认关键细节(做什么、给谁用、要哪些功能),方案落地更准。</td>
  </tr>
  <tr>
    <td class="cmp-scene">改到一半想调整方向</td>
    <td class="cmp-without">代码已经写乱了,改动成本高,容易越改越糟。</td>
    <td class="cmp-with">设计阶段就确认了方向,调整只需改方案,不用推倒重来。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我做一个记体重的工具</span></div>
    <div class="demo-step ai">AI:好,先确认几个问题——你想手动记录还是连智能秤?</div>
    <div class="demo-step ai">AI:需要图表趋势和提醒功能吗?主要在手机用还是电脑用?</div>
    <div class="demo-step ai">AI:这是整理好的方案(功能清单 + 页面设计),你看可以吗?</div>
    <div class="demo-step user">你:可以,就这么做 → AI 才开始动手开发</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 brainstorming 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 brainstorming 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
      <pre class="install-cmd">/plugin marketplace add obra/superpowers
/plugin install</pre>
    </div>
    <div class="install-block" data-tool="codex">
      <pre class="install-cmd">/plugins → 搜索 superpowers → Install Plugin</pre>
    </div>
    <div class="install-block" data-tool="cursor">
      <pre class="install-cmd">在 Cursor Agent 聊天中输入 /add-plugin superpowers</pre>
    </div>
    <div class="install-block" data-tool="gemini-cli">
      <pre class="install-cmd">gemini extensions install https://github.com/obra/superpowers</pre>
    </div>
    <div class="install-block" data-tool="opencode">
      <pre class="install-cmd">git clone https://github.com/obra/superpowers.git 对应技能目录(详见原仓库 README)</pre>
    </div>
    <div class="install-block" data-tool="reasonix">
      <pre class="install-cmd">用 install_source 安装 https://github.com/obra/superpowers(Reasonix 会引导你完成)</pre>
    </div>
  </div>
</details>

<div class="origin-box">
  <h4>来源与版权</h4>
  <ul>
    <li>原作者:Jesse Vincent (obra)</li>
    <li>原仓库:<a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></li>
    <li>许可证:<a href="https://github.com/obra/superpowers/blob/main/LICENSE" target="_blank" rel="noopener">MIT</a>(允许复制、修改、翻译、再分发,需保留版权声明)</li>
    <li>仓库路径:skills/brainstorming</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
