import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
   /* {
      path: '/messaging',
      name: 'messaging',
      component: () => import('../views/Messaging.vue')
    },*/
    {
      path: '/directory',
      name: 'directory',
      component: () => import('../views/Directory.vue')
    }/*,
    {
      path: '/reimbursement',
      name: 'reimbursement',
      component: () => import('../views/Reimbursement.vue')
    },
    {
      path: '/budget',
      name: 'budget',
      component: () => import('../views/Budget.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/Calendar.vue')
    }*/
  ]
})

export default router