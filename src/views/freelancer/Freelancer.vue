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
            <div class="service-list">
              <div class="service-item" v-for="service in servicelist" :key="service.id">
                  {{service.name}}
              </div>
            </div>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.works") }}</h3>
            <button class="section-editor"><icon name="pencil"></icon>{{ $t("profile.add") }}</button>
            <div class="work-list">
              <div class="work-item" v-for="work in worklist" :key="work.id">
                <div class="work-item-bg"></div>
                <div class="work-title">{{work.title}}</div>
              </div>
            </div>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.link_acount") }}</h3>
            <ul class="acount-list">
              <li><icon class="color-f" name="facebook-square"></icon></li>
              <li><icon class="color-g" name="google-plus-square"></icon></li>
              <li><icon class="color-t" name="twitter-square"></icon></li>
              <li><icon class="color-l" name="linkedin-square"></icon></li>
            </ul>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.join_team") }}</h3>
            <div class="team-list">
              <div class="team-item"  v-for="team in teamlist" :key="team.id">
                <icon name="coffee"></icon><br>
                <p>{{team.name}}</p>
              </div>
            </div>
          </section>
          <section>
            <h3 class="title-black">{{ $t("profile.my_honour") }}</h3>
            <div class="team-list">
              <div class="team-item"  v-for="honour in honourlist" :key="honour.id">
                <icon name="coffee"></icon><br>
                <p>{{honour.name}}</p>
              </div>
            </div>
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
      ],
      servicelist: [
        {
          name: '网页界面设计'
        }, {
          name: '应用程序界面设计'
        }
      ],
      worklist: [
        {
          title: '网页界面设计'
        }, {
          title: '应用程序设计'
        }, {
          title: '网页界面设计'
        }, {
          title: '应用程序设计'
        }, {
          title: '网页界面设计'
        }
      ],
      teamlist: [
        {
          name: 'ABC Studio'
        }, {
          name: 'DEF Studio'
        }
      ],
      honourlist: [
        {
          name: 'Lv1 hunter'
        }, {
          name: 'Lv5 Freeelance'
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

.profile{
  margin-bottom: 50px;
}
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

  .service-list{
    padding: 12px 0;
    .service-item{
      background: rgb(24,120,167);
      font-size: 14px;
      font-weight: bold;
      color: #ffffff;
      display: inline-block;
      margin-right: 56px;
      height: 40px;
      line-height: 40px;
      padding: 0 40px;
      border-radius: 20px;
    }
  }

  .work-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .work-item{
      flex-basis:14%;
      display: inline-block;

      .work-item-bg{
        background: #f0f0f0;
        border-radius: 6px;
        height: 160px;
        margin-top: 30px;
      }

      .work-title{
        font-size: 13px;
        text-align: center;
        padding: 10px;
      }
    }
  }

  .acount-list{
    height: 60px;
    margin-top: 20px;
    li{
      float: left;

      .fa-icon{
        width: 50px;
        height: 50px;
        margin-right: 50px;
      }

      .color-f{
        color: rgb(39,116,215);
      }
      .color-g{
        color: rgb(197,60,60);
      }
      .color-t{
        color: rgb(66,180,227);
      }
      .color-l{
        color: rgb(11,126,163);
      }
    }
  }

  .team-list{
    height: 150px;
    .team-item{
      float: left;
      text-align:center;
      margin-right: 60px;
      .fa-icon{
        width: 120px;
        height: 120px;
        color: #b0b0b0;
      }
      p{
        font-weight: bold;
        font-size: 15px;
      }
    }
  }

  section {
    margin-top: 50px;
    position: relative;

    h3{
      font-size: 18px;
      font-weight: bold;
      margin-top: 30px;
      margin-bottom: 10px;
    }

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
      outline:none;
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
