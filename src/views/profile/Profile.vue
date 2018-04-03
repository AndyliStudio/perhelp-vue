<template>
  <div class="profile">
    <div class="pf-banner">
      <img class="avatar" :src="userInfo.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
      <div class="">
          <div class = "info-grid">
              <div class='info-item info-name'></div>
              <div class='info-item info-name'></div>
              <div class='info-item info-name'></div>
              <div class='info-item info-name'></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'profile',
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    hi () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .pf-banner{
    background:#f9f9f9;
    height:320px;

    .avatar{
      margin:40px 0px 40px 280px;
      border-radius:90px;
      width:240px;
      height:240px;
      float:left;
      box-shadow: 0px 3px 3px #999999;
    }

    .info-grid {
      margin-left:666px;
      margin-top:30px;

      .info-item{
        float:left;
        line-height:40px;
        font-size:16px;
        width:40%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
  }
</style>
