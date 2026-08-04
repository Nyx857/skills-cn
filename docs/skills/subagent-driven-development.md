---
prev:
  text: "<span class=\"sk-name\">systematic-debugging</span><span class=\"sk-desc\">程序出 bug 时,让 AI 先找原因再修,而不是瞎猜乱改。</span>"
  link: "/skills/systematic-debugging"
next:
  text: "<span class=\"sk-name\">verification-before-completion</span><span class=\"sk-desc\">AI 说\"做完了\"之前,必须真实验证过,不是嘴上说说。</span>"
  link: "/skills/verification-before-completion"
---
# subagent-driven-development

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">协作</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

面向复杂工程任务的自主执行机制。将计划中的任务派发给子代理并行处理,完成后由主代理逐项审查并持续推进。适用于方案已确认、需要 AI 长时间自主推进的实现阶段,可在不偏离既定计划的前提下显著提升执行效率。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level adv">进阶向</span></div>
  <p class="review-summary">工程化最强,配套脚本与模板齐全;强依赖宿主支持子代理派发,普通工具无法落地。</p>
  <p class="review-note">本报告由自动化实测生成:读取技能完整内容,按描述验证可执行性与依赖。</p>
</div>





## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 subagent-driven-development 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 subagent-driven-development 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/subagent-driven-development</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
