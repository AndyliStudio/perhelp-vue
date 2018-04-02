<template>
  <div id="app" :class="{ 'bg': !isLogined }">
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/basic/Header.vue'
import Footer from './components/basic/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
    isLogined () {
      return this.$store.state.app.hasLogined
    }
  }
}
</script>

<style>
html, body {
 height: 100%;
 overflow: hidden;
}

#app {
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  font-size: 15px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  padding-top: 75px;
  box-sizing: border-box;
  min-height: 100%;
}
#app.bg {
    background: url(./assets/images/background.jpg) no-repeat;
    background-size: cover;
    background-position: center top;
}
</style>
