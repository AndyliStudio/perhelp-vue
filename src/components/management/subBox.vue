<template>
  <div class="boxs" >
    <div class="box-top">
        <span>{{title}}</span>
        <div>
          <div class="small" v-for="(item,idx) in dataSmall" :key="idx" >{{item}}</div>
        </div>
    </div>
    <div class="box-bottom">
      <div class="checkBox" @click="select">
        <icon v-show="flag" name="check" ></icon>
      </div>
      <span>{{label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    label: String,
    dataSmall: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      data: '',
      flag: false
    }
  },
  computed: {

  },
  methods: {
    select (e) {
      e.cancelBubble = true
      if (!this.flag) {
        this.flag = true
      } else {
        this.flag = false
      }
      this.$emit('myselect', this.flag)
    }
  }
}
</script>

<style scoped>
  .boxs{
    width: 227px;
    min-width: 227px;
    box-shadow: 0 3px 5px 2px rgba(0, 0, 0, 0.3);
    border-radius: 1px;
    height: 320px;
    position: relative;
    margin-right: 41px;
  }
  /* .boxs:nth-child(1){
    margin-right: 41px;
  }
  .boxs:nth-child(2){
    margin-right: 37px;
  }
  .boxs:nth-child(3){
    margin-right: 24px;
  } */
  .box-top{
    padding: 30px 30px 0 30px;
    box-sizing: border-box;
  }
  .box-top>span{
    /* display: inline-block; */
    font-size: 14px;
    font-weight: 800;
    line-height: 5px;
  }
  .box-top>div{
    margin-top: 17px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
  }
  .small{
    text-align: center;
    line-height: 24px;
    height: 24px;
    background-color: #d8d8d8;
    border-radius: 8px;
    margin-bottom: 6px;
  }
  .small:nth-child(1){
    width: 75px;
  }
  .small:nth-child(2){
    width: 85px;
  }
  .small:nth-child(3){
    width: 85px;
  }
  .small:nth-child(4){
    width: 75px;
  }
  .small:nth-child(5){
    width: 135px;
  }
  .small:nth-child(6){
    width: 85px;
  }
  .box-bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 45px;
    width: 100%;
    padding-left: 22px;
    box-sizing: border-box;
    border-top: 1px solid #c3c3c3;
    display: flex;
    align-items: center;
  }
  .checkBox{
    width: 32px;
    height: 32px;
    cursor:pointer;
    margin-right: 7px;
    box-sizing: border-box;
    border: 5px solid #d8d8d8;
    border-radius: 8px;
    position: relative;
  }
  .fa-icon{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .box-bottom>span{
    display: block;
    margin-bottom: 6px;
    align-self:flex-end;
  }

</style>
