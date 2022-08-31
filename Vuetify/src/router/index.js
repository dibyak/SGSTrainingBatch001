import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path: '/search',
    name: 'search',
  
    component: () => import('../components/search.vue')
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
  
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/AboutView',
    name: 'AboutView',
  
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/column',
    name: 'column',
  
    component: () => import('../components/column.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
