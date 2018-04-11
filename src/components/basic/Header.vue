<template>
  <div class="app-header">
    <nav class="header-inner" :style="{ 'background': isLogined ? '#ffffff' : 'none' }">
      <router-link class="logo" :to="{name: 'index'}"><img src="../../assets/images/logotype-small.png" alt="Perhelp" /></router-link>
      <ul class="header-nav" v-if="isLogined">
        <li><icon name="cube"></icon>{{ $t("nav.worker") }}</li>
        <li><icon name="list-ul"></icon>{{ $t("nav.accept_task") }}</li>
        <li><icon name="list-ul"></icon>{{ $t("nav.send_task") }}</li>
        <li><icon name="user"></icon>{{ $t("nav.team") }}</li>
        <li><icon name="connectdevelop"></icon>{{ $t("nav.connect") }}</li>
      </ul>
      <span class="header-word" v-else>{{ $t('nav.word') }}</span>
      <div class="header-profile">
        <div class="logout-btn" v-if="isLogined">
          <span>{{ $t("nav.logout") }}</span>
          <img class="avatar" :src="userInfo.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
        </div>
        <div class="login-btn" v-else>
          <span @click="openLogin">{{ $t('nav.login') }}</span>
          <span class="sprite">/</span>
          <span @click="openRegiste">{{ $t('nav.registe') }}</span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: ''
    }
  },
  computed: {
    isLogined () {
      return this.$store.state.app.hasLogined
    },
    userInfo () {
      return this.$store.state.app.userInfo
    }
  },
  methods: {
    // open the login dialog
    openLogin () {
      this.$modal.show('login')
    },
    // open the registe dialog
    openRegiste () {
      this.$modal.show('registe')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0 !important;
  z-index: 2;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
  width: 100%;
  min-width: 1032px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  background-clip: content-box;
  .header-inner {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 1100px;
    height: 75px;
    padding: 0 16px;
    margin: 0 auto;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s,-webkit-transform .3s;
    .logo {
      display: inline-block;
      width: 70px;
      height: 70px;
      &>img {
        width: 100%;
        height: 100%;
      }
    }
    .header-nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      height: 30px;
      line-height: 30px;
      margin-right: 18px;
      margin-left: 27px;
      color: #b2b2b2;
      list-style: none;
      &>li {
        padding: 0 30px;
        font-size: 15px;
        line-height: 30px;
        &:first-child {
          padding-left: 0;
        }
      }
      .fa-icon{
        margin-right: 10px;
        vertical-align: middle;
        position: relative;
        width: 18px;
        height: 18px;
        top: -2px;
      }
    }
    .header-profile {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      .login-btn {
        font-size: 14px;
        cursor: pointer;
        background: #b9e9f1; /* Old browsers */
        background: -moz-linear-gradient(left, #5bd5f3 0%, #b9e9f1 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, #5bd5f3 0%,#b9e9f1 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, #5bd5f3 0%,#b9e9f1 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#5bd5f3', endColorstr='#b9e9f1',GradientType=0 ); /* IE6-9 */
        border-radius: 20px;
        color: #ffffff;
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 160px;
        .sprite {
          padding: 0 4px;
        }
      }
      .logout-btn {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        justify-content: center;
        align-items: center;
        font-size: 11px;
        cursor: pointer;
        background: url(../../assets/images/header-btn-bg.png) no-repeat;
        background-size: auto 100%;
        background-position: left center;
        border-radius: 20px;
        color: #ffffff;
        height: 48px;
        margin-top: 10px;
        text-align: center;
        width: 160px;
        &>span {
          margin-top: -8px;
          margin-left: -25px;
        }
        .avatar {
          position: absolute;
          top: -2px;
          right: 5px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
        }
      }
    }
    .header-word {
      color: #cdfaff;
      font-size: 16px;
      font-style: italic;
      letter-spacing: 2px;
      line-height: 1em;
      font-weight: 600;
      margin-left: 60px;
      text-transform: uppercase;
    }
  }
}
</style>
