import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutView from '../views/LayoutView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: { title: '地圖定位' },
    component: LayoutView,
    children: [{
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
    }]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
