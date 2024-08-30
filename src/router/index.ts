import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/foods',
      name: 'foods',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FoodsView.vue')
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('../views/GoodsView.vue')
    },
    {
      path: '/pamphlet',
      name: 'pamphlet',
      component: () => import('../views/PamphletView.vue')
    }
  ]
})

export default router
