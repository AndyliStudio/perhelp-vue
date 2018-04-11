<template>
  <modal classes="login-with-email v--modal" name="login-with-email" transition="pop-out" :width="460" :height="660">
    <div class="logo">
      <img src="../../assets/images/logotype-small.png" alt="perhelp" />
    </div>
    <div class="form">
      <div class="form-title">{{ $t('loginWithEmail.pleaseLogin') }}</div>
      <div class="form-group">
        <input :class="{'is-error': error.email, 'is-success': !error.email && dirty.email}" id="email" type="text" name="email" :placeholder="$t('loginWithEmail.emailPlaceHolder')" v-model="email" @input="emailInput" />
        <p :class="{'error-tips': true, 'show': error.email}">{{ error.email }}</p>
      </div>
      <div class="form-group">
        <input :class="{'is-error': error.password, 'is-success': !error.password && dirty.password}" id="password" type="password" name="password" :placeholder="$t('loginWithEmail.passwordPlaceHolder')" v-model="password" @input="passwordInput" />
        <p :class="{'error-tips': true, 'show': error.password}">{{ error.password }}</p>
      </div>
      <div class="form-group">
        <p class="forgot-password"><span>{{ $t('loginWithEmail.forgotPassword') }}</span></p>
        <button :class="{'login-btn': true, 'disabled': !(isEmailCorrect && isPasswordCorrect), 'loading': loading}" @click.enter="doLogin"><icon class="rotate" name="spinner" scale="1"></icon><span>{{ $t('loginWithEmail.loginText') }}</span></button>
      </div>
      <div class="other-login"><span @click="openLogin">{{ $t('loginWithEmail.registe') }}</span></div>
    </div>
  </modal>
</template>

<script>
import gql from 'graphql-tag'

let emailTimer = null
let passwordTimer = null

export default {
  data () {
    return {
      email: '',
      password: '',
      error: {
        email: '',
        password: ''
      },
      // check email has been inputed
      dirty: {
        email: false,
        password: false
      },
      loading: false
    }
  },
  computed: {
    isEmailCorrect () {
      return !this.error.email && this.dirty.email
    },
    isPasswordCorrect () {
      return !this.error.password && this.dirty.password
    }
  },
  methods: {
    openLogin () {
      this.$modal.hide('login-with-email')
      this.$modal.show('registe')
    },
    doLogin () {
      let self = this
      if (self.isEmailCorrect && self.isPasswordCorrect) {
        const authenticateMutation = gql`
          mutation {
            authenticateUser(email: "${self.email}", password: "${self.password}") {
              id
              username
              token
            }
          }
        `
        self.loading = true
        self.$apollo.mutate({
          mutation: authenticateMutation,
          variables: {
            email: self.email,
            password: self.password
          }
        }).then((data) => {
          self.loading = false
          // login success
          self.$modal.hide('login-with-email')
          self.$store.commit('doLogin', {
            id: data.data.authenticateUser.id,
            token: data.data.authenticateUser.token,
            username: data.data.authenticateUser.username,
            email: self.email
          })
        }).catch((error) => {
          self.loading = false
          // Error
          console.log(error)
          if (error.toString().indexOf('Email has not been registed') > -1) {
            self.error.email = self.$t('loginWithEmail.emailHasNotBeenRegisted')
          } else if (error.toString().indexOf('Password error') > -1) {
            self.error.password = self.$t('loginWithEmail.passwordError')
          } else {
            self.$modal.hide('login-width-email')
            self.$modal.show('dialog', {
              title: self.$t('modal.tipsTitle'),
              text: self.$t('loginWithEmail.loginFail'),
            })
          }
        })
      }
    },
    // listen for email change, validate email format
    emailInput () {
      if (emailTimer) {
        clearTimeout(emailTimer)
      }
      // email validate delay 1.5s
      emailTimer = setTimeout(() => {
        if (!this.dirty.email && this.email) {
          this.dirty.email = true
        }
        const emailReg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/
        if (!emailReg.test(this.email)) {
          // display error info
          this.error.email = this.$t('loginWithEmail.emailNoValidate')
        } else {
          this.error.email = ''
        }
      }, 1000)
    },
    // listen for password change, validate email format
    passwordInput () {
      if (passwordTimer) {
        clearTimeout(passwordTimer)
      }
      passwordTimer = setTimeout(() => {
        if (!this.dirty.password && this.password) {
          this.dirty.password = true
        }
        const passwordReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/
        if (!passwordReg.test(this.password)) {
          // display error info
          this.error.password = this.$t('loginWithEmail.passwordNoValidate')
        } else {
          this.error.password = ''
        }
      }, 1000)
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
        &.is-success {
          border-color: #3c763d;
        }
        &.is-error {
          border-color: #a94442;
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
      &.disabled {
        background: #d7d7d7;
        cursor: not-allowed;
      }
      &.loading>.fa-icon {
        display: inline-block;
      }
      &>.fa-icon {
        width: 25px;
        height: 25px;
        vertical-align: middle;
        margin-right: 10px;
        display: none;
      }
      &>span {
        vertical-align: middle;
      }
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
