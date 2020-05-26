import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import product from '../views/product.vue'
import ShopingCart from '../views/ShopingCart.vue'
import berhasil from '../views/berhasil.vue'

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
    path: '/product',
    name: 'product',
    component: product
  },
  {
    path: '/cart',
    name: 'cart',
    component: ShopingCart
  },
  {
    path: '/pembayaran',
    name: 'pembayaran',
    component: berhasil
  },
]

const router = new VueRouter({
  routes
})

export default router
