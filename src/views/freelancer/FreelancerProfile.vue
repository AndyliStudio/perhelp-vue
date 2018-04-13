<template>
  <div class="content-scroll">
    <div class="profile">
        <div class="pf-banner">
        <div class="content-inner">
            <img class="avatar" :src="userInfo.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
            <div class="info-right">
                <div class="info-sort">{{userInfo.skillsort}}</div>
                <div class = "info-grid">
                <div class='info-item info-name'>{{userInfo.name}}</div>
                <div class='info-item'>{{userInfo.tel}}</div>
                <div class='info-item'>{{userInfo.addr}}</div>
                </div>
            </div>
        </div>
        </div>
        <div class="pf-page">
        <div class="content-inner-s">
            <section>
                <h3 class="title-orange">{{ $t("profile.introduce") }}</h3>
                <p class='intro-content'>{{userInfo.introduce}}</p>
            </section>
            <section>
                <h3 class="title-green-d">{{ $t("profile.project") }}</h3>
                <div class="exper-list">
                <div class="exper-item" v-for="project in projectlist" :key="project.id">
                    <div class="exper-company">{{project.name}}</div>
                    <div class="exper-duration">{{project.progress}}</div>
                    <div class="exper-title">{{project.total}}</div>
                </div>
                </div>
            </section>
            <section>
                <h3 class="title-blue">{{ $t("profile.experience") }}</h3>
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
                <h3 class="title-black">{{ $t("profile.works") }}</h3>
                <div class="work-list">
                <div class="work-item" v-for="work in worklist" :key="work.id">
                    <div class="work-item-bg"></div>
                    <div class="work-title">{{work.title}}</div>
                </div>
                </div>
            </section>
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
      userInfo: {
        skillsort: 'Graphic Designer',
        name: 'Nick Lee',
        addr: 'Hong Kong TaiPo NT',
        tel: '852 608 - XXXX',
        time: '1-2小时/周',
        introduce: '这项调查是美国一家在线人力资源服务机构 Paychex 主导展开的，分析人员仔细查看了知名招聘网站 Indeed.com 上超过 40 万份自由职业者的简历。结果显示，从 1970 年到上世纪 90 年代，“自由职业者”还是一个陌生的概念，可是在 2000 年 - 2014 年间，美国的自由职业经济增长就变得刹不住车了——在这 10 年间，它增长了 500% 还要多。'
      },
      projectlist: [
        {
          name: 'ABC Studio Website',
          progress: '50%',
          total: '$4300'
        }, {
          name: 'ABC Studio App',
          progress: '80%',
          total: '$2200'
        }
      ],
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

.content-scroll{
  height: 100%;
  overflow-y: auto;
}

.profile{
  padding: 30px 60px;
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
  line-height: 30px;
  font-size: 13px;
  color: #999999;
  max-height: 115px;
  overflow: hidden;
}

.pf-page {
  .exper-item{
    color: rgb(0,79,146);
    height: 32px;
    margin-top: 10px;
    line-height: 32px;
    font-size: 13px;
    .exper-company{
      width: 44%;
      float: left;
      border-bottom: 1px solid rgb(220,220,220);
    }

    .exper-duration,.exper-title{
      margin-left: 2%;
      float: left;
      width: 26%;
      text-align: center;
      border-bottom: 1px solid rgb(220,220,220);
    }
  }

  .skill-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .skill-item{
      flex-basis:30%;
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

  .work-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .work-item{
      flex-basis:21%;
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

  section {
    margin-top: 30px;
    position: relative;

    h3{
      font-size: 16px;
      font-weight: bold;
      margin-top: 30px;
      margin-bottom: 10px;
    }
  }
}

.pf-banner {
  height: 170px;
  border-bottom: 1px solid #e0e0e0;
  .avatar {
    margin-top: 5px;
    border-radius: 50%;
    width: 128px;
    height: 128px;
    float: left;
    box-shadow: 0px 3px 3px #999999;
  }
  .info-right {
    margin-left: 175px;
    overflow: hidden;
  }
  .info-sort {
    margin: 0;
    width: 200px;
    height: 36px;
    background: linear-gradient(left, rgb(241, 56, 56), rgb(241, 150, 100));
    border-radius: 18px;
    line-height: 36px;
    font-size: 13px;
    color: #ffffff;
    padding: 0 28px;
  }
  .info-grid {
    margin-top:20px;
    height: 100px;
    .info-name {
      font-weight: bold;
    }
    .info-item {
      line-height: 28px;
      font-size: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
