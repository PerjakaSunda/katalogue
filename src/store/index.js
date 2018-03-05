import firebase from 'firebase'

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
  }
})

export const mutations = {
}

export const actions = {
}
