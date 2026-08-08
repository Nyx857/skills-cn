---
prev:
  text: "<span class=\"sk-name\">baoyu-cover-image</span><span class=\"sk-desc\">给文章生成高质量封面图:5 个设计维度 × 11 套配色 × 7 种渲染风格。</span>"
  link: "/skills/baoyu-cover-image"
next:
  text: "<span class=\"sk-name\">defuddle</span><span class=\"sk-desc\">让 AI 把网页变成干净的纯文字,去掉广告和导航,更省流量。</span>"
  link: "/skills/defuddle"
---
# baoyu-infographic

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">可视化</span>
  <span class="source">来源: <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></span>
</div>

分析内容后自动推荐布局×风格组合,生成可直接发布的信息图。21 种布局类型、22 种视觉风格,适合数据总结、流程说明、科普内容等高密度信息可视化。⚠️ 需要可用的图像生成后端。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">信息图生成专业、布局风格海量;依赖图像后端。</p>
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
    <td class="cmp-scene">一堆数据要讲清楚</td>
    <td class="cmp-without">文字堆砌,读者没耐心。</td>
    <td class="cmp-with">信息图一图看懂,重点突出。</td>
  </tr>
  <tr>
    <td class="cmp-scene">不知道信息图怎么排版</td>
    <td class="cmp-without">自己排得又乱又丑。</td>
    <td class="cmp-with">21 种布局,AI 自动推荐最佳组合。</td>
  </tr>
  <tr>
    <td class="cmp-scene">要发科普/总结内容</td>
    <td class="cmp-without">长文没人看。</td>
    <td class="cmp-with">高密度信息一图呈现,适合传播。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:把这份数据做成信息图</span></div>
    <div class="demo-step ai">AI:分析内容结构。</div>
    <div class="demo-step ai">AI:推荐布局×风格。</div>
    <div class="demo-step ai">AI:生成信息图。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 baoyu-infographic 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 baoyu-infographic 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/baoyu-infographic</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
