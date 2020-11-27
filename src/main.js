import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

/* Vue material */
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import './assets/style/custom-theme.scss'
import './assets/style/style.css'
Vue.use(VueMaterial)

/* My components */
import PageContainer from './components/PageContainer'
Vue.component('page-container',PageContainer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
