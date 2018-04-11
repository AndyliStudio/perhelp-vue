<template>
  <modal classes="registe-container v--modal" name="registe" transition="pop-out" :width="460" :height="660">
    <div class="logo">
      <img src="../../assets/images/logotype-small.png" alt="perhelp" />
    </div>
    <div class="form">
      <div class="form-title">{{ $t('registe.pleaseRegiste') }}</div>
      <div class="form-group">
        <input :class="{'is-error': error.email, 'is-success': !error.email && dirty.email}" id="email" type="text" name="email" :placeholder="$t('registe.emailPlaceHolder')" v-model="email" @change="emailChange" />
        <p :class="{'error-tips': true, 'show': error.email}">{{ error.email }}</p>
      </div>
      <div class="form-group">
        <input :class="{'is-error': error.username, 'is-success': !error.username && dirty.username}" id="username" type="text" name="username" :placeholder="$t('registe.usernamePlaceHolder')" v-model="username" @change="usernameChange" />
        <p :class="{'error-tips': true, 'show': error.username}">{{ error.username }}</p>
      </div>
      <div class="form-group">
        <input :class="{'is-error': error.password, 'is-success': !error.password && dirty.password}" id="password" type="password" name="password" :placeholder="$t('registe.passwordPlaceHolder')" v-model="password" @change="passwordChange" />
        <p :class="{'error-tips': true, 'show': error.password}">{{ error.password }}</p>
      </div>
      <div class="form-group">
        <input :class="{'is-error': error.rePassword, 'is-success': !error.rePassword && dirty.rePassword && password === rePassword}" id="rePassword" type="password" name="rePassword" :placeholder="$t('registe.rePasswordPlaceHolder')" v-model="rePassword" @change="rePasswordChange" />
        <p :class="{'error-tips': true, 'show': error.rePassword}">{{ error.rePassword }}</p>
      </div>
      <div class="form-group">
        <button :class="{'login-btn': true, 'disabled': !(isEmailCorrect && isUsernameCorrect && isPasswordCorrect && isRePasswordCorrect)}" @click="doRegiste">{{ $t('registe.registeText') }}</button>
      </div>
      <div class="other-login"><span @click="openLogin">{{ $t('registe.hasAccount') }}</span></div>
    </div>
  </modal>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      email: '',
      username: '',
      password: '',
      rePassword: '',
      error: {
        email: '',
        password: '',
        rePassword: ''
      },
      // check email has been inputed
      dirty: {
        email: false,
        username: '',
        password: false,
        rePassword: false
      }
    }
  },
  computed: {
    isEmailCorrect () {
      return !this.error.email && this.dirty.email
    },
    isUsernameCorrect () {
      return !this.error.username && this.dirty.username
    },
    isPasswordCorrect () {
      return !this.error.password && this.dirty.password
    },
    isRePasswordCorrect () {
      return !this.error.rePassword && this.dirty.rePassword && this.password === this.rePassword
    }
  },
  methods: {
    openLogin () {
      this.$modal.hide('registe')
      this.$modal.show('login-with-email')
    },
    // send signup graphql
    doRegiste () {
      let self = this
      const signupMutation = gql`
        mutation {
          signupUser(email: "${self.email}", username: "${self.username}", password: "${self.password}") {
            id
            token
          }
        }
      `
      self.$apollo.mutate({
        mutation: signupMutation,
        variables: {
          email: self.email,
          username: self.username,
          password: self.password
        }
      }).then((data) => {
        // Result
        self.showModal = false
      }).catch((error) => {
        // Error
        console.error(error)
        if (error.toString().indexOf('Email already in use')) {
          self.$modal.hide('registe')
          self.$modal.show('dialog', {
            title: '温馨提示',
            text: self.$t('registe.emailHasBeenUsed'),
            buttons: [
              {
                title: '前往登錄', // Button title
                default: true, // Will be triggered by default if 'Enter' pressed.
                handler: () => {
                  self.$modal.show('login-with-email', {email: self.email})
                } // Button click handler
              }
            ]
          })
        }
      })
    },
    // listen for email change, validate email format
    emailChange () {
      if (!this.dirty.email && this.email) {
        this.dirty.email = true
      }
      const emailReg = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/
      if (!emailReg.test(this.email)) {
        // display error info
        this.error.email = this.$t('registe.emailNoValidate')
      } else {
        this.error.email = ''
      }
    },
    // listen for username change, validate email format
    usernameChange () {
      if (!this.dirty.username && this.username) {
        this.dirty.username = true
      }
      const usernameReg = /^[a-zA-Z0-9_-]{4,18}$/
      if (!usernameReg.test(this.username)) {
        // display error info
        this.error.username = this.$t('registe.usernameNoValidate')
      } else {
        this.error.username = ''
      }
    },
    // listen for password change, validate email format
    passwordChange () {
      if (!this.dirty.password && this.password) {
        this.dirty.password = true
      }
      const passwordReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/
      if (!passwordReg.test(this.password)) {
        // display error info
        this.error.password = this.$t('registe.passwordNoValidate')
      } else {
        this.error.password = ''
      }
    },
    // listen for confirm password change, validate email format
    rePasswordChange () {
      if (!this.dirty.rePassword && this.rePassword) {
        this.dirty.rePassword = true
      }
      const rePasswordReg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/
      if (!rePasswordReg.test(this.rePassword)) {
        // display error info
        this.error.rePassword = this.$t('registe.passwordNoValidate')
      } else {
        if (this.rePassword === this.password) {
          this.error.rePassword = ''
        } else {
          this.error.rePassword = this.$t('registe.passwordNotSame')
        }
      }
    }
  }
}
</script>
<style lang="scss">
.registe-container {
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
    padding: 80px 50px 20px 50px;
    position: relative;
    .form-title {
      font-size: 15px;
      color:#555555;
      margin-bottom: 0px;
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
