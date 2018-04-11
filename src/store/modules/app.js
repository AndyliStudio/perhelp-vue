import { setCookie, deleteCookie } from '../../utils'

// initial state
const state = {
  title: '', // page title
  hasLogined: false, // params judge user is logined
  token: '',
  userInfo: {}
}

// getters
const getters = {
  isLogined: state => state.hasLogined
}

// actions
const actions = {}

// mutations
const mutations = {
  setHasLogined (state, data) {
    state.hasLogined = data
  },
  updateLoginInfo (state, data) {
    state.userInfo = data.userInfo
    state.token = data.token
    state.hasLogined = data.hasLogined
  },
  doLogin (state, data) {
    state.userInfo = {
      id: data.id,
      username: data.username,
      email: data.email
    }
    state.token = data.token
    state.hasLogined = true
    setCookie('token', data.token)
    setCookie('userInfo', JSON.stringify(state.userInfo))
  },
  doLogout () {
    state.token = ''
    state.userInfo = {}
    state.hasLogined = false
    deleteCookie('token')
    deleteCookie('userInfo')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
