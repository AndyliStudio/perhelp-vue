<template>
  <div id="app" ref="app" :class="{ 'bg': !isLogined }">
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <Header :class="{ 'header-bg': headerBg }"></Header>
    <div class="app-container">
      <router-view class="app-content" />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/basic/Header.vue'
import Footer from './components/basic/Footer.vue'

export default {
  name: 'App',
  data () {
    return {
      headerBg: false
    }
  },
  components: {
    Header,
    Footer
  },
  computed: {
    isLogined () {
      return this.$store.state.app.hasLogined
    }
  },
  watch: {
    // if use has not logined, listen for window scroll event
    isLogined (newValue, oldValue) {
      if (!newValue) {
        this.$refs.app.addEventListener('scroll', this.changeMemu)
      }
    }
  },
  methods: {
    changeMemu (event) {
      // when scroll top value is more than the header height, change header's background
      if (this.$refs.app.scrollTop > 75) {
        this.headerBg = true
      } else {
        this.headerBg = false
      }
    }
  },
  created () {
    let self = this
    if (!self.isLogined) {
      self.$nextTick(() => {
        self.$refs.app.addEventListener('scroll', self.changeMemu)
      })
    } else {
      self.headerBg = false
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
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  height: 100%;
  overflow: auto;
}
#app.bg {
    background: url(./assets/images/background.jpg) no-repeat;
    background-size: cover;
    background-position: center top;
}
.app-container{
  width: 100%;
  min-width: 1032px;
  min-height: 100%;
  overflow: hidden;
  padding-top: 77px;
  padding-bottom: 60px;
  box-sizing: border-box;
  -webkit-font-smoothing: subpixel-antialiased;
}
.app-content {
  /* width: 1100px; */
  /* padding: 0 16px; */
  margin: 0 auto;
}
.header-bg {
  background: #ffffff !important;
}
</style>
