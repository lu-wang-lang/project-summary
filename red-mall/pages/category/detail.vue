<template>
  <view class="good-detail-container">
    <view class="main-container">
      <view class="tab-container">
        <view
          class="tab-item"
          v-for="(tab, index) of tabs"
          :key="index"
          :class="selectedTabIndex === index ? 'tab active' : 'tab'"
          @click="handleTab(index)"
        >
          <view>{{ tab }}</view>
          <view class="line"></view>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="svg-container">
        <view class="share">
          <image :src="shareImg" class="share-img"></image>
          <view>分享</view>
        </view>
        <view class="cart">
          <image :src="cartImg" class="cart-img"></image>
          <view>购物车</view>
        </view>
      </view>
      <view class="btn-container">
        <view class="cart-btn btn">加入购物车</view>
        <view class="buy-btn btn">立即购买</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'GoodDetail',
  data () {
    return {
      shareImg: require("../../assets/images/md-launch.svg"),
      cartImg: require("../../assets/images/bottom-cart.svg"),
      tabs: ["基本信息", "图文详情"],
      selectedTabIndex: 0,
    }
  },
  methods: {
    handleTab (index) {
      this.selectedTabIndex = this.selectedTabIndex == index ? this.selectedTabIndex : index;
    }
  }
}
</script>

<style lang="scss">
.good-detail-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .main-container {
    width: 100%;
    flex: 1;
    overflow-y: auto;
    .tab-container {
      width: 100%;
      height: 80upx;
      display: flex;
      border-bottom: 1px solid #eee;
      .tab {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: $font-base;
        color: #101010;
        margin-top: 20upx;
        transition: all 0.3s;
        .line {
          width: 68upx;
          height: 6upx;
          background: transparent;
          margin-top: 10upx;
          transition: all 0.3s;
        }
      }
      .active {
        color: $theme-color;
        transition: all 0.3s;
        .line {
          background: $theme-color;
          transition: all 0.3s;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 100upx;
    border: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0upx 24upx;
    box-sizing: border-box;
    .svg-container {
      display: flex;
      align-items: center;
      height: 100%;
      .share,
      .cart {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: $font-sm;
        color: #101010;
        .share-img,
        .cart-img {
          width: 48upx;
          height: 48upx;
        }
      }
      .cart {
        margin: 0upx 50upx;
      }
    }
    .btn-container {
      display: flex;
      align-items: center;
      .btn {
        width: 220upx;
        height: 80upx;
        border-radius: 40upx;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: $font-base;
      }
      .cart-btn {
        background: #fbab07;
        margin-right: 18upx;
      }
      .buy-btn {
        background: $theme-color;
      }
    }
  }
}
</style>