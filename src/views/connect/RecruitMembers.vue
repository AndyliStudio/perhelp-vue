<template>
  <div class="recruit-members">
    <div class="team-item" v-for="item in teams" :key="item.id">
      <img class="avatar" v-view="item.avatar">
      <div class="info">
        <p class="name">
          <span class="name-text">{{ item.name }}</span>
          <span class="name-des">（{{ item.nameSign }}）</span>
        </p>
        <p class="members">{{ item.memberNumber }} numbers</p>
        <p class="des">{{ item.des }}</p>
      </div>
      <div class="operation">
        <button class="follow">{{ $t('connect.recruitMembers.followBtn') }}</button>
        <button class="join">{{ $t('connect.recruitMembers.joinTeamBtn') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      teams: [
        {
          id: 1,
          avatar: 'http://iph.href.lu/200x200',
          name: '90\'s ABC STUDIO',
          nameSign: 'a design team',
          memberNumber: 4,
          des: '这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字'
        },
        {
          id: 2,
          avatar: 'http://iph.href.lu/200x200',
          name: '90\'s ABC STUDIO',
          nameSign: 'a design team',
          memberNumber: 4,
          des: '这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字'
        },
        {
          id: 3,
          avatar: 'http://iph.href.lu/200x200',
          name: '90\'s ABC STUDIO',
          nameSign: 'a design team',
          memberNumber: 4,
          des: '这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字'
        },
        {
          id: 4,
          avatar: 'http://iph.href.lu/200x200',
          name: '90\'s ABC STUDIO',
          nameSign: 'a design team',
          memberNumber: 4,
          des: '这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字、这是一段测试文字，这是一段测试文字'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.recruit-members {
  .team-item {
      border-bottom: 1px solid #bfbfbf;
      padding: 20px 0;
      &:last-child {
        border-bottom: none;
      }
      .avatar {
        display: inline-block;
        vertical-align: text-top;
        width: 120px;
        height: 120px;
        margin-right: 35px;
      }
      .info {
        display: inline-block;
        vertical-align: text-top;
        width: 60%;
        color: #9e9e9e;
        line-height: 1.7em;
        .name-text {
          font-size: 16px;
          font-weight: bold;
          color: #575757;
          vertical-align: middle;
        }
        .name-des {
          vertical-align: middle;
        }
      }
      .operation {
        float: right;
        vertical-align: text-top;
        & > button {
          display: block;
          margin-bottom: 10px;
          width: 80px;
          height: 30px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          -webkit-box-shadow: 0 1px 1px 1px #dadada;
          box-shadow: 0 1px 1px 1px #dadada;
          &:last-child {
            margin-bottom: 0;
          }
        }
        .follow {
          color: #909090;
          background: #ffffff;
        }
        .join {
          color: #ffffff;
          background: #f5870c; /* Old browsers */
          background: -moz-linear-gradient(left, #f5870c 0%, #e42827 100%); /* FF3.6-15 */
          background: -webkit-linear-gradient(left, #f5870c 0%,#e42827 100%); /* Chrome10-25,Safari5.1-6 */
          background: linear-gradient(to right, #f5870c 0%,#e42827 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5870c', endColorstr='#e42827',GradientType=0 ); /* IE6-9 */
        }
      }
  }
}
</style>
