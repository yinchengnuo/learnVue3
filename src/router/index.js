import Index from '../views/Index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    name: 'Setup',
    path: '/setup',
    component: () => import('../views/Setup.vue')
  },
  {
    name: 'Ref',
    path: '/ref',
    component: () => import('../views/Ref.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
