<template>
  <div class="global-modal">
    <Login></Login>
    <LoginWithEmail></LoginWithEmail>
    <ManageMent></ManageMent>
  </div>
</template>

<script>
import Login from './LoginModal'
import LoginWithEmail from './LoginWithEmail'
import ManageMent from './ManagementModal'

export default {
  components: {
    Login,
    LoginWithEmail,
    ManageMent
  },
  data () {
    return {

    }
  }
}
</script>
