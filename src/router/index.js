import Index from '../views/Index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  { path: '/', name: 'Index', component: Index },
  { name: 'Setup', path: '/Setup', component: () => import('../views/Setup.vue') },
  { name: 'Ref', path: '/Ref', component: () => import('../views/Ref.vue') },
  { name: 'Reactive', path: '/Reactive', component: () => import('../views/Reactive.vue') },
  { name: 'ToRef/s', path: '/ToRef/s', component: () => import('../views/toRef&s.vue') },
  { name: 'Reactive', path: '/Reactive', component: () => import('../views/Reactive.vue') },
  { name: 'Computed', path: '/Computed', component: () => import('../views/Computed.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
