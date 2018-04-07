<template>
  <div class="global-modal">
    <Login></Login>
    <LoginWithEmail></LoginWithEmail>
  </div>
</template>

<script>
import Login from './LoginModal'
import LoginWithEmail from './LoginWithEmail'
export default {
  components: {
    Login,
    LoginWithEmail
  },
  data () {
    return {

    }
  }
}
</script>
