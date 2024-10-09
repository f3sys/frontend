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
            meta: { title: 'AICJ学園祭 2024', description: 'AICJ中学・高等学校の2024学園祭公式サイトです。' },
            component: HomeView
        },
        {
            path: '/foods',
            name: 'foods',
            meta: { title: '高校食販', description: '高校食班のメニューです。' },
            component: FoodsView
        },
        {
            path: '/goods',
            name: 'goods',
            meta: { title: '物品販売', description: '物品販売のメニューです。' },
            component: GoodsView
        },
        {
            path: '/groups',
            name: 'groups',
            meta: { title: '参加グループ', description: '中学生クラス展示・ステージ企画・生徒企画の紹介文一覧です。' },
            component: GroupsView
        },
        {
            path: '/schedule',
            name: 'schedule',
            meta: { title: 'スケジュール', description: 'ステージ企画のスケジュールをご確認いただけます。' },
            component: ScheduleView
        },
        {
            path: '/pamphlet',
            name: 'pamphlet',
            meta: { title: 'パンフレット', description: 'データ版パンフレットをダウンロードいただけます。' },
            component: PamphletView
        },
    ],
    scrollBehavior(_to, _from, _savedPosition) {
        return {
            top: 0,
            behavior: "smooth"
        }
    }
})

router.beforeEach((to, _from, next) => {
    const { title, description } = to.meta;
    const defaultTitle = 'Page not found';
    const defaultDescription = 'ページが見つかりませんでした。';

    document.title = title as string || defaultTitle

    const descriptionElement = document.querySelector('head meta[name="description"]')
    if (descriptionElement)
        descriptionElement.setAttribute('content', description as string || defaultDescription)
    next()
})

export default router
