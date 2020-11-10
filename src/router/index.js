import Vue from 'vue'
import VueRouter from 'vue-router'
import Other from '../views/Other.vue'
import Add from '../views/Add.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/other',
    name: 'Other',
    component: Other
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
