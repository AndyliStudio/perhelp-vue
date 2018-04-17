<template>
  <div class="teaminfo">
    <div class="pf-banner">
      <div class="content-inner">
        <img class="avatar" :src="teamInfo.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
        <div class="info-right">
            <div class = "info-grid">
              <div class='info-item info-name'>{{teamInfo.name}}</div>
              <div class='info-item'>{{teamInfo.addr}}</div>
              <div class='info-members'>
                <div class="founder-info">
                  <img class="fd-avatar" :src="founder.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
                  <p>{{founder.name}}</p>
                </div>
                <div class="fd-button-c">
                  <button>{{$t("team.recruit")}}</button>
                </div>
              </div>
            </div>
        </div>

      </div>
    </div>
    <div class="pf-page">
      <div class="content-inner-s">
        <div class="content-inner-x">
          <section>
            <h3 class="title-orange">{{ $t("team.about") }}{{teamInfo.name}}</h3>
            <p class='intro-content'>{{teamInfo.introduce}}</p>
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
            <h3 class="title-blue">{{ $t("profile.works") }}</h3>
            <div class="work-list">
              <div class="work-item" v-for="work in worklist" :key="work.id">
                <div class="work-item-bg"></div>
                <div class="work-title">{{work.title}}</div>
              </div>
            </div>
          </section>
          <section>
            <h3 class="title-green-d">{{ $t("team.members") }}</h3>
            <div class="team-list">
              <div class="team-item"  v-for="team in teamlist" :key="team.id">
                <img class="mb-avatar" :src="team.avatar || 'https://fs.andylistudio.com/perhelp/v1/avatar.png'" />
                <p>{{team.name}}</p>
              </div>
            </div>
          </section>
      </div>
      <div class="radar-container">
        <canvas id="radar-chart"></canvas>
      </div>
      </div>
    </div>
  </div>
</template>

<script>

import Chart from 'chart.js'

export default {
  name: 'teaminfo',
  data () {
    return {
      teamInfo: {
        skillsort: 'Graphic Designer',
        name: 'Nick Lee',
        addr: 'Hong Kong TaiPo NT',
        tel: '852 608 - XXXX',
        time: '1-2小时/周',
        introduce: '这项调查是美国一家在线人力资源服务机构 Paychex 主导展开的，分析人员仔细查看了知名招聘网站 Indeed.com 上超过 40 万份自由职业者的简历。结果显示，从 1970 年到上世纪 90 年代，“自由职业者”还是一个陌生的概念，可是在 2000 年 - 2014 年间，美国的自由职业经济增长就变得刹不住车了——在这 10 年间，它增长了 500% 还要多。'
      },
      founder: {
        avatar: '',
        name: 'Nick ng'
      },
      skilllist: [
        {
          title: 'HTML'
        }, {
          title: 'CSS'
        }, {
          title: 'Javascript'
        }, {
          title: 'PHP'
        }, {
          title: 'Python'
        }, {
          title: 'HTML'
        }, {
          title: 'CSS'
        }, {
          title: 'Javascript'
        }, {
          title: 'PHP'
        }, {
          title: 'Python'
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
          name: 'Nick Lee'
        }, {
          name: 'Nick Lee'
        }
      ]
    }
  },
  mounted () {
    var ctx = document.getElementById('radar-chart').getContext('2d')
    this.myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: this.radarConfig,
      options: {scaleShowLabels: false, pointLabelFontSize: 10}
    })
  },
  computed: {
    radarConfig () {
      return {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Partying', 'Running'],
        datasets: [{
          fillColor: 'rgba(220,220,220,0.5)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          fillColor: 'rgba(151,187,205,0.5)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          data: [28, 48, 40, 19, 96, 27, 100]
        }]
      }
    }
  },
  methods: {
    hi () {}
  }
}
</script>

<style lang="scss" scoped>

.teaminfo{
  margin-bottom: 50px;
}
.content-inner {
  width: 1100px;
  box-sizing: border-box;
  padding: 1px 16px;
  margin: 0 auto;
}

.content-inner-s {
  width: 1100px;
  padding: 1px 16px;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
}

.radar-container{
  position: absolute;
  right: -100px;
  top: 50px;
}

#radar-chart{
  width: 450px;
  height: 300px;
  outline: none;
}

.content-inner-x {
  width: 670px;
  box-sizing: border-box;
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

  .skill-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .skill-item{
      flex-basis:18%;
      display: inline-block;

      .skill-tem-bg{
        background: #41a6d7;
        color: #ffffff;
        border-radius: 30px;
        padding: 12px;
        text-align: center;
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
      flex-basis:14%;
      display: inline-block;

      .work-item-bg{
        background: #f0f0f0;
        border-radius: 6px;
        height: 120px;
        margin-top: 30px;
      }

      .work-title{
        font-size: 13px;
        text-align: center;
        padding: 10px;
      }
    }
  }

  .team-list{
    margin-top:30px;
    height: 150px;
    .team-item{
      float: left;
      text-align:center;
      width: 80px;
      margin-right: 40px;
      .mb-avatar{
        width: 56px;
        border-radius: 50%;
      }
      p{
        margin-top: 10px;
        font-size: 13px;
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
  height: 188px;
  .avatar {
    margin: 30px 0px 30px 0px;
    border-radius: 30px;
    border: solid #e0e0e0 8px;
    width: 100px;
    height: 100px;
    float: left;
  }
  .info-right {
    margin-left: 142px;
    margin-top: 30px;
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
    .info-name {
      font-weight: bold;
      text-decoration: underline;
      color: #222222 !important;
    }
    .info-item {
      line-height: 24px;
      font-size: 16px;
      color:#999999;
      width: 36%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .info-name + .info-item {
      font-style:italic;
    }

    .info-members{
      padding: 30px 0;
    }

    .founder-info{
      float: left;
      text-align: center;
      width: 60px;
      .fd-avatar{
        width: 40px;
        border-radius: 50%;
        box-shadow: 0px 2px 3px #82d7f1;
      }

      p{
        font-size: 12px;
        font-weight: bold;
      }
    }

    .fd-button-c{
      height: 53px;
      margin-left: 70px;
      position: relative;
      button{
        position: absolute;
        bottom: 0;
        border: none;
        padding: 8px 20px;
        border-radius: 8px;
        font-size: 12px;
        font-weight: bold;
        color: #ffffff;
        background: linear-gradient(left, #f4840d, #e42827);
        box-shadow: 0px 3px 3px #d0d0d0;
      }
    }
  }
}
</style>
