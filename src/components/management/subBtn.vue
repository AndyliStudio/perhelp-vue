<template>
  <!-- <div :class="{subBtn:true, zzc:flag}" @click="(e)=>{e.cancelBubble = true; select(title)}">
    <span class="title">{{title}}</span>
    <span class="label">{{label}}</span>
  </div> -->
  <div class="subBtn">
    <input class="radioGroup" type="radio" ref="radio" v-model="checkeds" :value="title" :name="title" :id="title" @click="select">
    <label :for="title" >
        <span :class="{title:flag}">{{title}}</span>
        <span class="label" v-if="label">{{label}}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    label: String,
    name: String,
    checkeds: String
  },
  data () {
    return {
      flag: false
    }
  },
  mounted () {
    if (this.label) {
      this.flag = true
    } else {
      this.flag = false
    }
    if (this.$refs.radio.checked) {
      this.$el.querySelector('label').classList.add('zzc')
    }
  },
  computed: {

  },
  methods: {
    select (e) {
      e.cancelBubble = true
      let radios = this.$el.parentElement.children
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].children[0] === e.target) {
          radios[i].children[1].classList.add('zzc')
        } else {
          radios[i].children[1].classList.remove('zzc')
        }
      }
      // this.$emit('myBtnCick', this.flag)
    }
  }
}
</script>

<style scoped>
  .subBtn{
    width: 190px;
    height: 46px;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
    border-radius: 13px;
    box-sizing: border-box;
    font-size: 12px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }
  input[type='radio']{
    width: 100%;
    height: 100%;
  }
  label{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }
  span{
    width: 100%;
    text-align: center;
    display: block;
  }
  .title{
    margin-bottom: -15px;
  }
  .zzc{
    background-color: #3abad6;
    color: #fff;
  }
</style>
