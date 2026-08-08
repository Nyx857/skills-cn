---
prev:
  text: "<span class=\"sk-name\">baoyu-xhs-images</span><span class=\"sk-desc\">把内容拆成 1-10 张小红书风格图文卡片,12 种视觉风格 × 8 种布局任选。</span>"
  link: "/skills/baoyu-xhs-images"
next:
  text: "<span class=\"sk-name\">baoyu-infographic</span><span class=\"sk-desc\">把内容做成专业信息图:21 种布局 × 22 种视觉风格,自动推荐最佳组合。</span>"
  link: "/skills/baoyu-infographic"
---
# baoyu-cover-image

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">可视化</span>
  <span class="source">来源: <a href="https://github.com/JimLiu/baoyu-skills" target="_blank" rel="noopener">https://github.com/JimLiu/baoyu-skills</a></span>
</div>

从类型、配色、渲染、文字、情绪 5 个维度生成文章封面图,组合 11 套配色与 7 种渲染风格,支持电影宽幅(2.35:1)、宽屏(16:9)和方形(1:1)多种比例。⚠️ 需要可用的图像生成后端。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★☆ <span class="review-stars-num">4/5</span> <span class="rv-level">入门可用</span></div>
  <p class="review-summary">封面生成维度丰富、比例齐全;依赖图像后端,纯文本环境不可用。</p>
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
    <td class="cmp-scene">文章没封面,发出去没排面</td>
    <td class="cmp-without">随便找张图,风格不符。</td>
    <td class="cmp-with">AI 按内容生成定制封面,专业感拉满。</td>
  </tr>
  <tr>
    <td class="cmp-scene">不知道封面该用什么风格</td>
    <td class="cmp-without">瞎选模板,千篇一律。</td>
    <td class="cmp-with">5 个维度组合出独特设计。</td>
  </tr>
  <tr>
    <td class="cmp-scene">不同平台要不同尺寸</td>
    <td class="cmp-without">一张图到处裁,糊了。</td>
    <td class="cmp-with">支持 2.35:1 / 16:9 / 1:1 多种比例。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:给这篇教程生成封面</span></div>
    <div class="demo-step ai">AI:确认文章主题与情绪。</div>
    <div class="demo-step ai">AI:选配色、风格、比例。</div>
    <div class="demo-step ai">AI:生成封面图。</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 baoyu-cover-image 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 baoyu-cover-image 这个技能,它来自 https://github.com/JimLiu/baoyu-skills ,装好告诉我是干什么的">复制这句话</button>
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
    <li>仓库路径:skills/baoyu-cover-image</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
