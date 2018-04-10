<template>
  <modal classes="mangment v--modal" :pivotX="1" name="ManagMent" transition="pop-out" width="42%" height="100%" @before-open="beforeOpen" >
    <div class="mangBox">
        <div class="back" @click="$modal.hide('ManagMent')" ><icon name="times" ></icon></div>
        <div class="headers">
          <div class="logo">
            <img :src="data.logoUrl">
          </div>
          <div class="right">
            <div>
              <h4>{{ $t('taskInfo.team') }}</h4>
              <span>{{data.team}}</span>
            </div>
            <div>
              <h4>{{ $t('taskInfo.position') }}</h4>
              <span>{{data.position}}</span>
              <p class="pp">{{data.term}}</p>
            </div>
          </div>
        </div>
        <ul class="conntent">
          <li>
            <h1>{{ $t('taskInfo.task') }}</h1>
            <p>{{data.task}}</p>
          </li>
          <li>
              <h1>{{ $t('taskInfo.details') }}</h1>
              <p>{{data.details}}</p>
          </li>
          <li>
              <h1>{{ $t('taskInfo.skill') }}</h1>
              <p class="clearp" v-for="(item, index) in data.skills" :key="index" >{{item}}</p>
          </li>
        </ul>
        <div class="footer">
          <div class="btn">{{ $t('taskInfo.collection') }}</div>
          <div class="btn">{{ $t('taskInfo.apply') }}</div>
        </div>
    </div>
  </modal>
</template>

<script>
export default {
  data () {
    return {
      data: {
        logoUrl: String,
        team: String,
        position: String,
        term: String,
        task: String,
        details: String,
        skills: {
          type: Array
        }
      }
    }
  },
  methods: {
    beforeOpen (data) {
      this.data = data.params.item
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
  .mangment{
    background-color: white;
  }
  .mangBox{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .back{
    width:trans(60px);
    height:trans(60px);
    position: absolute;
    left: trans(70px);
    top: trans(35px);
    cursor: pointer;
    border-radius: 90%;
    line-height: trans(60px);
    text-align: center;
    box-shadow: 0px 0px trans(10px) 0 rgba(0,0,0,0.8) inset;
    .fa-times{
      width: 100%;
      height: 100%;
    }
  }
  .headers{
    width: 100%;
    height: trans(355px);
    padding-left: trans(185px);
    padding-top: trans(50px);
    background-color: #fcffee;
    display: flex;
    .logo{
      width: trans(228px);
      height: trans(228px);
      flex-shrink:0;
      border:trans(22px) solid #d6d9cb;
      box-sizing: border-box;
      border-radius: trans(57px);
      margin-right: trans(55px);
      overflow: hidden;
      &>img{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      width: 100%;
      height: 100%;
      font-size: trans(24px);
      padding-top: trans(10px);
      h4{
        color:#9e9e9e;
        margin-bottom:trans(14px);
      }
      &>div{
        margin-bottom: trans(55px);
      }
      .pp{
        margin-top: trans(14px);
      }
    }
  }
  .conntent{
    padding: trans(102px) trans(163px) 0 trans(188px);
    font-size: trans(24px);
    h1{
      font-weight: normal;
      color: #9e9e9e;
    }
    p{
      line-height: trans(48px);
      margin-bottom: trans(55px);
    }
    .clearp{
      margin-bottom: 0;
    }
  }
  .footer{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: trans(142px);
    line-height: trans(142px);
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    &>div{
      width: 50%;
      text-align: center;
      background-color: #0094c3;
      &:last-child{
        background-color: #236f8c;
      }
    }
  }
</style>
