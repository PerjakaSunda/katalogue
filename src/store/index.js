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
    email: 'admin@dot.co.id',
    password: 'dot.admin'
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
        let authenticated = await firebase.auth().currentUser
        commit('Auth', 1)
        return authenticated
      case 'signIn':
        let resLog = {}
        await firebase.auth().signInWithEmailAndPassword(state.user.email, state.user.password).then(
          function (user) {
            commit('Auth', 1)
            resLog = {status: true, message: ''}
          },
          function (err) {
            commit('Auth', 0)
            resLog = {status: false, message: err.message}
          }
        )
        return resLog
      case 'signOut':
        await firebase.auth().signOut().then(() => {
          commit('Auth', 0)
          router.replace({name: 'Home'})
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
