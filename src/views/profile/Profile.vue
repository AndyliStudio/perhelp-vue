<template>
  <div class="profile">
    <div class="pf-banner">
      <div class="content-inner">
        <img class="avatar" :src="userInfo.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
        <div class="info-right">
            <div class="info-sort">{{userInfo.skillsort}}</div>
            <div class = "info-grid">
                <div class='info-item info-name'>{{userInfo.name}}</div>
                <div class='info-item'>{{userInfo.addr}}</div>
                <div class='info-item'>{{userInfo.tel}}</div>
                <div class='info-item'>{{userInfo.time}}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="pf-page">
      <div class="content-inner-s">
          <section>
            <h3 class="title-orange">{{ $t("profile.introduce") }}</h3>
          </section>
          <section>
            <h3 class="title-blue">{{ $t("profile.experience") }}</h3>
          </section>
          <section>
            <h3 class="title-green">{{ $t("profile.skill") }}</h3>
          </section>
          <section>
            <h3 class="title-green-d">{{ $t("profile.service") }}</h3>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.works") }}</h3>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.link_acount") }}</h3>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.join_team") }}</h3>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.my_honour") }}</h3>
          </section>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'profile',
  data () {
    return {
      userInfo: {
        skillsort:"Graphic Designer",
        name:"Nick Lee",
        addr:"Hong Kong TaiPo NT",
        tel:"852 608 - XXXX",
        time:"1-2小时/周"
      }
    }
  },
  methods: {
    hi () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .content-inner{
    width: 1100px;
    margin: 0 auto;
  }

  .content-inner-s{
    width: 875px;
    margin: 0 auto;
  }

  .title-orange{
    color: rgb(220,130,130);
  }

  .title-blue{
    color: rgb(60,140,215)
  }

  .title-green{
    color: rgb(48,210,144)
  }

  .title-green-d{
    color: rgb(18,148,95)
  }

  .pf-banner{
    background:#f9f9f9;
    height:270px;

    .avatar{
      margin:36px 0px 36px 230px;
      border-radius:80px;
      width:200px;
      height:200px;
      float:left;
      box-shadow: 0px 3px 3px #999999;
    }

    .info-right{
      margin-left:550px;
      overflow: hidden;
    }

    .info-sort{
      margin: 36px 0px 27px 0;
      width: 160px;
      height: 53px;
      background: linear-gradient(left, rgb(241,56,56), rgb(241,150,100));
      border-radius: 33px;
      line-height: 53px;
      font-size: 16px;
      color: #ffffff;
      padding:0 32px;
    }

    .info-grid { 
      height: 200px;

      .info-name{
        font-weight: bold;
      }

      .info-item{
        float:left;
        line-height:40px;
        font-size:15px;
        width:36%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
      }
    }
  }
</style>
