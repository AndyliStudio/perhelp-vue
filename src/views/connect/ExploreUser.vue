<template>
  <div class="explore-user">
    <div class="user-item" v-for="item in partners" :key="item.id">
      <img class="avatar" v-view="item.avatar || '../../assets/images/avatar.png'" :alt="item.name" />
      <div class="info">
        <div class="job">{{ item.job }}</div>
        <p class="name">{{ item.name }}</p>
        <p class="des">{{ item.des }}</p>
      </div>
      <div class="operation">
        <button class="add"><icon name="plus" scale="1.3"></icon></button>
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
.explore-user {
  .user-item {
    margin-bottom: 25px;
    .avatar {
      display: inline-block;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      -webkit-box-shadow: 0 2px 2px 1px #a7a7a7;
      box-shadow: 0 2px 2px 1px #a7a7a7;
      margin-right: 30px;
      vertical-align: middle;
      cursor: pointer;
    }
    .info {
      display: inline-block;
      vertical-align: middle;
      width: 75%;
      .job {
        width: 200px;
        height: 26px;
        line-height: 26px;
        border-radius: 13px;
        padding: 0 15px;
        color: #fefdfc;
        background: #f13838; /* Old browsers */
        background: -moz-linear-gradient(left, #f13838 0%, #f09966 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(left, #f13838 0%,#f09966 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to right, #f13838 0%,#f09966 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f13838', endColorstr='#f09966',GradientType=0 ); /* IE6-9 */
      }
      .name {
        color: #000000;
        margin: 10px 0 5px 0;
      }
      .des {
        color: #9f9f9f;
        line-height: 1.4em;
      }
    }
    .operation {
      float: right;
      .add {
        background: #ffffff;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: none;
        -webkit-box-shadow: 0 2px 1px 1px #d0d0d0;
        box-shadow: 0 2px 1px 1px #d0d0d0;
        color: #656565;
        position: relative;
        cursor: pointer;
        & > .fa-icon {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
