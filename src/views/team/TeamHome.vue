<template>
  <div class="team-home">
   <div>
     <router-link tag="div" :to="{name: 'teamcreate'}" class="button btn-blue" >{{ $t('team.createTeam') }}</router-link>
     <div class="team-box-icon">
       <img class="team-img-logo" src="../../assets/images/createTeam.png" alt="">
     </div>
     <div class="tip">{{ $t('team.introCreateTeam') }}</div>
   </div>
  <div>
    <router-link tag="div" :to="{name: 'teamcreate'}" class="button btn-red" >{{ $t('team.joinTeam') }}</router-link>
    <div class="team-box-icon team-box-icon-red">
      <img class="team-img-logo" src="../../assets/images/joinTeam.png" alt="">
    </div>
    <div class="tip">{{ $t('team.introJoinTeam') }}</div>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  computed: {

  },
  methods: {}
}
</script>

<style scoped >
  .team-home{
    padding: 0 230px 0 230px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .team-home>div{
    margin-top: 34px;
    width: 300px;
    height: 410px;
  }
  .button{
    width: 273px;
    height: 68px;
    color: #fff;
    border-radius: 34px;
    text-align: center;
    line-height: 68px;
    font-size: 18px;
    cursor: pointer;
  }
  .btn-blue{
    background-color: #26bcd1;
  }
  .btn-red{
    background-color: #db3f3f;
  }
  .tip{
    color: #7a7a7a;
    font-size: 18px;
    line-height: 1.5em;
  }
  .team-box-icon{
    width: 227px;
    height: 230px;
    margin: 46px 0 41px 23px;
    border: 11px solid #5db7c4;
    border-radius: 23px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px 1px rgba(0,0,0,0.3) inset;
  }
  .team-box-icon-red{
    border: 11px solid #db3f3f;
  }
  .team-img-logo{
    width: 143px;
    height: 138px;
  }
</style>
