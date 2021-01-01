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
    <view class="address-detail-container"></view>
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
      }]
    }
  },
  methods: {
    goShopping () {
      uni.switchTab({
        url: `/pages/homePage/index`,
      });
    }
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
            border: 1px solid white;
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
          border: 1px solid $theme-color;
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