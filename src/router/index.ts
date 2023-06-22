import { createRouter, createWebHistory } from 'vue-router'

import UsersView from '@/pages/UsersView.vue'
import PaymentsView from '@/pages/PaymentsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UsersView,
      meta: {
        auth: true
      }
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView
    }
  ]
})

export default router
