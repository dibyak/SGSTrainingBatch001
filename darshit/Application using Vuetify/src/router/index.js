import Vue from 'vue'
import VueRouter from 'vue-router'
import Todo from '../views/Todo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: Todo
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
    path: '/Invoice',
    name: 'Invoice',
    component: () => import('../components/Invoice.vue')
  },
  {
    path: '/Dynamic',
    name: 'Dynamic',
    component: () => import('../components/Dynamic.vue')
  },
  {
    path: '/multiFilter',
    name: 'multiFilter',
    component: () => import('../components/multiFilter.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
