import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/MapContainer.vue'

const routes = [
  {
    path: '/',
    name: 'mapContainer',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/404',
    name: 'ErrorView',
    component: () => import(/* webpackChunkName: "404" */ '@/views/ErrorView.vue')
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
