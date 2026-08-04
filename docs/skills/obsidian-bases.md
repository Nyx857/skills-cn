---
prev:
  text: "<span class=\"sk-name\">obsidian-markdown</span><span class=\"sk-desc\">让 AI 会写 Obsidian 笔记的专属语法,笔记不乱、链接好用。</span>"
  link: "/skills/obsidian-markdown"
next:
  text: "<span class=\"sk-name\">obsidian-cli</span><span class=\"sk-desc\">让 AI 能直接操作你的 Obsidian 笔记库:搜笔记、建笔记、整理笔记。</span>"
  link: "/skills/obsidian-cli"
---
# obsidian-bases

<div class="skill-meta">
  <span class="badge license">MIT</span>
  <span class="badge category">笔记知识库</span>
  <span class="source">来源: <a href="https://github.com/kepano/obsidian-skills" target="_blank" rel="noopener">https://github.com/kepano/obsidian-skills</a></span>
</div>

指导创建与编辑 Obsidian Bases 数据库文件,通过视图、筛选、公式与汇总等能力,将分散的笔记组织为可结构化查询的表格形态。适合笔记量大、需要以数据化方式管理知识的场景。

<div class="review-box">
  <h3>🔍 实测报告</h3>
  <div class="review-stars">★★★★★ <span class="review-stars-num">5/5</span> <span class="rv-level adv">进阶向</span></div>
  <p class="review-summary">内容最厚的 obsidian 技能,三个可直接复制的示例;需新版 Obsidian 与核心插件,较新功能。</p>
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
    <td class="cmp-scene">笔记多了想汇总</td>
    <td class="cmp-without">只能一篇篇翻,想看"哪些读完、哪些没读"很难。</td>
    <td class="cmp-with">AI 把笔记做成表格视图,筛选排序一目了然。</td>
  </tr>
  <tr>
    <td class="cmp-scene">想按条件找笔记</td>
    <td class="cmp-without">手动翻半天,或者想不起关键词。</td>
    <td class="cmp-with">表格里按状态/日期/评分筛选,几秒找到。</td>
  </tr>
  <tr>
    <td class="cmp-scene">数据化整理笔记</td>
    <td class="cmp-without">笔记就是纯文字,没法统计。</td>
    <td class="cmp-with">AI 建好 Base,笔记变成可统计的数据库。</td>
  </tr>
    </tbody>
  </table>
  <div class="demo-box">
    <h4>装好后,AI 会这样帮你干活</h4>
    <div class="demo-chat">
      <div class="demo-step note"><span class="demo-prompt">你:把我的读书笔记变成表格</span></div>
    <div class="demo-step ai">AI:建一个"读书笔记"Base:书名 | 作者 | 评分 | 状态。</div>
    <div class="demo-step ai">AI:把现有笔记填进去,没读的标记为"待读"。</div>
    <div class="demo-step ai">AI:好了,现在能按状态筛选、按评分排序了 ✅</div>
    </div>
  </div>
</div>



## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">帮我安装 obsidian-bases 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的</pre>
  <button class="copy-btn big" data-copy="帮我安装 obsidian-bases 这个技能,它来自 https://github.com/kepano/obsidian-skills ,装好告诉我是干什么的">复制这句话</button>
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
      <pre class="install-cmd">/plugin marketplace add kepano/obsidian-skills
/plugin install</pre>
    </div>
    <div class="install-block" data-tool="codex">
      <pre class="install-cmd">/plugins → 搜索 obsidian-skills → Install Plugin</pre>
    </div>
    <div class="install-block" data-tool="cursor">
      <pre class="install-cmd">在 Cursor Agent 聊天中输入 /add-plugin obsidian-skills</pre>
    </div>
    <div class="install-block" data-tool="gemini-cli">
      <pre class="install-cmd">gemini extensions install https://github.com/kepano/obsidian-skills</pre>
    </div>
    <div class="install-block" data-tool="opencode">
      <pre class="install-cmd">git clone https://github.com/kepano/obsidian-skills.git 对应技能目录(详见原仓库 README)</pre>
    </div>
    <div class="install-block" data-tool="reasonix">
      <pre class="install-cmd">用 install_source 安装 https://github.com/kepano/obsidian-skills(Reasonix 会引导你完成)</pre>
    </div>
  </div>
</details>

<div class="origin-box">
  <h4>来源与版权</h4>
  <ul>
    <li>原作者:Steph Ango (kepano)</li>
    <li>原仓库:<a href="https://github.com/kepano/obsidian-skills" target="_blank" rel="noopener">https://github.com/kepano/obsidian-skills</a></li>
    <li>许可证:<a href="https://github.com/kepano/obsidian-skills/blob/main/LICENSE" target="_blank" rel="noopener">MIT</a>(允许复制、修改、翻译、再分发,需保留版权声明)</li>
    <li>仓库路径:skills/obsidian-bases</li>
  </ul>
</div>

[← 返回全部技能](/skills/)
