// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'
import { sync } from 'vuex-router-sync'
// This is everything we need to work with Apollo 2.0.
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
// import fontawesome
// just import some fontawesome icons
// import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueI18n from 'vue-i18n'
// normalize css
import './assets/styles/normalize.css'
// reset css
import './assets/styles/reset.css'

Vue.config.productionTip = false
// Enable devtools
Vue.config.devtools = true

sync(store, router)

// use global progress
Vue.use(VueProgressBar, {
  color: '#409EFF',
  failedColor: '#F56C6C',
  height: '2px'
})

// Register the VueApollo plugin with Vue.
Vue.use(VueApollo)
// Create a new HttpLink to connect to your GraphQL API.
// According to the Apollo docs, this should be an absolute URI.
const httpLink = new HttpLink({
  uri: `https://api.graph.cool/simple/v1/cjffdxg0g26sc0100jiil19mb`
  // uri: `http://localhost:3000/graphql`
})
// creat another variable here just because it makes it easier to add more links in the future.
const link = httpLink
// Create the apollo client
const apolloClient = new ApolloClient({
  // Tells Apollo to use the link chain with the http link we set up.
  link,
  // Handles caching of results and mutations.
  cache: new InMemoryCache(),
  // Useful if you have the Apollo DevTools installed in your browser.
  connectToDevTools: true
})
// tell Vue & VueApollo about apolloClient
const apolloProvider = new VueApollo({
  // Apollo 2.0 allows multiple clients to be enabled at once.
  // Here we select the default (and only) client.
  defaultClient: apolloClient
})

// add top progress when page is loading
router.beforeEach((to, from, next) => {
  router.app.$Progress.start()
  next()
})
router.afterEach(() => {
  router.app.$Progress.finish()
})

Vue.component('icon', Icon)
// Language globalization
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN', // use `this.$i18n.locale` switch language
  messages: {
    'zh-CN': require('./localization/zh'),
    'zh-HK': require('./localization/hk'),
    'en-US': require('./localization/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  axios,
  // Inject apolloProvider for components to use.
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
