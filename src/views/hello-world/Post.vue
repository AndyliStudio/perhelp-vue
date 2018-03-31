<template>
  <div class="post-container">
    <img :src='post.imageUrl' v-bind:style='image'>
    <div class="des">{{ post.description }}</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    image: {
      'min-width': '60%',
      'max-width': '60%'
    }
  }),
  props: {
    post: {
      type: Object,
      default: function () {
        return { description: '', imageUrl: '' }
      }
    }
  }
}
</script>
<style>
.post-container {
    padding: 2px 16px;
    margin: 0 10px 10px 10px;
    position: relative;
}
.post-container .des {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 60px;
}
</style>
