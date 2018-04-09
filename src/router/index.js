import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello-world/HelloWorld'
import LandScape from '@/views/LandScape'
import Callback from '@/views/Callback'
import ManagementHome from '@/views/management/ManagementHome'
import Profile from '@/views/profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'landscape',
    component: LandScape
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/management-home',
    name: 'management-home',
    component: ManagementHome
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
