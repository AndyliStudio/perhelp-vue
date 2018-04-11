<template>
  <div class="Mangement-home">
    <ul>
      <li>
        <!-- 标题 -->
        <div class="box-header" >
          <span class="title" >{{ $t('ManagementHome.send_task') }}</span>
          <span class="line" ></span>
        </div>
        <!-- 列表盒子 -->
        <div class="box-container" >
          <subBox v-for="(item,index) in sendTask" :key="index" :title="item.title" :label="item.label" @click.native="BoxSelected(item)" :dataSmall="item.data"   @myselect="selected" ></subBox>
          <div v-if="sendTask.length >3" class="more"  @click="mores('sendTask')">
            <icon name="angle-double-right" ></icon>
          </div>
        </div>
      </li>
      <li>
        <!-- 标题 -->
        <div class="box-header" >
          <span class="title"  >{{ $t('ManagementHome.Participates_task') }}</span>
          <span class="line" ></span>
        </div>
        <!-- 列表盒子 -->
        <div class="box-container" >
          <subBox v-for="(item,index) in participatesTask" :key="index" :title="item.title" :label="item.label" @click.native="BoxSelected(item)" :dataSmall="item.data" @myselect="selected" ></subBox>
          <div v-if="participatesTask.length >3" class="more" @click="mores('participatesTask')">
            <icon name="angle-double-right" ></icon>
          </div>
        </div>
      </li>
      <li>
        <!-- 标题 -->
        <div class="box-header" >
          <span class="title" >{{ $t('ManagementHome.contract') }}</span>
          <span class="line" ></span>
        </div>
        <!-- 列表盒子 -->
        <div class="box-container" >
          <subBox v-for="(item,index) in contract" :key="index" :title="item.title" :label="item.label" @click.native="BoxSelected(item)" :dataSmall="item.data" @myselect="selected" ></subBox>
          <div v-if="contract.length >3" class="more" @click="mores('contract')">
            <icon name="angle-double-right" ></icon>
          </div>
        </div>
      </li>
    </ul>
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
        },
        {
          title: '裁衣服广告 ,poster logo， banner 制作-2',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c'],
          team: 'iGrament HingKong Limited 2哈哈',
          position: 'Graphic Designer',
          term: '(short term)',
          logoUrl: 'http://iph.href.lu/200x200?text=logo&bg=fff',
          task: 'No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          details: ' No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          skills: ['No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.'],
          logoImgs: ['http://iph.href.lu/370x370?text=logo&bg=b9b9b9', 'http://iph.href.lu/370x370?text=logo&bg=3e3e3e']
        },
        {
          title: '裁衣服广告 ,poster logo， banner 制作-3',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c'],
          team: 'iGrament HingKong Limited 3哈哈',
          position: 'Graphic Designer',
          term: '(short term)',
          logoUrl: 'http://iph.href.lu/200x200?text=logo&bg=fff',
          task: 'No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          details: ' No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          skills: ['No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.'],
          logoImgs: ['http://iph.href.lu/370x370?text=logo&bg=b9b9b9', 'http://iph.href.lu/370x370?text=logo&bg=3e3e3e']
        },
        {
          title: '裁衣服广告 ,poster logo， banner 制作-4',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c'],
          team: 'iGrament HingKong Limited 4哈哈',
          position: 'Graphic Designer',
          term: '(short term)',
          logoUrl: 'http://iph.href.lu/200x200?text=logo&bg=fff',
          task: 'No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          details: ' No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, you cannot disappear from my world.No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.',
          skills: ['No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.', 'No matter the ending is perfect or not, youcannot disappear from my world.No matter the ending is perfect or not, you cannot disappear frommy world.'],
          logoImgs: ['http://iph.href.lu/370x370?text=logo&bg=b9b9b9', 'http://iph.href.lu/370x370?text=logo&bg=3e3e3e']
        }
      ],
      participatesTask: [
        {
          title: '裁衣服广告 ,poster logo， banner 制作-1',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c']
        },
        {
          title: '裁衣服广告 ,poster logo， banner 制作-2',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c']
        },
        {
          title: '裁衣服广告 ,poster logo， banner 制作-3',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c']
        }
      ],
      contract: [
        {
          title: '裁衣服广告 ,poster logo， banner 制作-1',
          label: 'ABC 90\'s team',
          data: ['w', 'w', 'b', 'b', 'c', 'c']
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    selected (data) {
      const mesg = data ? '选中' : '未选中'
      console.log(mesg)
    },
    mores (data) {
      // contract 合约  participatesTask 参与任务  sendTask 发出任务
    },
    BoxSelected (item) {
      console.log(item)
      // this.$modal.show('ManagMent', {item})
      this.$modal.show('PopupReference', {item})
    }
  },
  components: {
    subBox
  }
}
</script>

<style scoped>
  .Mangement-home{
    width: 1100px;
    margin: 0 auto;
    background-color: white;
    padding-bottom: 150px;
    /* padding-left: 50px; */
    box-sizing: border-box;
  }
  .Mangement-home>ul{
    padding: 0;
    margin: 0;
  }
  .Mangement-home li{
    list-style-type: none;
    height: 390px;
    padding: 28px 0 0 0;
    box-sizing: border-box;
  }
  .box-header{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 24px;
  }
  .title{
    display: block;
    text-align: left;
    color: #404040;
    font-weight: 800;
    font-size: 16px;
    padding-left: 5px;
    padding-right:23px;
    width: 110px;
    min-width: 110px;
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3), 0 0 0.2em rgba(0, 0, 0, 0.3);
  }
  .line{
    display: block;
    border-top:1px solid #e0e0e0;
    height: 1px;
    width: 100%;
  }
  .box-container{
    height: 320px;
    display: flex;
    align-items: center;
  }
  .more{
    margin-left: -16px;
    /* width: 24px; */
    text-align: left;
    line-height: 24px;
    cursor: pointer;
  }
  .fa-icon{
    width: 27px;
    height: 27px;
    text-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3), 0 0 0.2em rgba(0, 0, 0, 0.3);
  }
</style>
