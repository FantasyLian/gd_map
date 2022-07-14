import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/MapContainer.vue'

const routes = [
  {
    path: '/',
    name: 'mapContainer',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
