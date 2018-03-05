import { firebase } from '../firebase/index.js'
import router from '../router'

export const strict = false

export const state = () => ({
  loading: false,
  isMobile: false,
  head: {
    title: 'KATALOGUE'
  },
  user: {
    auth: false,
    email: '',
    password: ''
  },
  products: []
})

export const mutations = {
  Loading (state, act) {
    if (act === 'hide') {
      state.loading = false
    } else {
      state.loading = true
    }
  },
  Auth (state, act) {
    if (act === 1) {
      state.user.auth = true
    } else {
      state.user.auth = false
    }
  }
}

export const actions = {
  async Req ({ dispatch, commit, state }, params) {
    switch (params.action) {
      case 'firstLoad':
        commit('Loading')
        await firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            commit('Auth', 1)
            router.replace({name: 'Dashboard'})
          } else {
            commit('Auth', 0)
          }
          commit('Loading', 'hide')
        })
        break
      case 'signIn':
        commit('Loading')
        let resLog = {}
        await firebase.auth().signInWithEmailAndPassword(state.user.email, state.user.password).then(
          function (user) {
            commit('Auth', 1)
            commit('Loading', 'hide')
            resLog = { status: true, message: '' }
          },
          function (err) {
            commit('Auth', 0)
            commit('Loading', 'hide')
            if (err.code === 'auth/user-not-found') {
              resLog = { status: false, message: 'User not found.' }
            } else {
              resLog = { status: false, message: err.message }
            }
          }
        )
        return resLog
      case 'signOut':
        commit('Loading')
        await firebase.auth().signOut().then(() => {
          commit('Auth', 0)
          router.replace({name: 'Home'})
          commit('Loading', 'hide')
        })
        break
      case 'productAdd':
        break
      case 'productUpdate':
        break
      case 'productDelete':
        break
    }
  }
}
