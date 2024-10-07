import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const FoodsView = () => import('../views/FoodsView.vue')
const GoodsView = () => import('../views/GoodsView.vue')
const GroupsView = () => import('../views/GroupsView.vue')
const ScheduleView = () => import('../views/ScheduleView.vue')
const PamphletView = () => import('../views/PamphletView.vue')

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
      component: FoodsView
    },
    {
      path: '/goods',
      name: 'goods',
      component: GoodsView
    },
    {
      path: '/groups',
      name: 'groups',
      component: GroupsView
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: ScheduleView
    },
    {
      path: '/pamphlet',
      name: 'pamphlet',
      component: PamphletView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "smooth"
    }
  }
})

export default router
