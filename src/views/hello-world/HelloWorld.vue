<template>
  <div class="hello-world">
    <create-post />
    <list-page />
  </div>
</template>

<script>
import ListPage from './ListPage.vue'
import CreatePost from './CreatePost.vue'

export default {
  name: 'postManage',
  components: {
    'list-page': ListPage,
    'create-post': CreatePost
  }
}
</script>

<style>
.hello-world{
  max-width: 1200px;
  margin: 0 auto;
}
</style>
