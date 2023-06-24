import { createRouter, createWebHistory } from 'vue-router'

import UsersView from '@/pages/UsersView.vue'
import PaymentsView from '@/pages/PaymentsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'users' }
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/payments',
      name: 'payments',
      component: PaymentsView
    }
  ]
})

export default router
