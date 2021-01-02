<template>
  <view class="order-container">
    <view class="search-container">
      <image class="search-img" :src="searchImg"></image>
      <input
        class="search"
        confirm-type="search"
        placeholder="商品名称（仅支持三个月以内的订单）"
      />
    </view>
    <view class="tabs-container">
      <view
        :class="selectedIndex === index ? 'tab-item active' : 'tab-item'"
        v-for="(tab, index) of tabList"
        :key="index"
        @click="handleTab(index)"
      >
        <view>{{ tab.title }}</view>
        <view class="line"></view>
      </view>
    </view>
    <view class="order-main-container" v-if="!isEmpty">
      <view class="order-item"></view>
    </view>
    <view class="order-main-container-empty" v-else>
      <image :src="emptyImg" class="empty-img"></image>
      <view>您还没有相关订单了</view>
      <view class="go-shopping-btn" @click="goShopping">去购物</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      searchImg: require("../../assets/images/mb-search.svg"),
      selectedIndex: 0,
      tabList: [{
        type: 'total',
        title: '全部',
      }, {
        type: 'notPay',
        title: '待付款',
      }, {
        type: 'notReceive',
        title: '待提货',
      }, {
        type: 'finished',
        title: '已提货',
      }],
      orderList: [{
        type: 'notPay',
      }, {
        type: 'notReceive',
      }, {
        type: 'finished',
      }, {
        type: 'finished',
      }, {
        type: 'closed',
      }],
      isEmpty: true,
      emptyImg: require("../../assets/images/logo.png")
    }
  },
  methods: {
    handleSearch () { },
    handleTab (index) {
      this.selectedIndex = index
    },
    goShopping () {
      uni.switchTab({
        url: '/pages/homePage/index'
      })
    },
  },
  onLoad (options) {
    switch (options.type) {
      case 'total':
        this.selectedIndex = 0
        break;
      case 'notPay':
        this.selectedIndex = 1
        break;
      case 'notReceive':
        this.selectedIndex = 2
        break;
      case 'finished':
        this.selectedIndex = 3
        break;
      default:
        this.selectedIndex = 0
        break;
    }
  }
}
</script>

<style lang="scss">
.order-container {
  width: 100vw;
  height: 100vh;
  background: $grey-bg;
  .search-container {
    width: 100%;
    padding-top: 24upx;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    .search-img {
      width: 42upx;
      height: 42upx;
      position: absolute;
      left: 38upx;
      top: 38upx;
    }
    .search {
      width: 704upx;
      height: 68upx;
      padding-left: 70upx;
      padding-right: 18upx;
      box-sizing: border-box;
      border-radius: 34upx;
      color: rgba(136, 136, 136, 1);
      background: rgba(136, 136, 136, 0.1);
    }
  }
  .tabs-container {
    width: 100%;
    height: 108upx;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: white;
    .tab-item {
      width: 84upx;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: $font-base;
      color: rgba(16, 16, 16, 1);
      .line {
        width: 32upx;
        height: 6upx;
        background: transparent;
        margin-top: 10upx;
      }
    }
    .active {
      color: $theme-color;
      .line {
        background: $theme-color;
      }
    }
  }
  .order-main-container {
    width: 100%;
    padding: 0upx 14upx;
    box-sizing: border-box;
    margin-top: 26upx;
    .order-item {
      width: 100%;
      height: 420upx;
      background: white;
      margin-bottom: 18upx;
      border-radius: 16upx;
    }
  }
  .order-main-container-empty {
    width: 100%;
    padding: 0upx 14upx;
    box-sizing: border-box;
    margin-top: 26upx;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 216upx;
    color: rgba(16, 16, 16, 0.57);
    font-size: $font-base;
    .empty-img {
      width: 290upx;
      height: 290upx;
      margin-bottom: 30upx;
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
}
</style>