import { createRouter, createWebHashHistory } from 'vue-router'
import local from '@/utils/local'
import LayoutView from '@/views/LayoutView.vue'

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
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/404',
    name: 'NoteFound',
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue')
  },
  {
    path: '/500',
    name: 'ServerError',
    component: () => import(/* webpackChunkName: "500" */ '@/views/ServerError')
  }, {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const LOGIN_URL = '/login'
  const url = to.path
  const user = local.get('token')

  if (url === LOGIN_URL) {
    local.remove('token')
  }

  if (!user && url !== LOGIN_URL) {
    next({ path: LOGIN_URL })
  } else {
    next()
  }
})

export default router
