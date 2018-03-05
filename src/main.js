// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { firebase } from './firebase/index.js'

import './assets/css/style.css'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

const storeData = require('./store')
const store = new Vuex.Store(storeData)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const _self = this
    const products = firebase.database().ref('products')
    products.on('value', function (snapshot) {
      _self.$store.state.products = snapshot.val()
    })
    _self.$store.dispatch('Req', { action: 'firstLoad' })
  },
  watch: {
    '$route' (to, from) {
      const _self = this
      const products = firebase.database().ref('products')
      products.on('value', function (snapshot) {
        _self.$store.state.products = snapshot.val()
      })
    }
  }
})
