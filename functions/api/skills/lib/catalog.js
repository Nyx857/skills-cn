// 技能库目录:catalog.js —— 加载生成的数据模块,构建检索索引
import { SKILLS, AGENTS } from './catalog-data.js'

// 统一目录:技能 + 专家角色(都是"技能"候选)
export const CATALOG = [
  ...SKILLS.map((s) => ({ ...s, kind: 'skill' })),
  ...AGENTS.map((a) => ({ ...a, kind: 'agent' })),
]

// 全量分类与标签词表(供解析阶段 LLM 参考,约束其输出范围)
export const CATEGORIES = [...new Set(CATALOG.map((x) => x.category).filter(Boolean))]
export const TAG_VOCAB = [...new Set(CATALOG.flatMap((x) => x.tags || []))].filter(Boolean)
