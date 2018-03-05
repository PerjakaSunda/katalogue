// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

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
    _self.$store.dispatch('Req', { action: 'firstLoad' }).then(function (res) {
      if (res) {
        _self.$store.commit('Auth', 1)
        router.replace({ name: 'Dashboard' })
      } else {
        _self.$store.commit('Auth', 0)
        router.replace({ name: 'Home' })
      }
    })
  }
})
