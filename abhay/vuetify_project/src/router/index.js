import Vue from 'vue'
import VueRouter from 'vue-router'
import ToDo from '../views/ToDo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/staticfil',
    name: 'staticfil',
  
    component: () => import('../components/staticfil.vue')
  },
  {
    path: '/multifilter',
    name: 'multifilter',
  
    component: () => import('../components/multifilter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
