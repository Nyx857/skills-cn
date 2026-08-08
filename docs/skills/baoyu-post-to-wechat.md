---
prev:
  text: "<span class=\"sk-name\">defuddle</span><span class=\"sk-desc\">让 AI 把网页变成干净的纯文字,去掉广告和导航,更省流量。</span>"
  link: "/skills/defuddle"
next:
  text: "<span class=\"sk-name\">baoyu-translate</span><span class=\"sk-desc\">中英互译的\"精翻\"神器:快翻/标准/精翻三档,支持术语表与长文分块。</span>"
  link: "/skills/baoyu-translate"
---
# baoyu-post-to-wechat

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">工具</span>
  <span class="source">来源: <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></span>
</div>

通过 API 或浏览器自动化把内容发布到微信公众号,支持文章(HTML/Markdown/纯文本)和图文贴图两种形式。Markdown 文章默认把外部链接转换为文末引用,更符合公众号阅读习惯。⚠️ 需要公众号 API 凭据或 Chrome CDP 环境。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">公众号发布自动化,排版处理实用;需要 API 凭据或浏览器环境。</p>
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
    <td class="cmp-scene">写好了文章要发公众号</td>
    <td class="cmp-without">复制粘贴到后台,格式全乱,调半天。</td>
    <td class="cmp-with">AI 直接发布,排版自动处理。</td>
  </tr>
  <tr>
    <td class="cmp-scene">文章里一堆外部链接</td>
    <td class="cmp-without">公众号不支持外链,读者点不了。</td>
    <td class="cmp-with">自动转成文末引用,体验友好。</td>
  </tr>
  <tr>
    <td class="cmp-scene">要发图文贴图</td>
    <td class="cmp-without">一张张贴图再编辑,繁琐。</td>
    <td class="cmp-with">多图图文一键发布。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:帮我把这篇 Markdown 发到公众号</span></div>
    <div class="demo-step ai">AI:确认发布形式(文章/贴图)。</div>
    <div class="demo-step ai">AI:处理排版与外链。</div>
    <div class="demo-step ai">AI:发布并回报结果。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 baoyu-post-to-wechat 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 baoyu-post-to-wechat 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的">复制这句话</button>
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
      <pre class="install-cmd">/plugin marketplace add JimLiu/baoyu-skills
/plugin install</pre>
    </div>
    <div class="install-block" data-tool="codex">
      <pre class="install-cmd">/plugins → 搜索 baoyu-skills → Install Plugin</pre>
    </div>
    <div class="install-block" data-tool="cursor">
      <pre class="install-cmd">在 Cursor Agent 聊天中输入 /add-plugin baoyu-skills</pre>
    </div>
    <div class="install-block" data-tool="gemini-cli">
      <pre class="install-cmd">gemini extensions install https://github.com/JimLiu/baoyu-skills</pre>
    </div>
    <div class="install-block" data-tool="opencode">
      <pre class="install-cmd">git clone https://github.com/JimLiu/baoyu-skills.git 对应技能目录(详见原仓库 README)</pre>
    </div>
    <div class="install-block" data-tool="reasonix">
      <pre class="install-cmd">用 install_source 安装 https://github.com/JimLiu/baoyu-skills(Reasonix 会引导你完成)</pre>
    </div>
  </div>
</details>

<div class="origin-box">
  <h4>来源与版权</h4>
  <ul>
    <li>原作者:JimLiu</li>
    <li>原仓库:<a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></li>
    <li>许可证:<a href="https://github.com/JimLiu/baoyu-skills/blob/main/LICENSE" target="_blank" rel="noopener">MIT</a>(允许复制、修改、翻译、再分发,需保留版权声明)</li>
    <li>仓库路径:skills/baoyu-post-to-wechat</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
