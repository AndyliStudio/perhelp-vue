import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello-world/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'app',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'hello-world',
    component: HelloWorld
  }]
})
