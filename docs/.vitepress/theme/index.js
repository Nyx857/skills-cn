import { defineComponent, h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import MobileHomeLink from './MobileHomeLink.vue'
import './custom.css'

// 包装默认 Layout,向导航栏 slot 注入手机端"首页"链接
const Layout = defineComponent({
  setup(_, { slots }) {
    return () =>
      h(DefaultTheme.Layout, null, {
        'nav-bar-content-before': () => h(MobileHomeLink),
        ...slots
      })
  }
})

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router }) {
    // 安装适配器交互:全部在客户端执行,SSR 构建不涉及 DOM
    function setupInstaller() {
      const pills = document.querySelectorAll('.tool-pill')
      const blocks = document.querySelectorAll('.install-block')
      if (!pills.length || !blocks.length) return

      function show(tool) {
        blocks.forEach(b => (b.style.display = b.dataset.tool === tool ? '' : 'none'))
        pills.forEach(p => p.classList.toggle('active', p.dataset.tool === tool))
      }
      pills.forEach(p =>
        p.addEventListener('click', () => show(p.dataset.tool))
      )
      show(pills[0].dataset.tool)
    }

    // 复制按钮:事件委托,支持 data-copy(一句话)和 .install-cmd(命令块)
    if (typeof document !== 'undefined') {
      document.addEventListener('click', (e) => {
        const btn = e.target.closest('.copy-btn')
        if (!btn) return
        const text = btn.dataset.copy || btn.parentElement.querySelector('.install-cmd')?.innerText
        if (!text) return
        navigator.clipboard.writeText(text).then(() => {
          const old = btn.textContent
          btn.textContent = '已复制 ✓'
          setTimeout(() => (btn.textContent = old), 1500)
        })
      })
    }

    // 滚动淡入:先给 body 加 js-fade-enabled 标记(CSS 用它兜底),
    // 再给卡片加 .fade-in 并用 IntersectionObserver 逐个显现
    let observer = null
    function setupFadeIn() {
      if (typeof document === 'undefined' || typeof IntersectionObserver === 'undefined') return
      document.body.classList.add('js-fade-enabled')
      const cards = document.querySelectorAll('.home-grid .home-card')
      if (!cards.length) {
        // 内容可能还没渲染完:等待后再试(最多 3 次)
        if (!window.__fadeRetry) window.__fadeRetry = 0
        if (window.__fadeRetry < 3) {
          window.__fadeRetry++
          setTimeout(setupFadeIn, 300)
        }
        return
      }
      cards.forEach(c => c.classList.add('fade-in'))
      if (!observer) {
        observer = new IntersectionObserver((entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => entry.target.classList.add('visible'), i * 60)
              observer.unobserve(entry.target)
            }
          })
        }, { threshold: 0.15 })
      }
      cards.forEach(c => observer.observe(c))
    }

    function onRoute() {
      if (typeof document !== 'undefined') {
        setupInstaller()
        setupFadeIn()
      }
    }

    router.onAfterRouteChanged = onRoute

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // 若 DOM 已就绪立即执行,否则等 DOMContentLoaded
      if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', onRoute)
      } else {
        onRoute()
      }
    }
  }
}
