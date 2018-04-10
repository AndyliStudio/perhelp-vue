<template>
  <div class="global-modal">
    <Login></Login>
    <LoginWithEmail></LoginWithEmail>
    <Registe></Registe>
    <ManageMent></ManageMent>
  </div>
</template>

<script>
import Login from './LoginModal'
import LoginWithEmail from './LoginWithEmail'
import Registe from './RegisteModal'
import ManageMent from './ManagementModal'

export default {
  components: {
    Login,
    LoginWithEmail,
    Registe,
    ManageMent
  },
  data () {
    return {

    }
  }
}
</script>
