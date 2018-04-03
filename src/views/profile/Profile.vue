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
          <div class="profile-complate">{{profilePercent}}</div>
          <section>
            <h3 class="title-orange">{{ $t("profile.introduce") }}</h3>
            <button class="section-editor"><icon name="pencil"></icon>{{ $t("profile.add") }}</button>
            <p class='intro-content'>{{userInfo.introduce}}</p>
          </section>
          <section>
            <h3 class="title-blue">{{ $t("profile.experience") }}</h3>
            <button class="section-editor"><icon name="pencil"></icon>{{ $t("profile.add") }}</button>
            <div class="exper-list">
              <div class="exper-item" v-for="exper in experlist" :key="exper.id">
                <div class="exper-company">{{exper.company}}</div>
                <div class="exper-duration">{{exper.duration}}</div>
                <div class="exper-title">{{exper.title}}</div>
              </div>
            </div>
          </section>
          <section>
            <h3 class="title-green">{{ $t("profile.skill") }}</h3>
            <button class="section-editor"><icon name="pencil"></icon>{{ $t("profile.add") }}</button>
            <div class="skill-list">
              <div class="skill-item" v-for="skill in skilllist" :key="skill.id">
                <div class="skill-tem-bg">
                  <div class="skill-title">{{skill.title}}</div>
                  <div class="skill-time">{{skill.time}}</div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h3 class="title-green-d">{{ $t("profile.service") }}</h3>
            <button class="section-editor"><icon name="pencil"></icon>{{ $t("profile.add") }}</button>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.works") }}</h3>
            <button class="section-editor"><icon name="pencil"></icon>{{ $t("profile.add") }}</button>
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
        skillsort: 'Graphic Designer',
        name: 'Nick Lee',
        addr: 'Hong Kong TaiPo NT',
        tel: '852 608 - XXXX',
        time: '1-2小时/周',
        introduce: '这项调查是美国一家在线人力资源服务机构 Paychex 主导展开的，分析人员仔细查看了知名招聘网站 Indeed.com 上超过 40 万份自由职业者的简历。结果显示，从 1970 年到上世纪 90 年代，“自由职业者”还是一个陌生的概念，可是在 2000 年 - 2014 年间，美国的自由职业经济增长就变得刹不住车了——在这 10 年间，它增长了 500% 还要多。'
      },
      experlist: [
        {
          company: 'ABC Studio Limited',
          duration: '09/2002 - 09/2007',
          title: 'Graphic Degign'
        }, {
          company: 'ABC Studio Limited',
          duration: '09/2002 - 09/2007',
          title: 'Graphic Degign'
        }
      ],
      skilllist: [
        {
          title: 'Adobe Photoshop',
          time: '8 months'
        }, {
          title: 'Adobe Photoshop',
          time: '8 months'
        }, {
          title: 'Adobe Photoshop',
          time: '8 months'
        }, {
          title: 'Adobe Photoshop',
          time: '8 months'
        }, {
          title: 'Adobe Photoshop',
          time: '8 months'
        }, {
          title: 'Adobe Photoshop',
          time: '8 months'
        }, {
          title: 'Adobe Photoshop',
          time: '8 months'
        }, {
          title: 'Adobe Photoshop',
          time: '8 months'
        }
      ]
    }
  },
  computed: {
    profilePercent () {
      return 'Finised 80%'
    }
  },
  methods: {
    hi () {}
  }
}
</script>

<style lang="scss" scoped>
.content-inner {
  width: 1100px;
  margin: 0 auto;
}

.content-inner-s {
  width: 875px;
  margin: 0 auto;
}

.title-orange {
  color: rgb(220, 130, 130);
}

.title-blue {
  color: rgb(60, 140, 215);
}

.title-green {
  color: rgb(48, 210, 144);
}

.title-green-d {
  color: rgb(18, 148, 95);
}

.intro-content {
  line-height: 40px;
}

.pf-page {
  .profile-complate {
    width: 254px;
    height: 43px;
    background: linear-gradient(left, rgb(247, 112, 226), rgb(254, 148, 164));
    border-radius: 22px;
    line-height: 43px;
    font-size: 16px;
    color: #ffffff;
    padding: 0 32px;
    font-weight: bold;
    position: relative;
    left: -105px;
    top: -22px;
  }

  .exper-item{
    color: rgb(0,79,146);
    height: 40px;
    margin-top: 30px;
    line-height: 40px;
    .exper-company{
      width: 50%;
      float: left;
      border-bottom: 1px solid rgb(220,220,220);
    }

    .exper-duration,.exper-title{
      margin-left: 2%;
      float: left;
      width: 23%;
      text-align: center;
      border-bottom: 1px solid rgb(220,220,220);
    }
  }

  .skill-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .skill-item{
      flex-basis:21%;
      display: inline-block;

      .skill-tem-bg{
        background: #f0f0f0;
        border-radius: 30px;
        padding: 8px 26px;
        margin-top: 30px;
      }

      .skill-title{
        font-size: 13px;
      }

      .skill-time{
        font-size: 10px;
        color: rgb(220,130,130);
      }
    }
  }

  section {
    margin-top: 30px;
    position: relative;

    .section-editor{
      position: absolute;
      top: 0px;
      right: 1px;
      width: 97px;
      height: 27px;
      border-radius: 14px;
      border: none;
      box-shadow: 1px 1px 5px #999 inset;
      background: rgb(235, 235,196);
      cursor: pointer;

      .fa-icon{
        margin-right: 5px;
        vertical-align: middle;
        width: 15px;
        height: 15px;
      }
    }
  }
}

.pf-banner {
  background: #f9f9f9;
  height: 278px;
  .avatar {
    margin: 36px 0px 36px 230px;
    border-radius: 80px;
    width: 200px;
    height: 200px;
    float: left;
    box-shadow: 0px 3px 3px #999999;
  }
  .info-right {
    margin-left: 550px;
    overflow: hidden;
  }
  .info-sort {
    margin: 36px 0px 27px 0;
    width: 160px;
    height: 53px;
    background: linear-gradient(left, rgb(241, 56, 56), rgb(241, 150, 100));
    border-radius: 33px;
    line-height: 53px;
    font-size: 16px;
    color: #ffffff;
    padding: 0 32px;
  }
  .info-grid {
    height: 100px;
    .info-name {
      font-weight: bold;
    }
    .info-item {
      float: left;
      line-height: 40px;
      font-size: 15px;
      width: 36%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
