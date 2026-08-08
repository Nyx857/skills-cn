---
prev:
  text: "<span class=\"sk-name\">verification-before-completion</span><span class=\"sk-desc\">AI 说\"做完了\"之前,必须真实验证过,不是嘴上说说。</span>"
  link: "/skills/verification-before-completion"
next:
  text: "<span class=\"sk-name\">obsidian-markdown</span><span class=\"sk-desc\">让 AI 会写 Obsidian 笔记的专属语法,笔记不乱、链接好用。</span>"
  link: "/skills/obsidian-markdown"
---
# requesting-code-review

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">质量</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

完成任务或合并分支前,把代码交给独立评审子代理检查。评审者只拿到精心准备的上下文、不继承你的会话历史,能客观发现规格偏差、隐藏 bug 与可维护性问题。"早评审、勤评审"——问题发现得越晚,修复成本越高。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">结构完整、评审流程可直接执行;与 receiving-code-review 成对使用效果最佳。</p>
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
    <td class="cmp-scene">写完功能想直接提交</td>
    <td class="cmp-without">合并后才发现逻辑 bug、规格偏差,返工又影响别人。</td>
    <td class="cmp-with">AI 先当评审官审一遍,问题在合并前就修掉。</td>
  </tr>
  <tr>
    <td class="cmp-scene">代码只有自己看过</td>
    <td class="cmp-without">没人把关,隐藏问题进主线。</td>
    <td class="cmp-with">独立评审子代理客观检查,不带你的视角盲区。</td>
  </tr>
  <tr>
    <td class="cmp-scene">评审意见一大堆</td>
    <td class="cmp-without">不知道哪些必须改、哪些可以忽略。</td>
    <td class="cmp-with">按严重度分级,关键问题优先修,不阻塞的记下来。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我评审一下这次改动</span></div>
    <div class="demo-step ai">AI:派独立评审子代理,给足代码与需求上下文。</div>
    <div class="demo-step ai">AI:按严重度输出问题清单:必须修/建议改/可忽略。</div>
    <div class="demo-step ai">AI:你确认后逐个修复,再复评通过。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 requesting-code-review 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 requesting-code-review 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/requesting-code-review</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
