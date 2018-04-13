import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello-world/HelloWorld'
import LandScape from '@/views/LandScape'
import Profile from '@/views/freelancer/Profile'
import Freelancer from '@/views/freelancer/Freelancer'
import ManagementHome from '@/views/management/ManagementHome'
import NewJob from '@/views/jobPage/NewJob'
import BroadHome from '@/views/jobPage/BroadHome'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'landscape',
    component: LandScape
  },
  {
    path: '/management-home',
    name: 'management-home',
    component: ManagementHome
  },
  {
    path: '/new-job',
    name: 'new-job',
    component: NewJob
  },
  {
    path: '/broad-home',
    name: 'broad-home',
    component: BroadHome
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
  },
  {
    path: '/freelancer',
    name: 'freelancer',
    component: Freelancer
  }]
})
