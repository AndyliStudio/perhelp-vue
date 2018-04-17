<template>
  <div class="btnRadios" ref="btnRadios" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {}
  },
  mounted () {
    let slots = (this.$slots.default.length + 1) / 2
    if (slots === 4) {
      this.$refs.btnRadios.style = `justify-content: space-between;`
    } else if (slots > 4) {
      this.$refs.btnRadios.style = `flex-wrap: wrap;justify-content: space-between;`
    }
  },
  methods: {}
}
</script>

<style scoped>
  .btnRadios{
    display: flex;
    flex-wrap: nowrap;
  }
</style>
