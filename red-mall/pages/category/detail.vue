<template>
  <view class="good-detail-container">
    <view class="main-container">
      <view
        class="tab-container"
        :style="
          isShowTab
            ? 'opacity:1;transition: all 0.3s;'
            : 'opacity:0;transition: all 0.3s;'
        "
      >
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
      <scroll-view :scroll-y="true" class="main-content" @scroll="handleScroll">
        <view class="good-img-container">
          <image :src="goodsImg" class="good-img"></image>
          <view class="price-container">
            <view class="price">
              <text>￥</text>
              <text class="price-text">28.8</text>
            </view>
            <view class="time-container">
              <view class="time-desc">距离本场结束还剩</view>
              <view class="time-btn">01:41:01</view>
            </view>
          </view>
          <view class="good-title-container">
            <view class="top"></view>
            <view class="bottom"></view>
          </view>
        </view>
      </scroll-view>
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
      isShowTab: false,
      goodsImg: require('../../assets/images/good.png')
    }
  },
  methods: {
    handleTab (index) {
      this.selectedTabIndex = this.selectedTabIndex == index ? this.selectedTabIndex : index;
    },
    handleScroll (e) {
      this.isShowTab = e.detail.scrollTop > 10
    },
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
    background: #bbb;
    .tab-container {
      width: 100%;
      height: 80upx;
      display: flex;
      border-bottom: 1px solid #eee;
      opacity: 0;
      transition: all 0.3s;
      position: fixed;
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
    .main-content {
      height: 100%;
      .good-img-container {
        width: 100%;
        background: white;
        .good-img {
          width: 100%;
          height: 750upx;
        }
        .price-container {
          height: 142upx;
          background: $theme-color;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0upx 50upx;
          .price {
            color: white;
            font-size: $font-sm;
            display: flex;
            align-items: flex-end;
            font-weight: bold;
            .price-text {
              font-size: $font-lg;
            }
          }
          .time-container {
            display: flex;
            flex-direction: column;
            color: white;
            width: 276upx;
            align-items: center;
            justify-content: center;
            .time-desc {
              font-size: $font-base;
              line-height: 1.8;
            }
            .time-btn {
              width: 100%;
              height: 58upx;
              border-radius: 29upx;
              display: flex;
              align-items: center;
              justify-content: center;
              background: white;
              color: $theme-color;
              font-size: $font-lg;
            }
          }
        }
        .good-title-container {
          width: 100%;
          height: 184upx;
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