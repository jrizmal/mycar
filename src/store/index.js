import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
const axios = require('axios').default
import {auth, firebase} from "../services/auth"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    idToken: null,
    user: null,
    msgToken: null,
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
    },
    setMsgToken(state, token) {
      state.msgToken = token
    }

  },
  actions: {
    async logIn({ commit }) {
      return new Promise(async (resolve, reject) => {
        let provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then(async res => {
          const user = res.user
          /* Dobimo idtoken */
          const idToken = await user.getIdToken()
          axios.defaults.headers.common['authorization'] = idToken;
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
    },
    setMsgToken({ commit }, token) {
      commit("setMsgToken", token)
    }
  },
  plugins: [
    createPersistedState({
      rehydrated: async function ({ state, commit }) {
        commit("setLoggedOut")
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            const token = await user.getIdToken(true)
            console.log("Token acquired: %s", token);
            axios.defaults.headers.common["authorization"] = token
            commit("setLoggedin",{
              token: token,
              user: user,
            })
          }
          else {
            console.log("no user");
          }
        })
      }
    }),
  ]
})
