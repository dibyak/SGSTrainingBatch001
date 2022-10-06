import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/table.vue'
import Table1 from '../views/table1.vue'
import Help from '../views/help.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/employeesearch' 
  },
  {
    path: '/employeesearch',
    name: 'table',
    meta: 'EmployeeSearch',
    component: Table
  },
  {
    path: '/employeeexactsearch',
    name: 'table1',
    meta: 'EmployeeExactSearch',
    component: Table1
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/help',
    name: 'help',
    meta: 'Help',
    component: Help
  },
]

const router = new VueRouter({
  routes
})

export default router
