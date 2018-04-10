<template>
  <modal classes="login-with-email v--modal" name="login-with-email" transition="pop-out" :width="460" :height="660">
    <div class="logo">
      <img src="../../assets/images/logotype-small.png" alt="perhelp" />
    </div>
    <div class="form">
      <div class="form-title">{{ $t('loginWidthEmail.pleaseLogin') }}</div>
      <div class="form-group">
        <input id="email" type="text" name="email" :placeholder="$t('loginWidthEmail.emailPlaceHolder')" />
        <p :class="{'error-tips': true, 'show': error.email}">{{error.email}}</p>
      </div>
      <div class="form-group">
        <input id="password" type="password" name="password" :placeholder="$t('loginWidthEmail.passwordPlaceHolder')" />
        <p :class="{'error-tips': true, 'show': error.password}">{{error.password}}</p>
      </div>
      <div class="form-group">
        <p class="forgot-password"><span>{{ $t('loginWidthEmail.forgotPassword') }}</span></p>
        <button class="login-btn">{{ $t('loginWidthEmail.loginText') }}</button>
      </div>
      <div class="other-login"><span @click="openLogin">{{ $t('loginWidthEmail.otherLogin') }}</span></div>
    </div>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      error: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    openLogin () {
      this.$modal.hide('login-with-email')
      this.$modal.show('login')
    }
  }
}
</script>
<style lang="scss">
.login-with-email {
  background: transparent !important;
  box-shadow: none !important;
  position: relative;
  .logo {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 0;
    left: 50%;
    margin-left: -70px;
    border-radius: 70px;
    z-index: 1;
    background: #ffffff;
    &>img {
      width: 90%;
      height: 90%;
      margin: 5%;
    }
  }
  .form {
    width: 94%;
    margin: 70px auto 30px auto;
    height: calc(100% - 100px);
    background: #ffffff;
    border-radius: 60px !important;
    -webkit-box-shadow: 0px 8px 30px 2px #88d6e8;
    box-shadow: 0px 8px 30px 2px #88d6e8;
    box-sizing: border-box;
    padding-top: 150px;
    padding: 150px 50px 20px 50px;
    position: relative;
    .form-title {
      font-size: 15px;
      color:#555555;
      margin-bottom: 30px;
      font-weight: 600;
    }
    .form-group {
      padding: 30px 0 0 0;
      &>input {
        width: 100%;
        outline: none;
        border: none;
        border-bottom: 2px solid #d8d8d8;
        height: 40px;
        line-height: 40px;
        &::-webkit-input-placeholder { /* WebKit browsers */
          color: #aaaaaa;
        }
        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: #aaaaaa;
        }
        &::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: #aaaaaa;
        }
        &:-ms-input-placeholder { /* Internet Explorer 10+ */
            color: #aaaaaa;
        }
      }
    }
    .forgot-password {
      text-align: center;
      &>span{
        color: #aaaaaa;
        text-decoration: underline;
      }
    }
    .login-btn {
      width: 85%;
      height: 46px;
      display: block;
      border: none;
      outline: none;
      margin: 25px auto 0 auto;
      cursor: pointer;
      background: #60b7c6; /* Old browsers */
      background: -moz-linear-gradient(left, #59eccd 0%, #60b7c6 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(left, #59eccd 0%,#60b7c6 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to right, #59eccd 0%,#60b7c6 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#59eccd', endColorstr='#60b7c6',GradientType=0 ); /* IE6-9 */
      border-radius: 23px;
      color: #ffffff;
      letter-spacing: 2px;
    }
    .other-login {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 30px;
      &>span{
        color: #aaaaaa;
        border-bottom: 1px solid #aaaaaa;
        // text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}
</style>
