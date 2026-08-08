---
prev:
  text: "<span class=\"sk-name\">executing-plans</span><span class=\"sk-desc\">拿到写好的实现计划,按批次执行、每批设人工检查点,防止跑偏。</span>"
  link: "/skills/executing-plans"
next:
  text: "<span class=\"sk-name\">verification-before-completion</span><span class=\"sk-desc\">AI 说\"做完了\"之前,必须真实验证过,不是嘴上说说。</span>"
  link: "/skills/verification-before-completion"
---
# dispatching-parallel-agents

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">协作</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

当有 2 个以上无共享状态、无先后依赖的独立任务时,为每个任务构造精确的指令和上下文,派发专门子代理并行执行。子代理拥有隔离上下文、不继承你的会话历史——既保证专注,又节省你用于协调的上下文空间。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level adv">进阶向</span></div>
  <p class="review-summary">并行子代理方法论,适合任务多且独立的场景;需要运行环境支持子代理。</p>
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
    <td class="cmp-scene">三件事互不相关要一起做</td>
    <td class="cmp-without">串行一件件来,等得着急。</td>
    <td class="cmp-with">同时派三个子代理,各干各的,一次收齐。</td>
  </tr>
  <tr>
    <td class="cmp-scene">任务多上下文塞不下</td>
    <td class="cmp-without">主对话被无关内容占满,越做越乱。</td>
    <td class="cmp-with">子代理隔离上下文,主对话只留结论,清爽高效。</td>
  </tr>
  <tr>
    <td class="cmp-scene">子任务需要不同专业</td>
    <td class="cmp-without">一个代理硬干所有类型。</td>
    <td class="cmp-with">每个子代理只专注自己的任务,指令精确。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我同时做调研和写周报</span></div>
    <div class="demo-step ai">AI:拆成独立任务,各配专属上下文。</div>
    <div class="demo-step ai">AI:并行派发子代理执行。</div>
    <div class="demo-step ai">AI:收齐结果,汇总给你。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 dispatching-parallel-agents 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 dispatching-parallel-agents 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/dispatching-parallel-agents</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
