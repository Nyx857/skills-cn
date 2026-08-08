// 技能推荐服务入口:POST /api/skills/recommend
// 三阶段混合引擎:①LLM解析 → ②规则检索 → ③LLM排序(可选 detail 开发路线)
// 部署:Cloudflare Pages Functions(需配置环境变量 DEEPSEEK_API_KEY)
import { parseQuery } from './lib/parse.js'
import { searchCatalog, searchLoose } from './lib/search.js'
import { rankCandidates, buildRoadmap } from './lib/rank.js'
import { CATALOG } from './lib/catalog.js'

const bySlug = new Map(CATALOG.map((c) => [c.slug, c]))

export async function onRequestPost({ request, env }) {
  try {
    let body
    try {
      body = await request.json()
    } catch {
      return Response.json({ error: 'Body must be JSON: {"query": "...", "detail": false}' }, { status: 400 })
    }
    const query = String(body.query || '').trim()
    if (!query) return Response.json({ error: 'query is required' }, { status: 400 })
    const detail = !!body.detail

    // ① 解析(失败降级:直接用原文本检索)
    let parsed = null
    try {
      parsed = await parseQuery(env, query)
    } catch (e) {
      parsed = null
    }
    const searchKey = parsed || { keywords: [query], scenario: '', platform: '' }

    // ② 检索
    const candidates = searchCatalog(searchKey)

    // ③ 排序
    let recommendations = []
    let matched = false
    let degraded = !parsed
    if (candidates.length > 0) {
      try {
        const res = await rankCandidates(env, query, candidates)
        matched = res.matched
        recommendations = res.recommendations
      } catch {
        degraded = true
        matched = true
        recommendations = candidates.map((c, i) => ({ slug: c.slug, reason: c.summary, order: i + 1 }))
      }
    }

    // 无候选兜底:宽松检索给"沾边"条目,不硬凑
    let related = []
    if (candidates.length === 0) {
      related = searchLoose(query).map((c) => ({ slug: c.slug, reason: c.summary }))
    }

    // 组装响应(附 ask_phrase 安装语)
    const enrich = (r) => {
      const c = bySlug.get(r.slug)
      return {
        slug: r.slug,
        name: c ? c.name : r.slug,
        category: c ? c.category : '',
        kind: c ? c.kind : 'skill',
        reason: r.reason,
        order: r.order,
        ask_phrase: c ? c.ask_phrase : '',
      }
    }

    // detail:生成开发路线(失败不影响主结果)
    let roadmap = null
    if (detail && recommendations.length > 0) {
      try {
        roadmap = await buildRoadmap(env, query, recommendations)
      } catch {
        roadmap = null
      }
    }

    return Response.json({
      query,
      recommendations: recommendations.map(enrich),
      matched,
      related: related.map(enrich),
      degraded,
      roadmap,
    })
  } catch (e) {
    return Response.json({ error: 'Recommend service error: ' + e.message }, { status: 500 })
  }
}

export function onRequestGet() {
  return Response.json(
    { error: 'Use POST with {"query": "我要做一个记体重的工具", "detail": false}' },
    { status: 405 }
  )
}
