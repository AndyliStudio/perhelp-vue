<template>
  <div class="global-modal">
    <Login></Login>
    <LoginWithEmail></LoginWithEmail>
    <Registe></Registe>
    <ManageMent></ManageMent>
    <PopupReference></PopupReference>
  </div>
</template>

<script>
import Login from './LoginModal'
import LoginWithEmail from './LoginWithEmail'
import Registe from './RegisteModal'
import ManageMent from './ManagementModal'
import PopupReference from './PopupReferenceModal'

export default {
  components: {
    Login,
    LoginWithEmail,
    Registe,
    ManageMent,
    PopupReference
  },
  data () {
    return {

    }
  }
}
</script>
