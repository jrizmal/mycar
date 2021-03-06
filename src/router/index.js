import Vue from 'vue'
import VueRouter from 'vue-router'
import Other from '../views/Other.vue'
import Add from '../views/Add.vue'
import Dashboard from '../views/Dashboard.vue'
import AddTires from '../views/Add_items/AddTires'
import AddFuel from '../views/Add_items/AddFuel'
import AddService from '../views/Add_items/AddService'
import AddFirstAid from '../views/Add_items/AddFirstAid'
import AddInsurance from '../views/Add_items/AddInsurance'
import AddTechnical from '../views/Add_items/AddTechnical'
import Login from '../views/Login'
import AddRegistration from '../views/Add_items/AddRegistration'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/add',
    name: 'Add',
    component: Add,

  },
  {
    name: 'add_tires',
    path: '/add/tires',
    component: AddTires
  },
  {
    name: 'add_fuel',
    path: '/add/fuel',
    component: AddFuel
  },
  {
    name: 'add_service',
    path: '/add/service',
    component: AddService
  },
  {
    name: 'add_firstaid',
    path: '/add/firstaid',
    component: AddFirstAid
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
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    name: 'add_insurance',
    path: '/add/insurance',
    component: AddInsurance
  },
  {
    name: 'add_technical',
    path: '/add/technical',
    component: AddTechnical
  },
  {
    path: '/registration',
    name: 'add_registration',
    component: AddRegistration
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router