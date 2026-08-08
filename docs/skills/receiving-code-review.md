---
prev:
  text: "<span class=\"sk-name\">subagent-driven-development</span><span class=\"sk-desc\">让 AI 自己派\"手下\"干活,做完再检查,能连续工作几小时。</span>"
  link: "/skills/subagent-driven-development"
next:
  text: "<span class=\"sk-name\">executing-plans</span><span class=\"sk-desc\">拿到写好的实现计划,按批次执行、每批设人工检查点,防止跑偏。</span>"
  link: "/skills/executing-plans"
---
# receiving-code-review

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">协作</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

处理代码评审反馈需要技术核实而非情感表演。面对看似不合理或含糊的意见,先验证其技术依据再决定是否采纳:对正确的意见虚心接受,对错误或过时的意见有理有据地说明。避免"表演式同意"和"盲目照做"。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">解决&quot;如何对待评审反馈&quot;的软技能,与 requesting-code-review 配套。</p>
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
    <td class="cmp-scene">收到一条看不懂的评审意见</td>
    <td class="cmp-without">不好意思问,先改了再说,结果改错方向。</td>
    <td class="cmp-with">AI 先帮你核实意见的技术依据,再决定怎么处理。</td>
  </tr>
  <tr>
    <td class="cmp-scene">评审说你的方案不对</td>
    <td class="cmp-without">要么全盘照改,要么硬顶,都伤协作。</td>
    <td class="cmp-with">AI 帮你有理有据地分析:对就采纳,不对就说明理由。</td>
  </tr>
  <tr>
    <td class="cmp-scene">评审意见前后矛盾</td>
    <td class="cmp-without">不知道怎么取舍。</td>
    <td class="cmp-with">AI 按技术优先级排序,给出取舍建议。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:这条评审意见合理吗?</span></div>
    <div class="demo-step ai">AI:分析意见背后的技术假设与影响。</div>
    <div class="demo-step ai">AI:给出结论:采纳/部分采纳/反驳,附依据。</div>
    <div class="demo-step ai">AI:按结论执行修改或回复评审者。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 receiving-code-review 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 receiving-code-review 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/receiving-code-review</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
