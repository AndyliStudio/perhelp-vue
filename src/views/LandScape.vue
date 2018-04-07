<template>
  <div class="landscape">
    <div class="landscape-inner">
      <div class="landscape-card" v-for="(item, index) in allWorkers" v-bind:key="index">
        <div class="card-inner">
          <div class="img-container">
            <img v-view="item.avatar" :alt="item.name" />
          </div>
          <div class="card-des">
            <div class="card-des-inner">
              <p class="card-name">{{ item.name }}</p>
              <p class="card-job">{{ item.job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more" @click="loadMore">
      <icon name="angle-double-down" scale="3.5"></icon>
      <br />
      <span>{{ $t("landscape.loadMore") }}</span>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

// GraphQL query
const workerQuery = gql`
  query allWorkers {
    allWorkers {
      id
      name
      job
      avatar
    }
  }
`

export default {
  data () {
    return {
      loading: false,
      allWorkers: []
    }
  },
  // Apollo GraphQL
  apollo: {
    allWorkers: {
      query: workerQuery,
      loadingKey: 'loading'
    }
  },
  methods: {
    getData () {

    },
    loadMore () {

    }
  }
}
</script>

<style lang="scss" scoped>
.landscape {
  max-width: 1100px;
  margin: 0 auto;
  .landscape-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    align-content: space-between;
    .landscape-card {
      box-sizing: border-box;
      flex: 0 0 25%;
      text-align: center;
      margin-top: 30px;
      cursor: pointer;
      .card-inner {
        display: inline-block;
        border-radius: 6px;
        overflow: hidden;
        background: #f1f2f4;
      }
      .img-container {
        width: 100%;
        height: 230px;
        background: #cccccc;
        overflow: hidden;
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      .card-des {
        display: table;
        padding-left: 15px;
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        .card-des-inner {
          display: table-cell;
          vertical-align: middle;
        }
      }
      .card-name, .card-job {
        color: #333;
        line-height: 1.6em;
        margin: 0;
        padding: 0;
        text-align: left;
      }
    }
  }
  .load-more {
    color: #ffffff;
    text-align: center;
    width: 100px;
    margin: 40px auto;
    cursor: pointer;
    .fa-icon {
      color: #72f0ff;
    }
  }
}
</style>
