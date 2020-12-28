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
    <swiper
      class="swiper-container"
      v-if="bannerList.length"
      :indicator-dots="indicatorDots"
      indicator-color="#C8C5E1"
      indicator-active-color="#fff"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
      :circular="true"
    >
      <swiper-item
        v-for="(item, index) in bannerList"
        :key="index"
        @click="goBannerDetail(item, true)"
        class="swiper-item"
      >
        <image class="swiper-img" :src="item.image"></image>
      </swiper-item>
    </swiper>
    <swiper class="module-block-container" v-if="blockList.length">
      <swiper-item v-for="(blocks, idx) in blockList" :key="idx">
        <view class="module-block">
          <view class="block-item" v-for="(item, index) of blocks" :key="index">
            <view class="img-container">
              <image class="block-img" :src="item.image"></image>
            </view>
            <view>{{ item.title }}</view>
          </view>
        </view>
      </swiper-item>
    </swiper>
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
      bannerList: [
        {
          id: 1,
          image: require("../../assets/images/swiper1.png"),
        },
        {
          id: 2,
          image: require("../../assets/images/swiper2.png"),
        },
        {
          id: 3,
          image: require("../../assets/images/swiper3.png"),
        },
      ],
      indicatorDots: true, // 显示面板指示点
      autoplay: true, // 自动播放
      interval: 2000, // 自动切换间隔
      duration: 500, // 滑动时长
      // blockInterval: 5000,
      blockList: [
        [
          {
            id: 1,
            title: "今日新品",
            image: require("../../assets/images/block3.png"),
          },
          {
            id: 2,
            title: "水果区",
            image: require("../../assets/images/block4.png"),
          },
          {
            id: 3,
            title: "蔬菜区",
            image: require("../../assets/images/block5.png"),
          },
          {
            id: 4,
            title: "水产区",
            image: require("../../assets/images/block6.png"),
          },
          {
            id: 5,
            title: "肉类区",
            image: require("../../assets/images/block7.png"),
          },
          {
            id: 6,
            title: "蛋类区",
            image: require("../../assets/images/block5.png"),
          },
          {
            id: 7,
            title: "豆制区",
            image: require("../../assets/images/block4.png"),
          },
          {
            id: 8,
            title: "生鲜区",
            image: require("../../assets/images/block3.png"),
          },
          {
            id: 9,
            title: "水产区",
            image: require("../../assets/images/block7.png"),
          },
          {
            id: 10,
            title: "蔬菜区",
            image: require("../../assets/images/block6.png"),
          },
        ],
        [
          {
            id: 1,
            title: "今日新品",
            image: require("../../assets/images/block3.png"),
          },
          {
            id: 2,
            title: "水果区",
            image: require("../../assets/images/block4.png"),
          },
          {
            id: 3,
            title: "蔬菜区",
            image: require("../../assets/images/block5.png"),
          },
          {
            id: 4,
            title: "水产区",
            image: require("../../assets/images/block6.png"),
          },
        ],
      ],
    };
  },
  methods: {
    handleSearch() {
      uni.navigateTo({
        url: `/pages/index/index`,
      });
    },
    goBannerDetail() {
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
  .swiper-container {
    width: 704upx;
    height: 320upx;
    border-radius: 16upx;
    margin: 0upx auto;
    overflow: hidden;
    .swiper-item {
      border-radius: 16upx;
      .swiper-img {
        width: 100%;
        height: 100%;
        border-radius: 16upx;
      }
    }
  }
  .module-block-container {
    width: 100%;
    height: 426upx;
    padding: 30upx 26upx;
    box-sizing: border-box;
    .module-block {
      widows: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .block-item {
        width: calc((100% - 144upx) / 4);
        height: 162upx;
        display: flex;
        flex-direction: column;
        align-items: center;
        .img-container {
          width: 114upx;
          height: 114upx;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 18upx;
          .block-img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
