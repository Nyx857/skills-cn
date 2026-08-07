import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const skills = JSON.parse(readFileSync(join(__dirname, '../../data/skills.json'), 'utf8'))
const agents = JSON.parse(readFileSync(join(__dirname, '../../data/agents.json'), 'utf8'))

// 分类的中文名称与顺序
const categoryOrder = [
  '开发流程', '调试', '协作', '质量', '笔记知识库', '可视化', '工具', '设计/前端'
]

// 侧边栏:按分类分组,每组标题可点击(跳到技能库页对应分类锚点);每项只显示技能名(简洁)
const categoryGroups = categoryOrder.map(cat => {
  const items = skills
    .filter(s => s.category === cat)
    .map(s => ({
      text: s.name,
      link: `/skills/${s.slug}`
    }))
  return { text: cat, link: `/skills/#${encodeURIComponent(cat)}`, items }
})

const skillSidebar = [
  { text: '全部技能', link: '/skills/' },
  ...categoryGroups
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'Skills · 中文 AI 技能库',
  description: '面向中文用户的 AI agent skills 导航与一键安装平台',
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#42b883' }]
  ],
  themeConfig: {
    appearance: 'dark', /* 强制深色主题(toolknit 风格) */
    nav: [
      { text: '首页', link: '/' },
      { text: '技能库', link: '/skills/' },
      { text: '专家角色', link: '/agents/' },
      { text: '关于本站', link: '/about' }
    ],
    sidebar: [
      {
        text: '技能库',
        items: skillSidebar
      },
      {
        text: '专家角色',
        items: [
          { text: '全部专家角色', link: '/agents/' },
          ...agents.map(a => ({ text: a.name, link: `/agents/${a.slug}` }))
        ]
      }
    ],
    footer: {
      message: '本站仅提供中文导读与索引,所有技能版权归原作者所有',
      copyright: 'Skills 中文技能库'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索技能', buttonAriaLabel: '搜索技能' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    }
  }
})
