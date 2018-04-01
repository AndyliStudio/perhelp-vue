<template>
  <div id="app">
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <Header></Header>
    <router-view/>
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
  created () {
    // this.$Progress.start()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
