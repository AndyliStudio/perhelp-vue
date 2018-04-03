import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello-world/HelloWorld'
import LandScape from '@/views/LandScape'
import Profile from '@/views/profile/Profile'

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
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }]
})
