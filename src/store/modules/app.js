import { setCookie, deleteCookie } from '../../utils'

// initial state
const state = {
  title: '', // page title
  hasLogined: true, // params judge user is logined
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
  doLogin (state, data) {
    setCookie('perhelp_token', data.token)
    state.token = data.token
    state.hasLogined = true
  },
  doLogout () {
    deleteCookie('perhelp_token')
    state.token = ''
    state.userInfo = {}
    state.hasLogined = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
