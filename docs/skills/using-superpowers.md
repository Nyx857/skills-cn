---
prev:
  text: "<span class=\"sk-name\">test-driven-development</span><span class=\"sk-desc\">先定好\"怎么算对\",再写代码让它通过——程序不容易出错。</span>"
  link: "/skills/test-driven-development"
next:
  text: "<span class=\"sk-name\">systematic-debugging</span><span class=\"sk-desc\">程序出 bug 时,让 AI 先找原因再修,而不是瞎猜乱改。</span>"
  link: "/skills/systematic-debugging"
---
# using-superpowers

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">开发流程</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

完整的软件开发工作流框架,统合需求梳理、方案设计、计划编排、测试驱动实现与完成验证等环节,为 AI 驱动的开发过程提供统一的执行规范。适合希望让 AI 以结构化方式承担完整开发任务的用户。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level adv">进阶向</span></div>
  <p class="review-summary">整套方法论的总开关,强制按流程干活;依赖配套技能齐全才完整,单独用价值有限。</p>
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
    <td class="cmp-scene">让 AI 做项目</td>
    <td class="cmp-without">AI 想到哪做到哪,做出来常常不是你要的。</td>
    <td class="cmp-with">先问清需求、写计划、按流程做,做完自检——一整套正经干活流程。</td>
  </tr>
  <tr>
    <td class="cmp-scene">需求稍微复杂</td>
    <td class="cmp-without">AI 容易理解偏,做一半才发现方向错了。</td>
    <td class="cmp-with">每一步都有确认环节,方向偏了立刻拉回来。</td>
  </tr>
  <tr>
    <td class="cmp-scene">想用 AI 认真做事</td>
    <td class="cmp-without">只能让它干点零碎小活,大项目不敢交。</td>
    <td class="cmp-with">有完整方法论兜底,大项目也能放心交给它。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我做个宠物领养小程序</span></div>
    <div class="demo-step ai">AI:先跟你确认需求——领养流程?要不要图片?</div>
    <div class="demo-step ai">AI:方案你确认后,我写实施计划。</div>
    <div class="demo-step ai">AI:按计划一步一步做,完成一项自检一项。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 using-superpowers 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 using-superpowers 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/using-superpowers</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
