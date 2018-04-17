<template>
  <div class="Mangement-home">
    <ul>
      <li>
        <!-- 标题 -->
        <div class="box-header" >
          <span class="title" >{{ $t('teamCreate.createTeam') }}</span>
          <span class="line" ></span>
        </div>
        <div class="update-logo">
          <img class="team-img-logo" src="../../assets/images/team-update-logo.png" alt="">
          <a>{{ $t('teamCreate.updateLogo') }}</a>
        </div>
      </li>
      <li>
        <div class="box-header" >
          <span class="title text-blod" >{{ $t('teamCreate.teamName') }}</span>
        </div>
        <div class="box-connent">
          <input class="inputText" type="text" name="teanName" :placeholder="$t('teamCreate.teamNameLabel')">
        </div>
      </li>
      <!-- <li>
        <div class="box-header" >
          <span class="title text-blod" >{{ $t('teamCreate.introduce') }}</span>
        </div>
        <div class="box-connent"></div>
      </li> -->
      <li>
        <div class="box-header" >
          <span class="title text-blod" >{{ $t('teamCreate.introduce') }}</span>
        </div>
        <div class="box-connent textarea-introduce">
          <textarea class="inputText " name="introduce"  :placeholder="$t('teamCreate.introduceLabel')" ></textarea>
        </div>
        <div class="button-team">
          <span>{{ $t('teamCreate.next') }}</span>
          <span>{{ $t('teamCreate.nextLabel') }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import subBox from '../../components/management/subBox.vue'

export default {
  data () {
    return {}
  },
  created () {},
  computed: {

  },
  methods: {},
  components: {
    subBox
  }
}
</script>

<style scoped >
  .Mangement-home{
    padding: 16px 226px 0 229px;
    box-sizing: border-box;
  }
  .Mangement-home>ul{
    padding: 0;
    margin: 0;
  }
  .Mangement-home li{
    list-style-type: none;
    box-sizing: border-box;
  }
  .Mangement-home li:first-child{
    padding: 28px 0 0 0;
    position: relative;
  }
  .update-logo{
    width: 160px;
    height: 164px;
    border: 9px solid #c3c3c3;
    border-radius: 12px;
    position: absolute;
    right: 0;
    top: 60px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .update-logo>a{
    color: #c3c3c3;
    font-size: 12px;
    font-weight: 800;
    text-decoration: underline;
  }
  .team-img-logo{
    width: 104px;
    height: 100px;
    margin-bottom: -5px;
  }
  .box-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  .title{
    display: block;
    text-align: left;
    font-size: 16px;
    padding-right:18px;
    flex-shrink: 0;
  }
  .text-blod{
    font-weight: 800;
  }
  .line{
    display: block;
    border-top:1px solid #e0e0e0;
    height: 1px;
    width: 100%;
  }
  .box-connent{
    width: 100%;
    height: 60px;
    margin-bottom: 38px;
  }
  .textarea-introduce{
    height: 150px;
    margin-bottom: 26px;
  }
  .textarea-introduce>textarea{
    width: 100%;
    resize: none;
  }
  .inputText{
    width: 45%;
    height: 100%;
    border-radius: 17px;
    border: none;
    box-shadow: 0 1px 2px 0px rgba(0,0,0,0.3);
    outline: none;
    padding-left: 20px;
    line-height: 60px;
    color: #696868;
    box-sizing: border-box;
  }
  .button-team{
    margin: 0 auto;
    width: 348px;
    height: 93px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: linear-gradient(to right, #c2e7e4, #a7d4ec);
    border-radius: 47px;
    font-size: 18px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;
  }
  .button-team>span:first-child{
    width: 100%;
    display: block;
    text-align: center;
    margin-bottom: -24px;
  }
  .button-team>span:last-child{
    width: 100%;
    display: block;
    text-align: center;
    margin-top: -24px;
  }
</style>
