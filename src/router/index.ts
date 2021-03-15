import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../pages/index.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: 'circle',
        name: 'circle',
        component: () => import('../components/circle.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'backHome',
    component: () => import('../backEnd/backHome.vue'),
    children: [{
      path: '/',
      name: '',
      component: () => import('../backEnd/backProducts.vue')
    }]
  }
]
const router = new VueRouter({
  routes
})

export default router
