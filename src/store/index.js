import firebase from 'firebase'
import router from '../router'

export const strict = false

let config = {
  apiKey: 'AIzaSyCN39p7EvVlvChIV9lhNRpXNqQ5PLKsBkw',
  authDomain: 'dotapp-69dcf.firebaseapp.com',
  databaseURL: 'https://dotapp-69dcf.firebaseio.com',
  projectId: 'dotapp-69dcf',
  storageBucket: 'dotapp-69dcf.appspot.com',
  messagingSenderId: '5998765842'
}
firebase.initializeApp(config)

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
  }
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
      case 'productLoad':
        break
      case 'productGet':
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
