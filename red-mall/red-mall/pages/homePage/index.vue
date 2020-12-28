<template>
  <view class="home-page-container">
    <view class="top-container">
      <view class="title-image-container">
        <image class="top" :src="leftTopImg"></image>
        <view class="bottom">
          <image class="bottom-left" :src="leftBottomImg"></image>
          <view class="bottom-right-cntainer">
            <image class="live-img" :src="liveImg"></image>
            <text>直播ing</text>
          </view>
        </view>
      </view>
      <view class="search" @click="handleSearch">
        <image class="search-img" :src="searchImg"></image>
        <text class="placeholder">搜索商品 - 好货等你</text>
      </view>
    </view>
    <view class="background-bg"></view>
    <view class="swiper-container">
      <image class="swiper-img" :src="swiperImg"></image>
    </view>
  </view>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      leftTopImg: require("../../assets/images/eat-good.png"),
      leftBottomImg: require("../../assets/images/eat-good-long.png"),
      liveImg: require("../../assets/images/live.svg"),
      searchImg: require("../../assets/images/mb-search.svg"),
      swiperImg:require("../../assets/images/swiper-img.png")
    };
  },
  methods: {
    handleSearch() {
      uni.navigateTo({
        url: `/pages/index/index`,
      });
    },
  },
};
</script>

<style lang="scss">
.home-page-container {
  position: relative;
  .top-container {
    width: 100%;
    padding: 60upx 0upx 20upx;
    background: rgba(250, 79, 81, 1);
    .title-image-container {
      width: 100%;
      height: 152upx;
      padding-left: 34upx;
      box-sizing: border-box;
      .top {
        width: 242upx;
        height: 68upx;
        margin-left: 20upx;
      }
      .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .bottom-left {
          width: 376upx;
          height: 64upx;
        }
        .bottom-right-cntainer {
          width: 160upx;
          height: 60upx;
          border: 2upx solid white;
          border-right: none;
          border-top-left-radius: 30upx;
          border-bottom-left-radius: 30upx;
          font-size: $font-sm;
          color: white;
          padding-left: 20upx;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          .live-img {
            width: 30upx;
            height: 30upx;
            margin-right: 10upx;
          }
        }
      }
    }
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
  .background-bg {
    position: absolute;
    width: 100%;
    height: 416upx;
    background: rgba(250, 79, 81, 1);
    top: 148upx;
    z-index: -99;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
  }
  .swiper-container{
    width: 704upx;
    height: 320upx;
    border-radius: 16upx;
    margin: 0upx auto;
    .swiper-img{
      width: 100%;
      height: 100%;
      border-radius: 16upx;
    }
  }
}
</style>
