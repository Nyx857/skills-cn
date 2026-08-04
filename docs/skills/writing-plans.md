---
prev:
  text: "<span class=\"sk-name\">brainstorming</span><span class=\"sk-desc\">写代码前先聊清楚:你的想法会变成设计方案,你点头了才动手。</span>"
  link: "/skills/brainstorming"
next:
  text: "<span class=\"sk-name\">test-driven-development</span><span class=\"sk-desc\">先定好\"怎么算对\",再写代码让它通过——程序不容易出错。</span>"
  link: "/skills/test-driven-development"
---
# writing-plans

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">开发流程</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

将已确认的设计拆解为可执行的实现计划。以任务为单位组织步骤,明确每步的目标与验收方式,让计划具备可跟踪、可逐项执行的特点。通常承接 brainstorming 的设计产出,是进入实现阶段前的规划环节。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">模板化程度最高的技能,照模板就能产出可执行计划;产出较长,适合认真做项目的用户。</p>
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
    <td class="cmp-scene">项目稍微大一点</td>
    <td class="cmp-without">AI 想到哪做到哪,做着做着就乱套了。</td>
    <td class="cmp-with">AI 先把要做的事拆成一步步计划,照着做不乱。</td>
  </tr>
  <tr>
    <td class="cmp-scene">做一半想看看进度</td>
    <td class="cmp-without">说不清做到哪了,也不知道下一步该干嘛。</td>
    <td class="cmp-with">计划一目了然:完成几项、还剩几项,清清楚楚。</td>
  </tr>
  <tr>
    <td class="cmp-scene">中途换人接手</td>
    <td class="cmp-without">新接手的人看不懂做到哪,得从头捋。</td>
    <td class="cmp-with">照着计划就能接手,不用重新理解。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我做一个记账 App</span></div>
    <div class="demo-step ai">AI:好的,这是拆好的计划——第 1 步搭页面,第 2 步做记账功能,第 3 步做数据保存……</div>
    <div class="demo-step ai">AI:每步都有明确的完成标准,做完一步检查一步。</div>
    <div class="demo-step user">你:好,按计划做 → AI 一步步执行,不跑偏</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 writing-plans 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 writing-plans 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/writing-plans</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
