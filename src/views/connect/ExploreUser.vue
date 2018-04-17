<template>
  <div class="explore-user">
    <div class="user-item" v-for="item in partners" :key="item.id">
      <div class="avatar">
        <img :src="item.avatar || '../../assets/images/avatar.png'" :alt="item.name" />
      </div>
      <div class="info">
        <div class="job">{{ item.job }}</div>
        <p class="name">{{ item.name }}</p>
        <p class="des">{{ item.des }}</p>
      </div>
      <div class="operation">
        <button class="add"><icon name="plus"></icon></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      partners: [
        { id: '1', name: '测试用户1', job: '前端工程师', des: '这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字。', avatar: 'http://iph.href.lu/200x200' },
        { id: '2', name: '测试用户2', job: '后端工程师', des: '这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字。', avatar: 'http://iph.href.lu/200x200' },
        { id: '3', name: '测试用户3', job: 'UI工程师', des: '这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字。', avatar: 'http://iph.href.lu/200x200' },
        { id: '4', name: '测试用户4', job: '测试工程师', des: '这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字，这是一段测试文字。', avatar: 'http://iph.href.lu/200x200' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
