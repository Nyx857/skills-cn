// ①需求解析:parse.js —— LLM 把自然语言需求解析为结构化查询
import { chatComplete, extractList } from './llm.js'
import { CATEGORIES, TAG_VOCAB } from './catalog.js'

const SYSTEM = `你是技能推荐系统的需求解析器。技能库只包含以下分类(必须从中选择):

分类:${CATEGORIES.join('、') || '(空)'}
标签词表:${TAG_VOCAB.join('、') || '(空)'}

把用户的需求解析为严格 JSON(不要输出其他内容):
{
  "scenario": "简短场景名(如:工具开发、自媒体运营、数据分析、前端设计、调试排障)",
  "categories": ["从上方分类中选1-3个最相关的,精确使用原分类名"],
  "keywords": ["2-6个检索关键词,优先使用上方标签词表里的词,也允许用户原词"],
  "platform": "web | cli | agent-skill | 内容创作 | 数据分析 | 其他"
}`

export async function parseQuery(env, query) {
  const obj = await chatComplete(env, {
    system: SYSTEM,
    user: `用户需求:${query}`,
    json: true,
  })
  return {
    scenario: String(obj.scenario || '').trim(),
    categories: extractList(obj, 'categories').map((c) => String(c).trim()).filter((c) => CATEGORIES.includes(c)),
    keywords: extractList(obj, 'keywords'),
    platform: String(obj.platform || '').trim(),
  }
}
