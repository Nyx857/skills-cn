// LLM 调用封装:llm.js —— DeepSeek chat completions + 容错解析
// 与 ai-exam-coach 的 functions/api/chat.js 同一模式:读 env.DEEPSEEK_API_KEY,不暴露给前端

export async function chatComplete(env, { system, user, json = false, temperature = 0.2 }) {
  const apiKey = env.DEEPSEEK_API_KEY
  if (!apiKey) throw new Error('DEEPSEEK_API_KEY missing')

  const resp = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      temperature,
      max_tokens: json ? 1600 : 2000,
      ...(json ? { response_format: { type: 'json_object' } } : {}),
    }),
  })

  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`DeepSeek ${resp.status}: ${text.slice(0, 300)}`)
  }

  const data = await resp.json()
  const content = (data.choices && data.choices[0] && data.choices[0].message
    ? data.choices[0].message.content
    : '')
  if (!content) throw new Error('DeepSeek returned empty content')

  return json ? parseJsonLoose(content) : content
}

// 容错 JSON 解析:剥 markdown 代码块 → 截取首个 {…} → parse;失败抛错由上层降级
export function parseJsonLoose(text) {
  let t = String(text).trim()
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fence) t = fence[1].trim()
  const start = t.indexOf('{')
  const end = t.lastIndexOf('}')
  if (start >= 0 && end > start) {
    try {
      return JSON.parse(t.slice(start, end + 1))
    } catch {
      /* fallthrough to error */
    }
  }
  throw new Error('LLM output is not valid JSON: ' + String(text).slice(0, 200))
}

export function extractList(obj, key, fallback = []) {
  const v = obj && obj[key]
  return Array.isArray(v) ? v : fallback
}
