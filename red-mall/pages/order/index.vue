<template>
  <view class="order-container">
    <view class="search" @click="handleSearch">
      <image class="search-img" :src="searchImg"></image>
      <text class="placeholder">搜索商品 - 好货等你</text>
    </view>
  </view>
</template>

<script>
export default {
  name: 'Order',
  data () {
    return {
      pageType: 'total',
      tabList: [{
        type: 'total',
        title: '全部订单',
      }, {
        type: 'notPay',
        title: '待付款',
      }, {
        type: 'notReceive',
        title: '待提货',
      }, {
        type: 'finished',
        title: '已提货',
      }]
    }
  },
  onLoad (options) {
    this.pageType = options.type ? options.type : 'total'
  }
}
</script>

<style lang="scss">
.order-container {
  width: 100vw;
  height: 100vh;
  .search {
    width: 704upx;
    height: 68upx;
    background: white;
    border-radius: 16upx;
    margin: 18upx auto;
    margin-bottom: 0upx;
    display: flex;
    align-items: center;
    padding: 0upx 18upx;
    color: #828282;
    box-sizing: border-box;
    .search-img {
      width: 42upx;
      height: 42upx;
    }
    .placeholder {
      font-size: $font-base;
      margin-left: 14upx;
    }
  }
}
</style>