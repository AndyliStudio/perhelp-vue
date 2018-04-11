<template>
  <modal classes="login-container v--modal" name="login" transition="pop-out" :width="400" :height="514">
    <img class="logo" src="../../assets/images/logotype-small.png" alt="perhelp" />
    <button class="login-btn facebook"><i class="uppercase">G</i>{{ $t("login.google") }}</button>
    <button class="login-btn google"><i class="uppercase">F</i>{{ $t("login.facebook") }}</button>
    <p class="other"><span @click="openEmailLogin">{{ $t("login.other") }}</span></p>
  </modal>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    openEmailLogin () {
      this.$modal.hide('login')
      this.$modal.show('login-with-email')
    }
  }
}
</script>

<style lang="scss">
  .login-container {
    border-radius: 60px !important;
    text-align: center;
    -webkit-box-shadow: 0px 8px 30px 2px #88d6e8;
    box-shadow: 0px 8px 30px 2px #88d6e8;
    .logo {
      width: 150px;
      height: 150px;
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .login-btn {
      position: relative;
      cursor: pointer;
      display: block;
      width: 75%;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      margin: 30px auto;
      outline: none;
      border: none;
      color: #ffffff;
      &.facebook {
        background: #1f6faa;
      }
      &.google {
        background: #db3f3f;
      }
      .uppercase {
        position: absolute;
        font-size: 26px;
        font-weight: bold;
        left: 30px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .other {
      color: #aaaaaa;
      &>span {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
</style>
