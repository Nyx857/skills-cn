<script>
import { defineComponent, h } from 'vue'
import { useRoute } from 'vitepress'

// 手机端导航栏常驻"首页"链接(桌面端有完整导航菜单,此链接仅在窄屏显示)
export default defineComponent({
  name: 'MobileHomeLink',
  setup() {
    const route = useRoute()
    return () => {
      const isHome = route.path === '/'
      return h(
        'a',
        {
          href: '/',
          class: ['mobile-home-link', { active: isHome }],
          'aria-label': '首页'
        },
        '首页'
      )
    }
  }
})
</script>
