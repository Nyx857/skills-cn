// 规则检索:search.js —— 用解析结果在目录中计分匹配(纯本地,零成本)
import { CATALOG } from './catalog.js'

// 正常检索:分类命中(决定性) + 关键词对 name/tags/summary 计分,取 Top-N
export function searchCatalog(query, { topN = 8 } = {}) {
  const cats = (query.categories || [])
    .map((c) => String(c).toLowerCase())
    .filter((c) => c.length > 0)
  const kws = (query.keywords || [])
    .map((k) => String(k).toLowerCase())
    .filter((k) => k.length > 0)
  const scenario = (query.scenario || '').toLowerCase()
  const platform = (query.platform || '').toLowerCase()

  const scored = []
  for (const item of CATALOG) {
    const name = (item.name || '').toLowerCase()
    const summary = (item.summary || '').toLowerCase()
    const category = (item.category || '').toLowerCase()
    const tags = (item.tags || []).map((t) => t.toLowerCase())
    let score = 0

    // 分类命中:决定性(语义转换交给 LLM,这里做精确匹配)
    if (cats.length > 0 && cats.some((c) => c === category || c.includes(category) || category.includes(c))) {
      score += 5
    }

    for (const k of kws) {
      if (k.length >= 2 && name.includes(k)) score += 3
      if (tags.some((t) => t.includes(k) || (k.length >= 2 && k.includes(t)))) score += 2
      if (k.length >= 2 && summary.includes(k)) score += 1
    }
    // 场景词命中分类/标签(如"前端设计"命中"设计/前端"分类)
    if (scenario.length >= 2 && (category.includes(scenario) || scenario.includes(category))) score += 3
    // 平台词命中 summary/name(如 "web" 命中"前端")
    if (platform.length >= 3 && (summary.includes(platform) || name.includes(platform))) score += 2

    if (score > 0) scored.push({ item, score })
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topN).map((x) => x.item)
}

// 宽松检索:无候选时兜底——关键词拆分到双字组,匹配 name/summary 任一字组
export function searchLoose(queryText, { topN = 3 } = {}) {
  const text = String(queryText || '').toLowerCase()
  const grams = []
  const chars = [...text].filter((c) => /[\u4e00-\u9fa5a-z0-9]/.test(c))
  for (let i = 0; i < chars.length - 1; i++) grams.push(chars[i] + chars[i + 1])
  const uniqGrams = [...new Set(grams)].filter((g) => g.length === 2)

  const scored = []
  for (const item of CATALOG) {
    const name = (item.name || '').toLowerCase()
    const summary = (item.summary || '').toLowerCase()
    let score = 0
    for (const g of uniqGrams) {
      if (name.includes(g)) score += 2
      if (summary.includes(g)) score += 1
    }
    if (score > 0) scored.push({ item, score })
  }
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topN).map((x) => x.item)
}
