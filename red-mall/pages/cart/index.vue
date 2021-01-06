<template>
  <view class="cart-container">
    <view class="address">这里是地址定位</view>
    <view class="goods-container"></view>
    <view class="footer">
      <label class="radio" @click="handleChangeAll">
        <radio
          value="r2"
          color="#D93025"
          style="transform: scale(0.7)"
          :checked="isSelectedAll"
        />全选
      </label>
      <view class="price-container">
        合计：
        <text class="price">￥{{totalPrice}}</text>
      </view>
      <button class="buy-btn">
        去结算
        <text v-if="shoppingList.length > 0">（{{ shoppingList.length }}）</text>
      </button>
    </view>
  </view>
</template>
<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      isSelectedAll: false,
      shoppingList: [],
      totalPrice:0,
    };
  },
  methods: {
    handleChangeAll() {
      this.isSelectedAll = !this.isSelectedAll;
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: $grey-bg;
  display: flex;
  flex-direction: column;
  .address {
    width: 100%;
    height: 80upx;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-base;
    color: rgba(16, 16, 16, 0.8);
  }
  .goods-container {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    margin: 18upx auto;
  }
  .footer {
    width: 100%;
    height: 120upx;
    display: flex;
    align-items: center;
    background: white;
    padding: 0upx 32upx;
    box-sizing: border-box;
    .radio {
      display: flex;
      align-items: center;
      // color:rgba(144, 144, 144, 1);
      font-size: $font-base;
    }
    .price-container {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 20upx;
      box-sizing: border-box;
      color:rgba(16, 16, 16, 0.64);
      font-size: $font-base;
      font-weight: bold;
      .price{
        color: $theme-color;
      }
    }
    .buy-btn {
      width: 220upx;
      height: 80upx;
      border-radius: 40upx;
      background: $theme-color;
      color: white;
      font-size: $font-base;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
