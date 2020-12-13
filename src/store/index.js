import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
const axios = require('axios').default
import firebase from "firebase"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    idToken: null,
    user: null
  },
  mutations: {
    setLoggedin(state, data) {
      console.log('setLoggedIn');
      state.isLoggedIn = true
      state.idToken = data.token
      state.user = data.user
    },
    setLoggedOut(state) {
      state.isLoggedIn = false
      state.idToken = null
      state.user = null
    }

  },
  actions: {
    async logIn({ commit }) {
      return new Promise(async (resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(async res => {
          const user = res.user
          /* Dobimo idtoken */
          const idToken = await user.getIdToken()
          axios.defaults.headers.common['Authorization'] = idToken;
          commit('setLoggedin', {
            token: idToken,
            user: res
          })
          resolve(res)
          /* Pingam svoj api */
          axios.get("ping")

        }).catch(err => {
          reject(err)
        })
      })
    },
    logOut({ commit }) {
      commit('setLoggedOut')
    }
  },
  plugins: [
    createPersistedState({
      rehydrated: function ({ state }) {
        axios.defaults.headers.common['Authorization'] = state.idToken
      }
    }),
  ]
})
