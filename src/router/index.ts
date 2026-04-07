import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    const reducedMotion =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior = reducedMotion ? 'auto' : 'smooth'

    if (to.hash) {
      return {
        el: to.hash,
        behavior
      }
    }
    return {
      top: 0,
      behavior
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '淄博烧烤网 - 灵魂烧烤，人间烟火',
        description:
          '淄博烧烤官方网站，体验正宗的淄博烧烤文化。炭火烧烤、小饼卷肉、人文关怀，感受淄博人的热情与匠心。',
        keywords: '淄博烧烤,淄博美食,淄博烧烤网,小饼卷肉,烧烤文化'
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
      meta: {
        title: '烧烤菜单 - 淄博烧烤网',
        description: '精选优质食材，传承经典口味。查看淄博烧烤菜单分类与推荐菜品。',
        keywords: '淄博烧烤菜单,烧烤菜品,烧烤食材,淄博特色小饼'
      }
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('../views/CultureView.vue'),
      meta: {
        title: '烧烤文化 - 淄博烧烤网',
        description: '了解淄博烧烤文化：历史传承、传统工艺与城市烟火故事。',
        keywords: '淄博烧烤文化,淄博历史,烧烤工艺,城市烟火'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: {
        title: '页面不存在 - 淄博烧烤网',
        description: '抱歉，您访问的页面不存在。请返回淄博烧烤网首页继续浏览。',
        keywords: '404,页面不存在,淄博烧烤网',
        robots: 'noindex,follow'
      }
    }
  ],
})

export default router
