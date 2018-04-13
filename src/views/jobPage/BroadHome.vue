<template>
  <div class="Mangement-home">
    <ul>
      <li>
        <!-- 标题 -->
        <div class="box-header" >
          <span class="title" >{{ $t('broadHome.name') }}</span>
          <span class="line" ></span>
        </div>
        <!-- 列表盒子 -->
        <div class="box-container" >
          <subBox style="margin-bottom:28px;" v-for="(item,index) in sendTask" :key="index" :title="item.title" :label="item.label" @click.native="BoxSelected(item)" :dataSmall="item.data"   @myselect="selected" ></subBox>
          <div class="ychz" v-for="(item, index) in ychzTask" :key="index" ></div>
        </div>
      </li>
    </ul>
    <div class="more" @click="mores">
      <icon class="fal" name="plus" ></icon>
    </div>
  </div>
</template>

<script>
import subBox from '../../components/management/subBox.vue'

export default {
  data () {
    return {
      sendTask: [
        {
          title: '裁衣服广告 ,poster logo， banner 制作-1',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c'],
          team: 'iGrament HingKong Limited 1 哈哈',
          position: 'Graphic Designer',
          term: '(short term)',
          logoUrl: 'http://iph.href.lu/200x200?text=logo&bg=fff',
          task: 'No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          details: ' No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          skills: ['No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.'],
          logoImgs: ['http://iph.href.lu/370x370?text=logo&bg=b9b9b9', 'http://iph.href.lu/370x370?text=logo&bg=3e3e3e']
        }
        // {
        //   title: '裁衣服广告 ,poster logo， banner 制作-2',
        //   label: 'ABC 90\'s team',
        //   data: ['w', 'w', 'b', 'b', 'c', 'c'],
        //   team: 'iGrament HingKong Limited 2哈哈',
        //   position: 'Graphic Designer',
        //   term: '(short term)',
        //   logoUrl: 'http://iph.href.lu/200x200?text=logo&bg=fff',
        //   task: 'No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
        //   details: ' No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
        //   skills: ['No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.'],
        //   logoImgs: ['http://iph.href.lu/370x370?text=logo&bg=b9b9b9', 'http://iph.href.lu/370x370?text=logo&bg=3e3e3e']
        // },
        // {
        //   title: '裁衣服广告 ,poster logo， banner 制作-3',
        //   label: 'ABC 90\'s team',
        //   data: ['w', 'w', 'b', 'b', 'c', 'c'],
        //   team: 'iGrament HingKong Limited 3哈哈',
        //   position: 'Graphic Designer',
        //   term: '(short term)',
        //   logoUrl: 'http://iph.href.lu/200x200?text=logo&bg=fff',
        //   task: 'No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
        //   details: ' No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
        //   skills: ['No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.'],
        //   logoImgs: ['http://iph.href.lu/370x370?text=logo&bg=b9b9b9', 'http://iph.href.lu/370x370?text=logo&bg=3e3e3e']
        // },
        // {
        //   title: '裁衣服广告 ,poster logo， banner 制作-4',
        //   label: 'ABC 90\'s team',
        //   data: ['w', 'w', 'b', 'b', 'c', 'c'],
        //   team: 'iGrament HingKong Limited 4哈哈',
        //   position: 'Graphic Designer',
        //   term: '(short term)',
        //   logoUrl: 'http://iph.href.lu/200x200?text=logo&bg=fff',
        //   task: 'No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
        //   details: ' No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
        //   skills: ['No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.'],
        //   logoImgs: ['http://iph.href.lu/370x370?text=logo&bg=b9b9b9', 'http://iph.href.lu/370x370?text=logo&bg=3e3e3e']
        // }
      ],
      ychzTask: [0, 1, 2, 3]
    }
  },
  created () {},
  computed: {

  },
  methods: {
    // 复选框选择事件
    selected (data) {
      const mesg = data ? '选中' : '未选中'
      console.log(mesg)
    },
    // 点击更多 触发的事件
    mores () {
      this.sendTask.unshift(this.sendTask[0])
      // contract 合约  participatesTask 参与任务  sendTask 发出任务
    },
    // 电子盒子触发的事件
    BoxSelected (item) {
      // console.log(item)
      // this.$modal.show('ManagMent', {item})
      // this.$modal.show('PopupReference', {item})
    }
  },
  components: {
    subBox
  }
}
</script>

<style scoped >
  .Mangement-home{
    /* width: 1100px; */
    padding: 0 269px 0 266px;
    background-color: #fff9f9;
  }
  /* .Mangement-home>ul{
    padding: 0;
    margin: 0;
  } */
  .Mangement-home li{
    list-style-type: none;
    /* height: 390px; */
    padding: 28px 0 0 0;
    box-sizing: border-box;
  }
  .box-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }
  .title{
    display: block;
    text-align: left;
    color: #404040;
    font-weight: 800;
    font-size: 16px;
    padding-left: 5px;
    padding-right:18px;
    flex-shrink: 0;
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3), 0 0 0.2em rgba(0, 0, 0, 0.3);
  }
  .line{
    display: block;
    border-top:1px solid #e0e0e0;
    height: 1px;
    width: 100%;
  }
  .box-container{
    /* height: 320px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: hidden;
    padding: 5px 5px 0 5px;
  }
  subBox{
    margin-right: 0;
  }
  .more{
    width: 60px;
    height: 60px;
    position: fixed;
    right: 60px;
    border-radius: 90%;
    bottom: 200px;
    background-color: #cd5d5d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .fa-icon{
    width: 30px;
    height: 30px;
    color: white;
  }
  .ychz{
    width: 227px;
    height: 320px;
    margin-bottom: 28px;
    background: transparent;
  }
</style>
