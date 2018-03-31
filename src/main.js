// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false
// Enable devtools
Vue.config.devtools = true

sync(store, router)

Vue.use(VueProgressBar, {
  color: '#409EFF',
  failedColor: '#F56C6C',
  height: '2px'
})

// add top progress when page is loading
router.beforeEach((to, from, next) => {
  router.app.$Progress.start()
  next()
})

router.afterEach(() => {
  router.app.$Progress.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  components: { App },
  template: '<App/>'
})
