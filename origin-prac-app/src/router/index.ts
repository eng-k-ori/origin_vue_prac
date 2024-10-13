import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ParentCountUp from '@/pages/ParentCountUp.vue'
import TestParentTextArea from '@/pages/TestParentTextArea.vue'
import RegistForm from '@/pages/RegistForm.vue'

// router/index.tsはVue Routerを使ってページ遷移を管理するための設定ファイル

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ヒストリーモードの設定
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // このルートではParentCountUpコンポーネントを表示
    },
    {
      path: '/testTextArea',
      name: 'testTextArea',
      component: TestParentTextArea
    },
    {
      path: '/countUp',
      name: 'countUp',
      component: ParentCountUp
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: RegistForm
    },
  ]
})

export default router
