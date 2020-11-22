<template>
  <div class="home">
    <div class="summary">
      <div class="title">营收概况</div>
      <div class="container">
        <div class="order"
             :style="'background:'+order.background"
             :title="order.number"
             v-for="(order,index) of orderList"
             :key="index">
          <div class="order-img">
            <img :src="order.imgSrc" />
          </div>
          <div class="order-desc-cnotainer">
            <div class="order-desc">{{order.title}}</div>
            <count-to :startVal='0'
                      :endVal='order.number'
                      :duration='3000'
                      :prefix="order.prefix"
                      :suffix="order.suffix"
                      :decimals="order.decimals"
                      class="order-number"
                      :autoplay="true"></count-to>
          </div>
        </div>
      </div>
    </div>
    <div class="todo-events">
      <div class="title">待办事项</div>
      <div class="container">
        <div class="event-container"
             v-for="(event,index) of eventList"
             :key="index">
          <div class="event-wrap">
            <div class="event-img"
                 :style="'background:'+event.background">
              <img :src="event.imgSrc">
            </div>
            <div class="event-desc-container">
              <count-to :startVal='0'
                        :endVal='event.number'
                        :duration='3000'
                        :suffix="'个'"
                        class="event-number"
                        :autoplay="true"></count-to>
              <div class="event-desc">{{event.title}}</div>
            </div>
          </div>
          <div class="event-line"
               v-if="index!==2"></div>
        </div>
      </div>
    </div>
    <div class="static">
      <div class="title">营收统计</div>
      <div class="container">
        <line-stack :yAxisName="staticData.yAxisName"
                    :xAxis="staticData.xAxis"
                    :legend="staticData.legend"
                    :data="staticData.data"></line-stack>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';  //https://www.cnblogs.com/tuspring/p/9801603.html
import LineStack from '../components/echart/line-stack'
import util from '../utils/index.js'
export default {
  name: 'Home',
  components: {
    countTo,
    LineStack,
  },
  data () {
    return {
      orderList: [{
        imgSrc: require('../assets/images/order-today.svg'),
        title: '今日订单收入',
        number: 6666.66,
        background: '#ff7970',
        prefix: '￥',
        suffix: '',
        decimals: 2
      }, {
        imgSrc: require('../assets/images/order-7.svg'),
        title: '今日订单数量',
        number: 66,
        background: '#FFD344',
        prefix: '',
        suffix: '个',
        decimals: 0
      }, {
        imgSrc: require('../assets/images/order-today.svg'),
        title: '7日内订单收入',
        number: 6666.66,
        background: '#4FCCB0',
        prefix: '￥',
        suffix: '',
        decimals: 2
      }, {
        imgSrc: require('../assets/images/order-7.svg'),
        title: '7日内订单数量',
        number: 789,
        background: '#648CFF',
        prefix: '',
        suffix: '个',
        decimals: 0
      }],
      eventList: [{
        title: '待付款订单',
        imgSrc: require('../assets/images/antOutline-pay-circle.svg'),
        background: '#F4C735',
        number: 50
      }, {
        title: '待确认订单',
        imgSrc: require('../assets/images/antOutline-check-circle.svg'),
        background: '#05ABED',
        number: 25
      }, {
        title: '待处理退款',
        imgSrc: require('../assets/images/antOutline-money-collect.svg'),
        background: '#F44235',
        number: 10
      }],
      staticData: {
        yAxisName: '（元）',
        legend: ['订单总数', '订单总额'],
        xAxis: [],
        data: [{
          name: '订单总数',
          type: 'line',
          data: []
        }, {
          name: '订单总额',
          type: 'line',
          data: []
        }]
      }
    }
  },
  mounted () {
    this.staticData.xAxis = util.getDate()
    for (let i = 0; i < this.staticData.xAxis.length; i++) {
      this.staticData.data[0].data.push(util.getRadom(0, 9))
      this.staticData.data[1].data.push(util.getRadom(0, 9))
    }
  }
}
</script>

<style scoped lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  .summary,
  .todo-events,
  .static {
    width: 100%;
    height: 206px; //45px
    background: white;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .todo-events {
    height: 206px;
  }
  .static {
    height: 469px;
  }
  .title {
    width: 100%;
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
  }
  .container {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
  .order {
    width: calc((100% - 60px) / 4);
    display: flex;
    align-items: center;
    margin-right: 20px;
    border-radius: 5px;
    color: white;
    padding: 30px;
    .order-img {
      width: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    .order-desc-cnotainer {
      flex: 1;
      display: flex;
      flex-direction: column;
      font-weight: 700;
      line-height: 1.5;
      font-size: 24px;
      .order-desc {
        font-size: 14px;
        font-weight: normal;
      }
    }
  }
  .order:last-child {
    margin-right: 0px;
  }

  .event-container {
    width: calc(100% / 3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .event-wrap {
      display: flex;
      align-items: center;
      padding: 25px 40px;
      .event-img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
      }
      .event-desc-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.5;
      }
      .event-desc {
        font-size: 14px;
        font-weight: normal;
      }
    }
    .event-line {
      width: 1px;
      height: 50px;
      background: #d3d3d3;
      position: absolute;
      right: 0px;
    }
  }
}
</style>