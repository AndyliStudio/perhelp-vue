<template>
  <div class="profile">
    <img class="avatar" :src="userInfo.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
  </div>
</template>

<script>

export default {
  name: 'profile',
  data () {
    return {
      userinfo: {}
    }
  },
  methods: {
    hi () {

    }
  }
}
</script>

<style scoped>

</style>
