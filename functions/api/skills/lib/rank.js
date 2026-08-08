// ③排序与路线:rank.js —— LLM 评估候选契合度,输出推荐列表;detail 时生成开发路线
import { chatComplete, extractList } from './llm.js'

// 排序:候选压缩字段整体注入,LLM 判断契合度与使用顺序
export async function rankCandidates(env, query, candidates) {
  const lines = candidates.map(
    (c, i) =>
      `${i + 1}. slug=${c.slug} | 名称=${c.name} | 类型=${c.kind} | 分类=${c.category} | 标签=${(c.tags || []).join('/')} | 简介=${c.summary}`
  ).join('\n')

  const SYSTEM = `你是技能推荐系统的排序专家。技能库的候选条目如下(只可从中选择):

${lines}

判断每个候选对用户需求的契合度,输出严格 JSON:
{
  "matched": true或false,
  "recommendations": [
    {"slug": "候选slug", "reason": "推荐理由(≤60字,说明为什么适合、解决哪一环)", "order": 1}
  ]
}

规则:
- 只选真正契合的,宁缺毋滥;完全不契合时 matched=false,recommendations 为空数组
- 多个技能时按使用先后排序(order 从 1 开始)
- 不要修改 slug,不要发明不存在的条目`

  const obj = await chatComplete(env, {
    system: SYSTEM,
    user: `用户需求:${query}`,
    json: true,
  })

  const matched = obj.matched !== false
  const recs = extractList(obj, 'recommendations').map((r) => ({
    slug: String(r.slug || '').trim(),
    reason: String(r.reason || '').trim(),
    order: Number(r.order) || 0,
  })).filter((r) => r.slug && candidates.some((c) => c.slug === r.slug))

  return { matched: matched && recs.length > 0, recommendations: recs }
}

// 开发路线(detail=true):按推荐顺序生成步骤化方案
export async function buildRoadmap(env, query, recommendations) {
  const lines = recommendations.map(
    (r) => `- ${r.order}. ${r.name || r.slug}:${r.reason || ''}`
  ).join('\n')

  const SYSTEM = `你是资深技术项目经理。用户要开发一个项目,已选定以下技能配合使用:

${lines}

请输出"开发路线"——按使用顺序的步骤化方案,每步包含:做什么、用哪个技能、产出什么。语言通俗,面向非技术用户,≤400字。纯文本,不要用 markdown 标题。`

  return chatComplete(env, {
    system: SYSTEM,
    user: `项目需求:${query}`,
    json: false,
    temperature: 0.4,
  })
}
