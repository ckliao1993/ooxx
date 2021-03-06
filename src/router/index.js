import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: {name: "Home"}
  },
  {
    path: '/ooxx/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/ooxx/games',
    name: 'Games',
    component: () => import('../views/404.vue')
  },
  {
    path: '/ooxx/play/:game_id',
    name: 'Play',
    component: () => import('../views/Play.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
