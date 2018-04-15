<template>
  <div class="new-job">
    <div class="title-top">
      <span>{{ $t('newJob.title') }}</span>
      <span></span>
    </div>
    <div class="job-box">
      <div class="title">{{ $t('newJob.name') }}</div>
      <div class="content">
        <input class="job-input" name="name" type="text" :placeholder="$t('newJob.namePlaceHolder')" v-model="task.name">
      </div>
    </div>
    <div class="job-box">
      <div class="title">{{ $t('newJob.property') }}</div>
      <div class="content">
        <RadioBox name="property" :options="radio.property" :value="task.property" @change="handleChange"></RadioBox>
      </div>
    </div>
    <div class="job-box">
      <div class="title">{{ $t('newJob.type') }}</div>
      <div class="content">
          <RadioBox name="type" multiple :options="radio.type" :value="task.type" @change="handleChange"></RadioBox>
      </div>
    </div>
    <div class="job-box">
      <div class="title">{{ $t('newJob.salay') }}</div>
      <div class="content">
        <RadioBox name="salay" :options="radio.salay" :value="task.salay" @change="handleChange"></RadioBox>
      </div>
    </div>
    <div class="job-box">
      <div class="title">{{ $t('newJob.demand') }}</div>
      <div class="content">
        <RadioBox name="demand" :options="radio.demand" :value="task.demand" @change="handleChange"></RadioBox>
      </div>
    </div>
    <div class="job-box">
      <div class="title">{{ $t('newJob.content') }}</div>
      <div class="content">
        <textarea name="content" rows="3" :placeholder="$t('newJob.contentPlaceHolder')" v-model="task.content"></textarea>
      </div>
    </div>
    <div class="job-box">
      <div class="title">所需技能</div>
      <div class="content">
        <input class="job-input" name="skill" type="text" placeholder="请输入所需技能关键字" v-model="task.skill">
      </div>
    </div>
    <div class="job-box btn">
      <div class="submit" @click="submit">新增任务</div>
    </div>
  </div>
</template>

<script>
import RadioBox from '../../components/management/RadioBox.vue'

export default {
  data () {
    return {
      radio: {
        property: [
          {
            value: 'freelancer',
            html: '<p class="radio-title">' + this.$t('newJob.task.property.freelancer') + '</p><p class="radio-des">' + this.$t('newJob.task.property.freelancerDes') + '</p>'
          },
          {
            value: 'parttime',
            html: '<p class="radio-title">' + this.$t('newJob.task.property.partTime') + '</p><p class="radio-des">' + this.$t('newJob.task.property.partTimeDes') + '</p>'
          }
        ],
        type: [
          { value: 'design', text: this.$t('newJob.task.type.design') },
          { value: 'program', text: this.$t('newJob.task.type.program') },
          { value: 'digital', text: this.$t('newJob.task.type.digital') },
          { value: 'copyWriting', text: this.$t('newJob.task.type.copyWriting') },
          { value: 'media', text: this.$t('newJob.task.type.media') }
        ],
        salay: [
          { value: 'fixed', text: this.$t('newJob.task.salay.fixed') },
          { value: 'hour', text: this.$t('newJob.task.salay.hour') }
        ],
        demand: [
          { value: 1, text: this.$t('newJob.task.demand.one') },
          { value: 2, text: this.$t('newJob.task.demand.two') },
          { value: 3, text: this.$t('newJob.task.demand.three') },
          { value: 4, text: this.$t('newJob.task.demand.four') }
        ]
      },
      task: {
        name: '',
        property: 'freelancer',
        type: ['design'],
        salay: 'fixed',
        demand: 1,
        content: '',
        skill: []
      }
    }
  },
  computed: {},
  methods: {
    handleChange (data) {
      if (data && data.name) {
        this.task[data.name] = data.value
      }
    },
    submit () {
      console.log('提交')
    }
  },
  components: {
    RadioBox
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
  .job-input{
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
