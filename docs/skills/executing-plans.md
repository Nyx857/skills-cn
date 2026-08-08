---
prev:
  text: "<span class=\"sk-name\">receiving-code-review</span><span class=\"sk-desc\">收到评审意见别急着改:先核实技术依据,该采纳的采纳,该反驳的反驳。</span>"
  link: "/skills/receiving-code-review"
next:
  text: "<span class=\"sk-name\">dispatching-parallel-agents</span><span class=\"sk-desc\">多个互相独立的任务,派多个子代理并行处理,互不干扰、大幅提速。</span>"
  link: "/skills/dispatching-parallel-agents"
---
# executing-plans

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">协作</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

在独立会话中加载已批准的实现计划,先批判性审阅再逐任务执行。计划按批次推进,每批完成后设人工检查点确认方向无误再继续,最后统一汇报结果。适合与 writing-plans 配合的正式执行流程,避免闷头做完才发现方向错了。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">与 writing-plans 配套的正式执行流程,分批检查点设计实用。</p>
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
    <td class="cmp-scene">计划很长,一次做完</td>
    <td class="cmp-without">做到一半方向偏了,整批返工。</td>
    <td class="cmp-with">分批执行,每批过一个人工检查点,及时纠偏。</td>
  </tr>
  <tr>
    <td class="cmp-scene">任务多不知道从哪下手</td>
    <td class="cmp-without">凭感觉挑着做,漏步骤。</td>
    <td class="cmp-with">按计划顺序逐任务执行,全部完成才收工。</td>
  </tr>
  <tr>
    <td class="cmp-scene">做完了没人验收</td>
    <td class="cmp-without">结果对不对没人确认。</td>
    <td class="cmp-with">每批检查点确认,最后统一汇报结果。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:按计划开始执行</span></div>
    <div class="demo-step ai">AI:审阅计划,确认理解无误。</div>
    <div class="demo-step ai">AI:执行第一批任务,停下等你确认。</div>
    <div class="demo-step ai">AI:逐批推进,全部完成汇报。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 executing-plans 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 executing-plans 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/executing-plans</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
