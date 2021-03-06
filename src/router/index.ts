import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../pages/index.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../pages/login.vue')
      },
      {
        path: 'products/:category',
        name: 'products',
        component: () => import('../pages/products.vue')
      },
      {
        path: 'product/:id',
        name: 'product_detail',
        component: () => import('../pages/product_detail.vue')
      },
      {
        path: 'product_support',
        name: 'product_support',
        component: () => import('../pages/product_support.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../pages/cart.vue')
      },
      {
        path: 'ordercheck/:id',
        name: 'ordercheck/:id',
        component: () => import('../pages/orderCheck.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../pages/news.vue')
      },
      {
        path: 'contact_us',
        name: 'contact_us',
        component: () => import('../pages/contact_us.vue')
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
    // name: 'backHome',
    component: () => import('../backEnd/backHome.vue'),
    children: [{
      path: '/',
      name: 'product',
      component: () => import('../backEnd/backProducts.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: 'coupon',
      name: 'coupon',
      component: () => import('../backEnd/backCoupon.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: 'order',
      name: 'order',
      component: () => import('../backEnd/backOrder.vue'),
      meta: { requiresAuth: true }
    }]
  }
]
const router = new VueRouter({
  routes
})
// 驗證如果直接前往後台的話，需要先通過此驗證，驗證通過後才可以直接輸入網址轉跳，否則會跳回首頁
router.beforeEach((to, from, next) => {
  const url = `${process.env.VUE_APP_API}/api/user/check`
  // to表示要進去的那頁
  if (to.meta.requiresAuth) {
    axios.post(url).then(res => {
      if (res.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else next()
})
export default router
