// 从 data/skills.json 生成 VitePress 技能详情页
// 用法: node scripts/generate.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const skills = JSON.parse(readFileSync(join(root, 'data/skills.json'), 'utf8'))

const outDir = join(root, 'docs', 'skills')
mkdirSync(outDir, { recursive: true })

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// 详情页的"给 AI 的一句话"安装区
function renderInstall(s) {
  const phrase = s.ask_phrase || `帮我安装 ${s.name} 这个技能,它来自 ${s.source_url},装好告诉我是干什么的`
  return `## 安装(超简单,一句话搞定)

**不用敲任何命令。** 复制下面这句话,发给你的 AI 助手(Claude Code、Reasonix、Cursor、Codex 等都行),它会自己帮你装好:

<div class="ask-box">
  <pre class="ask-phrase">${esc(phrase)}</pre>
  <button class="copy-btn big" data-copy="${esc(phrase)}">复制这句话</button>
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
      <pre class="install-cmd">/plugin marketplace add ${s.source_url.replace('https://github.com/', '')}
/plugin install</pre>
    </div>
    <div class="install-block" data-tool="codex">
      <pre class="install-cmd">/plugins → 搜索 ${s.source_url.split('/').pop()} → Install Plugin</pre>
    </div>
    <div class="install-block" data-tool="cursor">
      <pre class="install-cmd">在 Cursor Agent 聊天中输入 /add-plugin ${s.source_url.split('/').pop()}</pre>
    </div>
    <div class="install-block" data-tool="gemini-cli">
      <pre class="install-cmd">gemini extensions install ${s.source_url}</pre>
    </div>
    <div class="install-block" data-tool="opencode">
      <pre class="install-cmd">git clone ${s.source_url}.git 对应技能目录(详见原仓库 README)</pre>
    </div>
    <div class="install-block" data-tool="reasonix">
      <pre class="install-cmd">用 install_source 安装 ${s.source_url}(Reasonix 会引导你完成)</pre>
    </div>
  </div>
</details>

<div class="origin-box">
  <h4>来源与版权</h4>
  <ul>
    <li>原作者:${esc(s.author)}</li>
    <li>原仓库:<a href="${s.source_url}" target="_blank" rel="noopener">${s.source_url}</a></li>
    <li>许可证:<a href="${s.license_url}" target="_blank" rel="noopener">${s.license}</a>(允许复制、修改、翻译、再分发,需保留版权声明)</li>
    <li>仓库路径:${esc(s.source_path)}</li>
  </ul>
</div>

[← 返回全部技能](/skills/)`
}

function renderPage(s, prev, next) {
  // frontmatter:自定义 Prev/Next 文案 —— skill 名小字、中文简介大字(v-html 渲染)
  const linkText = (item) =>
    `<span class="sk-name">${item.name}</span><span class="sk-desc">${item.summary}</span>`
  const yaml = ['---']
  if (prev) {
    yaml.push(`prev:\n  text: ${JSON.stringify(linkText(prev))}\n  link: ${JSON.stringify(prev.link)}`)
  } else {
    yaml.push('prev: false')
  }
  if (next) {
    yaml.push(`next:\n  text: ${JSON.stringify(linkText(next))}\n  link: ${JSON.stringify(next.link)}`)
  } else {
    yaml.push('next: false')
  }
  yaml.push('---')
  return `${yaml.join('\n')}
# ${s.name}

<div class="skill-meta">
  <span class="badge license">${s.license}</span>
  <span class="badge category">${s.category}</span>
  <span class="source">来源: <a href="${s.source_url}" target="_blank" rel="noopener">${s.source_url}</a></span>
</div>

${s.detail}

${renderInstall(s)}
`
}

for (let i = 0; i < skills.length; i++) {
  const s = skills[i]
  // Prev/Next 按"分类分组后的顺序"(与侧边栏一致),避免跨分类时 VitePress 取错
  // 分组顺序:categoryOrder 数组定义,组内按 data 顺序
  const categoryOrder = ['开发流程', '调试', '协作', '质量', '笔记知识库', '可视化', '工具']
  const grouped = []
  for (const cat of categoryOrder) {
    grouped.push(...skills.filter(x => x.category === cat))
  }
  const idx = grouped.findIndex(x => x.slug === s.slug)
  const prev = idx > 0
    ? { name: grouped[idx - 1].name, summary: grouped[idx - 1].summary, link: `/skills/${grouped[idx - 1].slug}` }
    : null
  const next = idx < grouped.length - 1
    ? { name: grouped[idx + 1].name, summary: grouped[idx + 1].summary, link: `/skills/${grouped[idx + 1].slug}` }
    : null
  writeFileSync(join(outDir, `${s.slug}.md`), renderPage(s, prev, next), 'utf8')
  console.log(`generated: skills/${s.slug}.md`)
}

// 生成 skills 列表页(供 /skills/ 导航)——卡片式布局,按分类分组
const categoryOrder = ['开发流程', '调试', '协作', '质量', '笔记知识库', '可视化', '工具']
const byCat = {}
for (const s of skills) {
  ;(byCat[s.category] ||= []).push(s)
}
const sections = categoryOrder
  .filter(cat => byCat[cat])
  .map(cat => {
    const cards = byCat[cat].map(s => `<a href="./${s.slug}" class="skill-card">
  <span class="skill-card-head"><span class="skill-card-name">${s.name}</span><span class="skill-card-license">${s.license}</span></span>
  <span class="skill-card-summary">${s.summary}</span>
</a>`).join('\n')
    return `## ${cat}\n\n<div class="skill-card-grid">\n${cards}\n</div>`
  })
  .join('\n\n')

const listPage = `# 技能库

共收录 **${skills.length}** 个精选技能(持续扩充中)。全部为 MIT 等宽松许可证,可放心安装。点进任意技能,复制一句话就能装。

${sections}

---
> 想收录你的技能?见 [关于本站](/about)。
`
writeFileSync(join(outDir, 'index.md'), listPage, 'utf8')
console.log('generated: skills/index.md')
console.log(`total: ${skills.length} skills`)
