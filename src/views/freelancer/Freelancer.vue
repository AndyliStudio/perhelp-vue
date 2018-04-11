<template>
  <div class="freelancer">
    <div class="fl-inner">
      <div class="skill-list">
        <div class="skill-item" v-for="skill in skilltype" :key="skill.id">
          <div class="skill-tem-bg">
            <div class="skill-title">{{skill.name}}</div>
          </div>
        </div>
      </div>

      <div class="freelancer-list">
        <div class="freelancer-item" v-for="freelancer in freelancerlist" :key="freelancer.id">
          <div class="freelancer-item-bg"></div>
          <div class="freelancer-title">{{freelancer.name}}</div>
          <div class="skill-type" :class="freelancer.skillcls">{{freelancer.skilltype}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'freelancer',
  data () {
    return {
      freelancerlist: [{
        name: 'Shane Park',
        skilltype: 'Marketing',
        skillcls: 'skill-green-blue'
      }, {
        name: 'Shane Park',
        skilltype: 'Graph Designer',
        skillcls: 'skill-red-orange'
      }, {
        name: 'Shane Park',
        skilltype: 'Programmer',
        skillcls: 'skill-blue-purple'
      }, {
        name: 'Shane Park',
        skilltype: 'CopyWriter',
        skillcls: 'skill-black-white'
      }, {
        name: 'Shane Park',
        skilltype: 'Media',
        skillcls: 'skill-orange-pink'
      }, {
        name: 'Shane Park',
        skilltype: 'Graph Designer',
        skillcls: 'skill-red-orange'
      }, {
        name: 'Shane Park',
        skilltype: 'Programmer',
        skillcls: 'skill-blue-purple'
      }, {
        name: 'Shane Park',
        skilltype: 'CopyWriter',
        skillcls: 'skill-black-white'
      }, {
        name: 'Shane Park',
        skilltype: 'Media',
        skillcls: 'skill-orange-pink'
      }, {
        name: 'Shane Park',
        skilltype: 'Graph Designer',
        skillcls: 'skill-red-orange'
      }, {
        name: 'Shane Park',
        skilltype: 'Programmer',
        skillcls: 'skill-blue-purple'
      }, {
        name: 'Shane Park',
        skilltype: 'CopyWriter',
        skillcls: 'skill-black-white'
      }],
      skilltype: [{
        name: '设计'
      }, {
        name: '电脑编程'
      }, {
        name: '数码营销'
      }, {
        name: '文案创作'
      }, {
        name: '媒体制作'
      }]
    }
  },
  computed: {
  },
  methods: {
    hi () {}
  }
}
</script>

<style lang="scss" scoped>
.freelancer{
  background:rgb(238,243,250);
  .fl-inner{
    width: 890px;
    min-height: 600px;
    margin: 0px auto;
    padding-bottom: 50px;
  }

  .skill-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    .skill-item{
      flex-basis:18.5%;
      display: inline-block;
      cursor: pointer;

      .skill-tem-bg{
        background: #ffffff;
        border-radius: 30px;
        font-size: 16px;
        color: rgb(28,115,111);
        font-weight: bold;
        text-align: center;
        padding: 15px 26px;
        margin-top: 30px;
        box-shadow: 0px 1px 3px #aaaaaa;
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

  .freelancer-list{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-top: 25px;

    .freelancer-item{
      flex-basis:23%;
      margin-top: 30px;
      display: inline-block;
      position: relative;
      background: #ffffff;
      border-radius:30px;
      box-shadow: 2px 3px 7px #cccccc;
      overflow: hidden;

      .freelancer-item-bg{
        background: rgb(237, 237, 237);
        height: 210px;
      }

      .skill-type{
        position: absolute;
        padding: 7px 12px;
        right: 13px;
        bottom: 55px;
        font-size: 10px;
        min-width: 75px;
        color: #ffffff;
        text-align: center;
        border-radius: 16px;
        border: 1px solid #ffffff;
        box-shadow: 1px 2px 3px #aaaaaa;
      }

      .skill-green-blue{
        background: linear-gradient(left, rgb(58, 242, 139), rgb(100, 241, 234));
      }

      .skill-red-orange{
        background: linear-gradient(left, rgb(242, 56, 56), rgb(241, 151, 101));
      }

      .skill-blue-purple{
        background: linear-gradient(left, rgb(58, 149, 242), rgb(129, 105, 241));
      }

      .skill-black-white{
        background: linear-gradient(left, rgb(0,0,0), rgb(230,230,230));
      }
      .skill-orange-pink{
        background: linear-gradient(left, rgb(237,211,116), rgb(254,129,229));
      }

      .freelancer-title{
        font-size: 13px;
        color: #666666;
        height: 55px;
        line-height: 55px;
        margin-bottom: 15px;
        padding: 0 16px;
      }
    }
  }
}
</style>
