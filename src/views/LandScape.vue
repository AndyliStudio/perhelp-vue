<template>
  <div class="landscape">
    <div class="landscape-inner">
      <div class="landscape-card" v-for="(item, index) in peoples" v-bind:key="index">
        <div class="card-inner">
          <img :src="item.img" alt="" />
          <div class="card-des">
            <div class="card-des-inner">
              <p class="card-name">{{ item.name }}</p>
              <p class="card-job">{{ item.job }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      peoples: [
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'AAA', job: 'Graphic Designer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'BBB', job: 'FrontEnd Engineer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'CCC', job: 'Graphic Designer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'DDD', job: 'FrontEnd Engineer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'EEE', job: 'Graphic Designer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'FFF', job: 'FrontEnd Engineer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'GGG', job: 'Graphic Designer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'HHH', job: 'FrontEnd Engineer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'HHH', job: 'FrontEnd Engineer', checked: true },
        { img: 'https://dummyimage.com/220x230/50B347/FFF&text=Mock.js', name: 'HHH', job: 'FrontEnd Engineer', checked: true }
      ]
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
      .card-inner {
        display: inline-block;
        border-radius: 6px;
        overflow: hidden;
        background: #f1f2f4;
      }
      .card-des {
        display: table;
        padding-left: 20px;
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
        padding-left: 10px;
      }
    }
  }
}
</style>
