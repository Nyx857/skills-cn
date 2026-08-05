---
prev:
  text: "<span class=\"sk-name\">subagent-driven-development</span><span class=\"sk-desc\">让 AI 自己派\"手下\"干活,做完再检查,能连续工作几小时。</span>"
  link: "/skills/subagent-driven-development"
next:
  text: "<span class=\"sk-name\">obsidian-markdown</span><span class=\"sk-desc\">让 AI 会写 Obsidian 笔记的专属语法,笔记不乱、链接好用。</span>"
  link: "/skills/obsidian-markdown"
---
# verification-before-completion

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">质量</span>
  <span class="source">来源: <a href="https://github.com/obra/superpowers" target="_blank" rel="noopener">https://github.com/obra/superpowers</a></span>
</div>

完成前的强制验证机制。要求交付前以可复现的证据确认工作真正达标:运行测试、验证功能行为、核对需求覆盖,而不是仅凭主观判断宣称完成。适用于各类交付型任务,确保产出可被验证、可被信赖。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">短小精悍的行为约束:完成前必须给证据。零依赖随时可执行,效果取决于 agent 自觉性。</p>
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
    <td class="cmp-scene">AI 说&quot;做完了&quot;</td>
    <td class="cmp-without">它凭感觉觉得做好了,实际可能没验证过。</td>
    <td class="cmp-with">完成前必须真的跑一遍、确认能用,拿证据说话。</td>
  </tr>
  <tr>
    <td class="cmp-scene">交付前检查</td>
    <td class="cmp-without">靠 AI 自己说&quot;应该没问题&quot;,心里没底。</td>
    <td class="cmp-with">每个环节都有验证记录,你可以直接相信。</td>
  </tr>
  <tr>
    <td class="cmp-scene">多步骤任务</td>
    <td class="cmp-without">某一步其实没做成,但 AI 没发现就继续了。</td>
    <td class="cmp-with">每步完成都验证,漏掉的步骤逃不过检查。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我做完这个登录功能</span></div>
    <div class="demo-step ai">AI:写完了,现在实际验证——打开页面,输入账号密码。</div>
    <div class="demo-step ai">AI:登录成功 ✅ 数据也正确。</div>
    <div class="demo-step ai">AI:再测一下错误密码:提示正常 ✅ 可以交付了。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 verification-before-completion 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 verification-before-completion 这个技能,它来自 https://github.com/obra/superpowers ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/verification-before-completion</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
