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
    <view class="main-wrapper">
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
            <view
              class="block-item"
              v-for="(item, index) of blocks"
              :key="index"
            >
              <view class="img-container">
                <image class="block-img" :src="item.image"></image>
              </view>
              <view>{{ item.title }}</view>
            </view>
          </view>
        </swiper-item>
      </swiper>
      <view class="goods-container">
        <view
          class="good-item-container"
          v-for="(good, index) of goodsList"
          :key="index"
        >
          <view v-if="good.isNormal" class="good-item out-line">
            <image class="good-img" :src="good.image"></image>
            <view class="title" v-html="good.title"></view>
            <view class="time">提货时间：{{ good.time }}</view>
            <view class="bottom">
              <view class="price"
                >￥<text class="price-text">{{ good.price }}</text></view
              >
              <view class="sale">已售{{ good.saleCount }}</view>
              <view class="cart" @click="addCart(good)">加入购物车</view>
            </view>
          </view>
          <view v-else class="other-item">
            <view class="title-container">
              <view class="line-container">
                <view class="sm"></view>
                <view class="mid"></view>
                <view class="big"></view>
              </view>
              <image class="title-img" :src="titleImg"></image>
              <view class="line-container">
                <view class="big"></view>
                <view class="mid"></view>
                <view class="sm"></view>
              </view>
            </view>
            <view class="other-container">
              <view class="left out-line">
                <view class="title">肉食联盟</view>
                <view class="category">
                  <text class="meat-item">猪肉</text>
                  <text class="meat-item">牛肉</text>
                  <text class="meat-item">羊肉...</text>
                </view>
                <view class="price">
                  <text>都是最</text><text style="color: #ec0d0d">低价</text>
                </view>
                <image class="meat-img" :src="meatImg"></image>
                <view class="go-button">GO>></view>
              </view>
              <view class="right">
                <view class="right-top out-line">
                  <view class="top"
                    ><text>家常蔬菜</text><text>惊爆价</text></view
                  >
                  <view class="middle">
                    <view class="middle-left">
                      <view class="price">
                        <text>低至</text>
                        <text class="price-text">1.99</text>
                        <text>元起</text>
                      </view>
                      <view class="go-button">GO>></view>
                    </view>
                    <view class="middle-right">
                      <image
                        class="vegetables-img"
                        :src="vegetablesImg"
                      ></image>
                    </view>
                  </view>
                </view>
                <view class="right-bottom out-line">
                  <view class="top"
                    ><text>必备水果</text><text>惊爆价</text></view
                  >
                  <view class="middle">
                    <view class="middle-left">
                      <view class="price">
                        <text>低至</text>
                        <text class="price-text">0.99</text>
                        <text>元起</text>
                      </view>
                      <view class="go-button">GO>></view>
                    </view>
                    <view class="middle-right">
                      <image class="vegetables-img" :src="fruitImg"></image>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <view class="not-sign-container">
        <view class="sign-left">
          <image class="close-img" :src="closeImg"></image>
          <text>登录抢爆款商品</text>
        </view>
        <view class="sign-right">立即登录</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "HomePage",
  data () {
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
      titleImg: require("../../assets/images/everyday-select.png"),
      goodsList: [
        {
          isNormal: true,
          id: 1,
          image: "../../assets/images/swiper1.png",
          title: "语农 散装土鸡蛋  360枚 40斤",
          time: "08月13日",
          price: "28.8",
          saleCount: 2700,
        },
        {
          isNormal: false,
          id: 2,
        },
        {
          isNormal: true,
          id: 3,
          image: "../../assets/images/swiper2.png",
          title: "新鲜现摘白菜  25千克",
          time: "08月13日",
          price: "38",
          saleCount: 1466,
        },
        {
          isNormal: true,
          id: 3,
          image: "../../assets/images/swiper1.png",
          title: "超白超白洗衣粉  500g 1袋",
          time: "08月13日",
          price: "9.9",
          saleCount: 1466,
        },
        {
          isNormal: true,
          id: 4,
          image: "../../assets/images/swiper3.png",
          title: "超白超白洗衣粉  500g 1袋",
          time: "08月13日",
          price: "9.9",
          saleCount: 1466,
        },
      ],
      meatImg: require("../../assets/images/meat.gif"),
      vegetablesImg: require("../../assets/images/vegetables.png"),
      fruitImg: require("../../assets/images/fruit.png"),
      closeImg: require("../../assets/images/md-off.svg"),
    };
  },
  methods: {
    handleSearch () {
      uni.navigateTo({
        url: `/pages/index/index`,
      });
    },
    goBannerDetail () {
      uni.navigateTo({
        url: `/pages/index/index`,
      });
    },
    addCart (good) { },
  },
};
</script>

<style lang="scss">
.home-page-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  .top-container {
    width: 100%;
    height: 240upx;
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
  .main-wrapper {
    flex: 1;
    overflow-y: auto;
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
      background: white;
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
    .goods-container {
      width: 100%;
      padding: 20upx;
      padding-top: 0upx;
      box-sizing: border-box;
      background: white;
      .good-item-container {
        width: 100%;
        .good-item {
          width: 100%;
          height: 570upx;
          .good-img {
            width: 100%;
            height: 328upx;
            border-radius: 8upx;
          }
          .title {
            font-size: $font-lg;
            color: #000;
            margin: 20upx 0upx 14upx;
            font-weight: bold;
          }
          .time {
            font-size: 26upx;
            color: #000;
            margin-bottom: 14upx;
          }
          .bottom {
            display: flex;
            align-items: flex-end;
            position: relative;
            .price {
              color: #ec0d0d;
              font-size: $font-sm;
              margin-right: 40upx;
              .price-text {
                font-size: $font-lg;
                font-weight: bold;
              }
            }
            .sale {
              font-size: $font-base;
              color: rgba(0, 0, 0, 0.54);
            }
            .cart {
              position: absolute;
              right: 32upx;
              top: -6upx;
              width: 208upx;
              height: 60upx;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              background: #ec0d0d;
              font-size: $font-base;
              border-radius: 30upx;
            }
          }
        }
        .other-item {
          width: 100%;
          display: flex;
          flex-direction: column;
          .title-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-bottom: 20upx;
            .line-container {
              width: 52upx;
              height: 32upx;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin: 0upx 20upx;
              .sm {
                width: 8upx;
                height: 16upx;
                background: #fa4f51;
                opacity: 0.4;
                border-radius: 2px;
              }
              .mid {
                width: 8upx;
                height: 24upx;
                background: #fa4f51;
                opacity: 0.8;
                border-radius: 2px;
              }
              .big {
                width: 8upx;
                height: 32upx;
                background: #fa4f51;
                border-radius: 2px;
              }
            }
            .title-img {
              width: 284upx;
              height: 60upx;
            }
          }
          .other-container {
            width: 100%;
            height: 430upx;
            display: flex;
            justify-content: space-between;
            .left {
              width: calc((100% - 18upx) / 2);
              height: 100%;
              position: relative;
              .title {
                font-size: $font-lg;
                font-weight: bold;
                color: #101010;
                margin-bottom: 24upx;
              }
              .category {
                font-size: 26upx;
                font-weight: bold;
                color: #101010;
                margin-bottom: 20upx;
                .meat-item {
                  margin-right: 10upx;
                }
              }
              .price {
                font-size: 26upx;
                font-weight: bold;
                color: #101010;
              }
              .meat-img {
                width: 100%;
                height: 218upx;
                border-radius: 16upx;
                margin-top: 24upx;
              }
              .go-button {
                width: 110upx;
                height: 40upx;
                position: absolute;
                right: 10%;
                top: 140upx;
                background: #fbd841;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: $font-base;
                border-radius: 20upx;
              }
            }
            .right {
              width: calc((100% - 18upx) / 2);
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              .right-top,
              .right-bottom {
                position: relative;
                width: 100%;
                height: calc((100% - 12upx) / 2);
                .top {
                  font-size: $font-lg;
                  font-weight: bold;
                  color: #101010;
                  margin-bottom: 24upx;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }
                .middle {
                  display: flex;
                  justify-content: space-between;
                  .middle-left {
                    flex: 1;
                    .price {
                      font-size: 26upx;
                      font-weight: bold;
                      color: #101010;
                      margin-bottom: 24upx;
                      .price-text {
                        font-size: $font-lg;
                        color: #ec0d0d;
                      }
                    }
                    .go-button {
                      width: 110upx;
                      height: 40upx;
                      position: absolute;
                      top: 140upx;
                      background: #fbd841;
                      color: white;
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      font-size: $font-base;
                      border-radius: 20upx;
                    }
                  }
                  .middle-right {
                    width: 140upx;
                    height: 110upx;
                    border-radius: 8upx;
                    overflow: hidden;
                    .vegetables-img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .good-item-container {
        margin-bottom: 40upx;
      }
    }
    .not-sign-container {
      width: 700upx;
      height: 70upx;
      margin: 0upx auto;
      border-radius: 35upx;
      background: rgba(16, 16, 16, 0.7);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0upx 24upx;
      box-sizing: border-box;
      margin-bottom: 40upx;
      .sign-left {
        color: white;
        font-size: $font-base;
        display: flex;
        align-items: center;
        .close-img {
          width: 46upx;
          height: 46upx;
          margin-right: 16upx;
        }
      }
      .sign-right {
        width: 170upx;
        height: 44upx;
        border-radius: 22upx;
        color: white;
        background: #ec0d0d;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: $font-sm;
      }
    }
  }
}
</style>
