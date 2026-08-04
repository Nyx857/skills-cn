---
prev:
  text: "<span class=\"sk-name\">using-superpowers</span><span class=\"sk-desc\">一套完整的\"让 AI 正经干活\"的方法论:先想清楚、再计划、再动手、做完自检。</span>"
  link: "/skills/using-superpowers"
next:
  text: "<span class=\"sk-name\">subagent-driven-development</span><span class=\"sk-desc\">让 AI 自己派\"手下\"干活,做完再检查,能连续工作几小时。</span>"
  link: "/skills/subagent-driven-development"
---
# systematic-debugging

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">调试</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

系统化的缺陷排查方法论。面对任何 bug、测试失败或异常行为,先完成根因调查(复现问题、检查近期变更、收集证据),再形成假设并最小化验证,最后针对根因实施修复。避免凭直觉乱改,提高排障效率与修复质量。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">四阶段调试流程严谨,含多组件系统取证示例;零外部依赖,装完即用,排障场景价值高。</p>
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
    <td class="cmp-scene">程序出 bug</td>
    <td class="cmp-without">AI 瞎猜一个地方就改,往往越改越糟。</td>
    <td class="cmp-with">先复现问题、找真正原因,再改最小的地方。</td>
  </tr>
  <tr>
    <td class="cmp-scene">改完没修好</td>
    <td class="cmp-without">继续瞎猜乱试,浪费一堆时间。</td>
    <td class="cmp-with">换个假设再验证,一步步逼近根因。</td>
  </tr>
  <tr>
    <td class="cmp-scene">问题反复出现</td>
    <td class="cmp-without">每次修一个症状,下次换个地方又犯。</td>
    <td class="cmp-with">找到根因一次修好,不再反复。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:网站打不开了,帮我看看</span></div>
    <div class="demo-step ai">AI:先看报错日志,定位是哪一步出的问题。</div>
    <div class="demo-step ai">AI:复现一下:刷新页面,确认每次都报同样的错。</div>
    <div class="demo-step ai">AI:找到了——是数据库连接配置错了,改这一处。</div>
    <div class="demo-step ai">AI:修完再刷新验证:网站正常打开了 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 systematic-debugging 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 systematic-debugging 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/systematic-debugging</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
