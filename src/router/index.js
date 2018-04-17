import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/hello-world/HelloWorld'
import LandScape from '@/views/LandScape'
import Profile from '@/views/freelancer/Profile'
import Freelancer from '@/views/freelancer/Freelancer'
import ManagementHome from '@/views/management/ManagementHome'
import NewJob from '@/views/jobPage/NewJob'
import BroadHome from '@/views/jobPage/BroadHome'
import Connect from '@/views/connect/Connect'
import ExploreUser from '@/views/connect/ExploreUser'
import RecruitMembers from '@/views/connect/RecruitMembers'
import Friends from '@/views/connect/Friends'
import Following from '@/views/connect/Following'
import TeamInfo from '@/views/team/TeamInfo'
import TeamHome from '@/views/team/TeamHome'
import TeamCreate from '@/views/team/TeamCreate'

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
  },
  {
    path: '/teaminfo',
    name: 'teaminfo',
    component: TeamInfo
  },
  {
    path: '/teamhome',
    name: 'teamhome',
    component: TeamHome
  },
  {
    path: '/teamcreate',
    name: 'teamcreate',
    component: TeamCreate
  },
  {
    path: '/connect',
    name: 'connect',
    component: Connect,
    redirect: '/connect/explore-user',
    children: [
      {
        path: '/connect/explore-user',
        name: 'explore-user',
        component: ExploreUser
      },
      {
        path: '/connect/recruit-members',
        name: 'recruit-members',
        component: RecruitMembers
      },
      {
        path: '/connect/friends',
        name: 'friends',
        component: Friends
      },
      {
        path: '/connect/following',
        name: 'following',
        component: Following
      }
    ]
  }]
})
