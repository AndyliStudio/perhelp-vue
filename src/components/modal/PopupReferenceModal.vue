<template>
  <modal classes="reference v--modal" :pivotX="1" name="PopupReference" transition="out-in" height="100%" @before-open="beforeOpen" >
    <div class="box">
      <div id="top">
        <div :class="{'base':true, 'apply':true, 'btn':btn.btnFlaga}" @click="btnClick(1)"  @mouseover="btnOver(1)" @mouseout="btnOut(1)">Apply <icon name="angle-right" ></icon></div>
        <div :class="{'base':true, 'save':true, 'btn':btn.btnFlagb}" @click="btnClick(2)" @mouseover="btnOver(2)" @mouseout="btnOut(2)"><icon name="heart" ></icon> Save Job</div>
        <div :class="{'base':true, 'refer':true, 'btn':btn.btnFlagc}" @click="btnClick(3)"  @mouseover="btnOver(3)" @mouseout="btnOut(3)"><icon name="share" ></icon> Refer and Earn</div>
      </div>
      <div id="bottom">
        <div id="left">
          <h2>Wordpress Developer for site updates and search improvements</h2>
          <p>No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.</p>
          <p>No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.</p>
          <p>No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.</p>
          <div class="submit">
            <em>Like this job ?</em>
            <div :class="{thumbs:thumb.thumbsFlagUp}" @click="thumbsClick('up')" @mouseover="thumbsOver('up')" @mouseout="thumbsOut('up')"><icon name="thumbs-up" :class="{thumbs:thumb.thumbsFlagUp}"></icon></div>
            <div :class="{thumbs:thumb.thumbsFlagDown}" @click="thumbsClick('down')" @mouseover="thumbsOver('down')" @mouseout="thumbsOut('down')"><icon name="thumbs-down" :class="{thumbs:thumb.thumbsFlagDown}"></icon></div>
          </div>
        </div>
        <div id="right">
          <div class="rBox">
            <span class="rTitle">Job Type</span>
            <span class="rAricle">Short Term</span>
          </div>
          <div class="rBox">
            <span class="rTitle">HOURLY RATE (USD)</span>
            <span class="rAricle">$25-$50 /hr</span>
          </div>
          <div class="rBox">
            <span class="rTitle">SKILL LEVEL</span>
            <span class="rAricle">Intermediate</span>
          </div>
          <div class="rBox imgLogo">
            <div class="logoBox">
              <img v-for="(item,index) in data.logoImgs" :key="index" v-if="index < 2" :src="item" >
              <em>{{data.logoImgs.length}}</em>
              <span class="rTitle">Applications</span>
            </div>
            <span class="rAricle">Active this week</span>
          </div>
          <div class="rBox">
            <span class="rTitle">HIRING MANAGER</span>
            <span class="rAricle">James B</span>
            <span class="rAricle">Southampton, UK</span>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      btn: {
        btnFlaga: false,
        btnFlagb: false,
        btnFlagc: false
      },
      thumb: {
        thumbsFlagUp: false,
        thumbsFlagDown: false
      },
      data: {
        logoImgs: {
          type: Array
        }
      }
    }
  },
  computed: {},
  methods: {
    beforeOpen (data) {
      this.data = data.params.item
    },
    btnOver (index) {
      if (index === 1) {
        this.btn.btnFlaga = true
      } else if (index === 2) {
        this.btn.btnFlagb = true
      } else if (index === 3) {
        this.btn.btnFlagc = true
      }
    },
    btnOut (index) {
      if (index === 1) {
        this.btn.btnFlaga = false
      } else if (index === 2) {
        this.btn.btnFlagb = false
      } else if (index === 3) {
        this.btn.btnFlagc = false
      }
    },
    btnClick (index) {
      console.log(`点击了 第 ${index} 个按钮`)
    },
    thumbsOver (flag) {
      if (flag === 'up') {
        this.thumb.thumbsFlagUp = true
      } else if (flag === 'down') {
        this.thumb.thumbsFlagDown = true
      }
    },
    thumbsOut (flag) {
      if (flag === 'up') {
        this.thumb.thumbsFlagUp = false
      } else if (flag === 'down') {
        this.thumb.thumbsFlagDown = false
      }
    },
    thumbsClick (flag) {
      if (flag === 'up') {
        console.log('点击了 UP 事件')
      } else if (flag === 'down') {
        console.log('点击了 DOWN 事件')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/globaScss.scss';
  *{
    margin: 0;
    padding: 0;
  }
  .reference{
    background-color: white;
    width: trans(1540px);
    height: 100%;
    transition: all 1s ease-in-out;
  }
  .box{
    height: 100%;
    width: 100%;
  }
  #top{
    display: flex;
    height: trans(134px);
    box-shadow: 0 1px 1px 0 rgba(55, 55, 215, 0.3);
    display: flex;
    align-items: center;
    padding-left: trans(78px);
    .base{
      padding: 0 trans(58px);
      height: trans(100px);
      background-color: white;
      color: #6f6f79;
      border-radius: trans(116px);
      border: trans(2px) solid #e3e3e3;
      display:flex;
      justify-content: space-between;
      align-items: center;
    }
    .apply{
      width: trans(232px);
      margin-right: trans(40px);
    }
    .save{
      width: trans(304px);
    }
    .refer{
      width: trans(348px);
      /* align-items: flex-end; */
      position: absolute;
      right: trans(16px);
    }
    .btn{
      background: linear-gradient(to bottom, #57dcce, #2dc6db);
      color: #fff;
    }
  }
  #bottom{
    display: flex;
  }
  #left{
    width: trans(1124px);
    height: 100%;
    flex-shrink: 0;
    padding: trans(96px) trans(82px) 0 trans(121px);
    &>h2{
      font-weight: normal;
      font-size: 26px;
      margin-bottom: trans(80px);
      color: #302f41;
    }
    &>p{
      font-size: 14px;
      line-height: trans(66px);
      margin-bottom: trans(70px);
      color: #686871;
    }
    &>.submit{
      width: 100%;
      height: trans(210px);
      border: trans(3px) solid #eeeef0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      color: #d0d0d3;
      &>em{
        width:100%;
        text-align: center;
      }
      &>div{
        border: trans(3px) solid #eeeef0;
        width: trans(85px);
        height: trans(85px);
        line-height: trans(85px);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 90%;
      }
      .fa-thumbs-up .fa-thumbs-down{
        width: trans(27px);
        color: #6f6f79;
      }
      .thumbs{
        color: #000;
        border: none;
      }
    }
  }
  #right{
    width: 100%;
    height: 100%;
    padding-top: trans(100px);
    padding-right: trans(90px);
    .rBox{
      margin-bottom: trans(68px);
      &>span{
        display: block;
        width: 100%;
        font-size: 18px;
        color: #302f41;
        margin-bottom: trans(30px);
      }
      &>span:first-child{
        font-size: 13px;
        color: #8b8b92;
      }
      &>span:last-child{
        margin-bottom: 0;
      }
    }
    .imgLogo{
      border-bottom: trans(3px) solid #eeeef0;
      padding-bottom: trans(68px);
      &>span{
        color: #686871;
      }
      .logoBox{
        color: #686871;
        margin-bottom: trans(26px);
        display: flex;
        align-items: center;
        position: relative;
        &>img{
          width: trans(60px);
          height: trans(60px);
          border-radius: 90%;
        }
        &>img:first-child{
          position: absolute;
          z-index: 20;
          left:0;
          box-shadow: trans(4px) 0 trans(4px) trans(3px) #fff;
        }
        &>img:nth-of-type(2){
          margin-left: trans(50px);
        }
        &>em{
          margin-left: trans(16px);
        }
      }
    }
  }
</style>
