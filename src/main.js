import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'

/* Axios */
const axios = require('axios').default
axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mycar-api.herokuapp.com/')

/* Bootstrap */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

/* Vue material */
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/style/custom-theme.scss'
import './assets/style/style.css'
Vue.use(VueMaterial)

/* My components */
import PageContainer from './components/PageContainer'
Vue.component('page-container', PageContainer)

/* Toasted */
import Toasted from 'vue-toasted';
Vue.use(Toasted, { duration: 1500 })

/* Messaging */
import {messaging} from "./services/auth"
messaging.getToken({
  vapidKey: "BK1Z0In5dRj5Bnod1zU-O3-FgexqVzFpcqoRv38mdC6zTSJMALddq83PIYaxrKvnn-48RnNUG7NJp4d8KciUelc"
}).then(token => {
  // console.log(token);
  store.dispatch("setMsgToken")
  messaging.onMessage(msg => {
    // console.log(msg);
  })
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
