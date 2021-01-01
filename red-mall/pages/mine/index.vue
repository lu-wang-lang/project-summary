<template>
  <view class="mine-container">
    <view class="top-person-container">
      <view class="person-container">
        <view class="left">
          <image :src="person.personImg" class="person-img"></image>
          <view class="person-detail">
            <view class="phone">{{ person.phone }}</view>
            <view class="scroe-container">
              <view class="round">积</view>
              <view class="score-wrapper">积分{{ person.score }}</view>
            </view>
          </view>
        </view>
        <view class="right">
          <text>账号管理</text>
          <image :src="rightCricleImg" class="circle-img"></image>
        </view>
      </view>
      <view class="background-bg">
        <view class="vip-container">
          <View class="left">
            <view class="vip">会员</view>
            <view class="vip-desc">升级会员享更多优惠</view>
          </View>
          <view class="detail-btn">详情</view>
        </view>
      </view>
      <view class="tag-container">
        <view class="tag-item" v-for="(tag, index) of tagList" :key="index">
          <view class="top">
            <image :src="tag.image" class="tag-img"></image>
          </view>
          <view class="bottom">{{ tag.title }}</view>
        </view>
      </view>
    </view>
    <view class="address-detail-container">
      <view class="real-address">
        <view class="left">我的当前自提店</view>
        <view class="right">切换自提店</view>
        <view class="triangle"></view>
      </view>
      <view class="main-address-container">
        <view class="name">{{ shop.name }}</view>
        <view class="evaluate-container">
          <view class="evaluate-item">
            <image :src="comerImg" class="evaluate-img"></image>
            <text>{{ shop.comer }}人来过</text>
          </view>
          <view class="evaluate-item">
            <image :src="supportImg" class="evaluate-img"></image>
            <text>{{ shop.support }}点赞</text>
          </view>
        </view>
        <view class="address">{{ shop.address }}</view>
        <view class="btn-container">
          <view
            :class="selectedTab === 'phone' ? 'phone btn active' : 'phone btn'"
            @click="handleTab('phone')"
            >电话联系门店</view
          >
          <view
            :class="selectedTab === 'map' ? 'btn active' : 'btn'"
            @click="handleTab('map')"
            >导航去门店</view
          >
        </view>
        <view class="tips-container">
          <image :src="vertifyImg" class="vertify-img"></image>
          <view class="main-text"
            >如您购买的商品有任何问题，请直接与购买门店
            联系，门店会为您处理，让您售后无忧</view
          >
        </view>
      </view>
    </view>
    <view class="go-shopping-btn" @click="goShopping">去购物</view>
  </view>
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      rightCricleImg: require("../../assets/images/right-circle.svg"),
      person: {
        personImg: require("../../assets/images/person.png"),
        phone: '146****8006',
        score: 3911,
      },
      tagList: [{
        title: '全部订单',
        image: require("../../assets/images/antFill-bulb.svg")
      }, {
        title: '待付款',
        image: require("../../assets/images/mb-question.svg")
      }, {
        title: '待提货',
        image: require("../../assets/images/info-circle.svg")
      }, {
        title: '已提货',
        image: require("../../assets/images/customer-service.svg")
      }],
      shop: {
        name: '岳麓区梅溪湖街道东方红小区快乐惠店',
        comer: '2.8万',
        support: '17.2万',
        address: '门店地址：湖南省长沙市岳麓区梅西湖街道建顺源9栋2单元',
      },
      comerImg: require("../../assets/images/users.svg"),
      supportImg: require("../../assets/images/thumbs-up.svg"),
      selectedTab: 'phone',
      vertifyImg: require("../../assets/images/verified-user.svg"),
    }
  },
  methods: {
    goShopping () {
      uni.switchTab({
        url: `/pages/homePage/index`,
      });
    },
    handleTab (type) {
      this.selectedTab = type
    },
  }
}
</script>

<style lang="scss">
.mine-container {
  width: 100vw;
  height: 100vh;
  .top-person-container {
    position: relative;
    width: 100%;
    height: 500upx;
    .person-container {
      width: 100%;
      height: 170upx;
      background: $theme-color;
      display: flex;
      align-items: center;
      padding: 0upx 46upx;
      box-sizing: border-box;
      .left {
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        color: white;
        .person-img {
          width: 110upx;
          height: 110upx;
          border-radius: 50%;
          margin-right: 20upx;
        }
        .person-detail {
          display: flex;
          flex-direction: column;
          .phone {
            font-size: $font-lg;
            margin-bottom: 18upx;
          }
          .scroe-container {
            width: 200upx;
            height: 54upx;
            border-radius: 27upx;
            border: 2upx solid white;
            display: flex;
            align-items: center;
            .round {
              width: 48upx;
              height: 48upx;
              border-radius: 50%;
              background: #f09744;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .score-wrapper {
              flex: 1;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 26upx;
            }
          }
        }
      }
      .right {
        width: 150upx;
        display: flex;
        color: white;
        font-size: $font-sm;
        align-items: center;
        justify-content: flex-end;
        .circle-img {
          width: 36upx;
          height: 36upx;
          margin-left: 16upx;
        }
      }
    }
    .background-bg {
      width: 100%;
      height: 116upx;
      background: $theme-color;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      overflow: hidden;
      position: relative;
      z-index: 99;
      .vip-container {
        width: 658upx;
        height: 106upx;
        background: #000;
        border-radius: 16upx;
        position: absolute;
        left: calc((100% - 658upx) / 2);
        top: 30upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0upx 66upx 30upx;
        box-sizing: border-box;
        .left {
          display: flex;
          align-items: center;
          color: #ccc;
          font-size: $font-sm;
          .vip {
            color: #e3c59e;
            font-size: $font-lg;
            margin-right: 30upx;
          }
        }
        .detail-btn {
          width: 142upx;
          height: 42upx;
          color: #8a6032;
          font-size: $font-base;
          background: rgba(252, 211, 175, 1);
          border-radius: 21upx;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .tag-container {
      position: absolute;
      width: 100%;
      height: 250upx;
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
      border-radius: 16upx;
      top: 250upx;
      padding: 50upx 72upx 0upx;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      clear: both;
      .tag-item {
        width: (calc(100% - 43 * 3upx) / 4);
        display: flex;
        flex-direction: column;
        font-size: $font-base;
        color: #101010;
        .top {
          width: 96upx;
          height: 96upx;
          border: 2upx solid $theme-color;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16upx;
          .tag-img {
            width: 48upx;
            height: 48upx;
          }
        }
        .bottom {
          text-align: center;
        }
      }
    }
  }
  .address-detail-container {
    width: calc(100% - 28upx);
    margin: 14upx 14upx 0upx;
    border-top-left-radius: 16upx;
    border-top-right-radius: 16upx;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: $card-box-shadow;
    .real-address {
      width: 100%;
      height: 76upx;
      background-color: rgba(230, 212, 140, 1);
      padding: 0upx 36upx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: $font-base;
      box-sizing: border-box;
      position: relative;
      .left {
        color: rgb(145, 120, 16);
        font-weight: bold;
      }
      .right {
        color: rgba(16, 16, 16, 0.82);
      }
      .triangle {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 18upx solid transparent;
        border-right: 18upx solid transparent;
        border-top: 18upx solid rgba(230, 212, 140, 1);
        top: 76upx;
        left: 50%;
        z-index: 99;
      }
    }
    .main-address-container {
      padding: 0upx 26upx;
      box-sizing: border-box;
      .name {
        color: rgba(16, 16, 16, 1);
        font-size: $font-base;
        font-weight: bold;
        margin-top: 40upx;
        margin-bottom: 28upx;
      }
      .evaluate-container {
        display: flex;
        align-items: center;
        .evaluate-item {
          width: 50%;
          display: flex;
          align-items: center;
          color: rgba(16, 16, 16, 1);
          font-size: $font-sm;
          margin-bottom: 14upx;
          .evaluate-img {
            width: 48upx;
            height: 48upx;
            margin-right: 12upx;
          }
        }
      }
      .address {
        color: rgba(16, 16, 16, 1);
        font-size: $font-base;
        margin-bottom: 34upx;
        line-height: 1.5;
      }
      .btn-container {
        display: flex;
        padding: 0upx 20upx;
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 26upx;
        .btn {
          width: 272upx;
          height: 88upx;
          border-radius: 10upx;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: $font-base;
          color: rgba(16, 16, 16, 0.59);
          border: 4upx solid rgba(16, 16, 16, 0.59);
        }
        .phone {
          margin-right: 112upx;
        }
        .active {
          color: $theme-color;
          border: 4upx solid $theme-color;
        }
      }
      .tips-container {
        display: flex;
        padding: 26upx;
        font-size: 26upx;
        color: rgba(16, 16, 16, 1);
        line-height: 1.5;
        background: rgba(250, 79, 81, 0.22);
        border-radius: 16upx;
        margin-bottom: 60upx;
        .vertify-img {
          width: 48upx;
          height: 48upx;
          margin-right: 20upx;
        }
      }
    }
  }
  .go-shopping-btn {
    width: 598upx;
    height: 76upx;
    background: $theme-color;
    border-radius: 38upx;
    color: white;
    font-size: $font-lg;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 66upx auto;
  }
}
</style>