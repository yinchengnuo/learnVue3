import Index from '../views/Index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  { name: 'FuzzyQuery', path: '/FuzzyQuery', component: () => import('../views/FuzzyQuery.vue') },
  { path: '/', name: 'Index', component: Index },
  { name: 'Setup', path: '/Setup', component: () => import('../views/Setup.vue') },
  { name: 'Ref', path: '/Ref', component: () => import('../views/Ref.vue') },
  { name: 'Reactive', path: '/Reactive', component: () => import('../views/Reactive.vue') },
  { name: 'ToRef/s', path: '/ToRef/s', component: () => import('../views/toRef&s.vue') },
  { name: 'Computed', path: '/Computed', component: () => import('../views/Computed.vue') },
  { name: 'Watch', path: '/Watch', component: () => import('../views/Watch.vue') },
  { name: 'LifeCycle', path: '/LifeCycle', component: () => import('../views/LifeCycle.vue') },
  { name: 'Provide/Inject', path: '/Provide/Inject', component: () => import('../views/Provide&Inject.vue') },
  { name: 'TemplateRef', path: '/TemplateRef', component: () => import('../views/TemplateRef.vue') },
  { name: 'Teleport', path: '/Teleport', component: () => import('../views/Teleport.vue') },
  { name: 'Fragment', path: '/Fragment', component: () => import('../views/Fragment.vue') },
  { name: 'Emits', path: '/Emits', component: () => import('../views/Emits.vue') },
  { name: 'V-model', path: '/V-model', component: () => import('../views/V-model.vue') },
  { name: 'GlobalAPI', path: '/GlobalAPI', component: () => import('../views/GlobalAPI.vue') },
  { name: 'TreeShaking', path: '/TreeShaking', component: () => import('../views/TreeShaking.vue') },
  { name: 'Suspense', path: '/Suspense', component: () => import('../views/Suspense.vue') },
  { name: 'Difference', path: '/Difference', component: () => import('../views/Difference.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  base: '/vue3'
})
