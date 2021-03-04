import Index from '../views/Index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  { name: 'FuzzyQuery', path: '/FuzzyQuery', component: () => import('../views/FuzzyQuery.vue') },
  { path: '/', name: 'Index', component: Index },
  { name: 'Setup', path: '/Setup', component: () => import('../views/Setup.vue') },
  { name: 'Ref', path: '/Ref', component: () => import('../views/Ref.vue') },
  { name: 'Reactive', path: '/Reactive', component: () => import('../views/Reactive.vue') },
  { name: 'ToRef/s', path: '/ToRef/s', component: () => import('../views/toRef&s.vue') },
  { name: 'Computed', path: '/Computed', component: () => import('../views/Computed.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  base: '/vue3'
})
