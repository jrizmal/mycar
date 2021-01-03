import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
const firebase = require('firebase')

/* firebase */
var firebaseConfig = {
  apiKey: "AIzaSyAu_Zbyeo9_Zl1pUHpZbpgPDOULDBnl0_o",
  authDomain: "mycar-6d0a2.firebaseapp.com",
  databaseURL: "https://mycar-6d0a2.firebaseio.com",
  projectId: "mycar-6d0a2",
  storageBucket: "mycar-6d0a2.appspot.com",
  messagingSenderId: "766675325521",
  appId: "1:766675325521:web:637f661019c29f56c71e70"
};
firebase.default.initializeApp(firebaseConfig)

const messaging = firebase.default.messaging()
messaging.getToken({
  vapidKey: "BAiNnX4iFPfh-33wJxKPmhJKylA8TURvJ21ktjknnDl8tsgvNppJOx_EnvSteLMHgnO1UCGbySD_MazJwiPlZkc"
}).then(token=>{
  console.log("cloud messaging token");
  console.log(token);
})

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

/* Axios */
const axios = require('axios').default
axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://mycar-api.herokuapp.com/')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
