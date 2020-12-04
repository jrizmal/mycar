import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
const axios = require('axios').default

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    idToken: null,
    user: null
  },
  mutations: {
    setLoggedin(state, data) {
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
    logIn({ commit }, data) {
      commit('setLoggedin', data)
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
