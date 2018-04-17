<template>
  <div class="Mangement-home">
    <ul>
      <li>
        <!-- 标题 -->
        <div class="box-header" >
          <span class="title" >{{ $t('teamCreate.createTeam') }}</span>
          <span class="line" ></span>
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
    padding: 16px 226px 0 226px;
    box-sizing: border-box;
  }
  .Mangement-home>ul{
    padding: 0;
    margin: 0;
  }
  .Mangement-home li{
    list-style-type: none;
    padding: 28px 0 0 0;
    box-sizing: border-box;
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
    padding-left: 5px;
    padding-right:18px;
    flex-shrink: 0;
  }
  .line{
    display: block;
    border-top:1px solid #e0e0e0;
    height: 1px;
    width: 100%;
  }
</style>
