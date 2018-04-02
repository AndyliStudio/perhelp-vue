import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello-world/HelloWorld'
import LandScape from '@/views/LandScape'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'landscape',
    component: LandScape
  },
  {
    path: '/hello-world',
    name: 'hello-world',
    component: HelloWorld
  }]
})
