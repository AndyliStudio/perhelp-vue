// 单选按钮组件
<template>
  <div class="radiobox">
    <button :class="{'radio-btn': true, 'selected': selected.indexOf(item.value) > -1}" v-for="(item, index) in options" :key="index" v-html="item.text || item.html" @click="doSelect(item.value)"></button>
  </div>
</template>

<script>
import { deepCopy } from '../../utils'

export default {
  props: {
    name: String,
    value: '',
    multiple: Boolean,
    options: Array
  },
  data () {
    return {
      selected: []
    }
  },
  methods: {
    doSelect (value) {
      const isInSelected = this.selected.indexOf(value)
      // if suport multiple select
      if (this.multiple) {
        if (isInSelected > -1) {
          this.selected.splice(isInSelected, 1)
        } else {
          this.selected.push(value)
        }
      // not suport multiple select
      } else {
        this.selected = [value]
      }
      this.$emit('change', {
        name: this.name,
        value: this.multiple ? this.selected : value
      })
    }
  },
  mounted () {
    // load default options
    if (this.value instanceof Array) {
      this.selected = deepCopy(this.value)
    } else {
      this.selected.push(this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.radiobox {
  display: flex;
  display: -webkit-flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
}
.radio-btn {
  width: 190px;
  height: 46px;
  outline: none;
  border: none;
  background: #ffffff;
  -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
  border-radius: 13px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 12px;
  cursor: pointer;
  overflow: hidden;
  margin-right: 30px;
}
.radio-btn:last-child {
  margin-right: 0;
}
.selected {
  background-color: #3abad6;
  color: #fff;
}
</style>
