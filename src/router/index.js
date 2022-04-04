import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/invoicegenerator',
    name: 'InvoiceGenerator',
    component: () => import('../views/invoiceGenerator.vue')
  },

  {
    path: '/fetpizza',
    name: 'FetPizza',
    component: () => import('../views/FetPizza.vue')
  },

  {
    path: '/dietlife',
    name: 'DietLife',
    component: () => import('../views/DietLife.vue')
  },

  {
    path: '/promotezone',
    name: 'PromoteZone',
    component: () => import('../views/PromoteZone.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
