<template>
  <div class="new-job">
    <div class="title-top">
      <span>新增任务</span>
      <span></span>
    </div>
    <div class="job-box">
      <div class="title">任务名称</div>
      <div class="conntent">
        <input class="jobTitle" name="jobTitle" type="text" placeholder="请输入任务名称">
      </div>
    </div>
    <div class="job-box">
      <div class="title">任务属性</div>
      <div class="conntent">
        <subBtnRadios>
          <subBtn style="margin-right:32px;" v-model="sx" title="自由工作" :checked="true" label="(20小时 + / 個)"></subBtn>
          <subBtn v-model="sx" title="兼职" label="(1 - 20小时 + / 個)"></subBtn>
        </subBtnRadios>
      </div>
    </div>
    <div class="job-box">
      <div class="title">任务类型</div>
      <div class="conntent">
        <subBtnRadios>
          <subBtn style="margin-bottom:18px;" v-model="sx" title="设计" :checked="true"></subBtn>
          <subBtn v-model="sx" title="电脑编程"></subBtn>
          <subBtn v-model="sx" title="数码营销"></subBtn>
          <subBtn v-model="sx" title="文案创作"></subBtn>
          <subBtn v-model="sx" title="媒体制作"></subBtn>
        </subBtnRadios>
      </div>
    </div>
    <div class="job-box">
      <div class="title">设计形式</div>
      <div class="conntent">
        <subBtnRadios>
          <subBtn style="margin-right:32px;" v-model="sx" title="固定" :checked="true"></subBtn>
          <subBtn v-model="sx" title="时薪"></subBtn>
        </subBtnRadios>
      </div>
    </div>
    <div class="job-box">
      <div class="title">要求人数</div>
      <div class="conntent">
        <subBtnRadios>
          <subBtn v-model="sx" title="1人" :checked="true"></subBtn>
          <subBtn v-model="sx" title="2人"></subBtn>
          <subBtn v-model="sx" title="3人"></subBtn>
          <subBtn v-model="sx" title="4人"></subBtn>
        </subBtnRadios>
      </div>
    </div>
    <div class="job-box">
      <div class="title">任务内容</div>
      <div class="conntent">
        <textarea name="jobConnent" id="" rows="3" placeholder="请输入任务内容"></textarea>
      </div>
    </div>
    <div class="job-box">
      <div class="title">所需技能</div>
      <div class="conntent">
        <input class="jobTitle" name="jobSkill" type="text" placeholder="请输入所需技能关键字">
      </div>
    </div>
    <div class="job-box btn">
      <div class="submit" >新增任务</div>
    </div>
  </div>
</template>

<script>
import subBtnRadios from '../../components/management/subBtnRadios.vue'
import subBtn from '../../components/management/subBtn.vue'

export default {
  data () {
    return {
      sx: '222'
    }
  },
  computed: {},
  methods: {
    jobClick (data) {
      console.log(data)
    }
  },
  components: {
    subBtn, subBtnRadios
  }
}
</script>

<style lang="scss" scoped>
  @import './../../assets/styles/globaScss.scss';
  .new-job{
    padding: 50px 309px 0 309px;
    background-color: #fff9f9;
    font-size: 16px;
  }
  .title-top{
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }
  .title-top>span:first-child{
    flex-shrink: 0;
    padding-right: 15px;
  }
  .title-top>span:last-child{
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
  }
  .job-box{
    width: 100%;
    padding-bottom: 25px;
  }
  .job-box>.title{
    font-weight: 800;
    color: #606060;
    margin-bottom: 14px;
  }
  .jobTitle{
    width: 100%;
    height: 47px;
    outline: none;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 13px;
    padding-left: 20px;
    box-sizing: border-box;
  }
  textarea{
    width: 100%;
    height: 120px;
    outline: none;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
    border: none;
    border-radius: 13px;
    padding: 20px;
    box-sizing: border-box;
  }
  .btn{
    display: flex;
    justify-content: flex-end;
  }
  .submit{
    margin-top: 100px;
    width: 220px;
    height: 47px;
    background: linear-gradient(to right, #88c4d3, #2e7dc3);
    border-radius: 26px;
    text-align: center;
    line-height: 47px;
    color: #fff;
    margin-bottom: 137px;
    cursor: pointer;
  }
</style>
