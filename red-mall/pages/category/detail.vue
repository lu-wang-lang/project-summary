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
          <image :src="goods.goodsImg" class="good-img"></image>
          <view class="price-container">
            <view class="price">
              <text>￥</text>
              <text class="price-text">{{ goods.goodPrice }}</text>
            </view>
            <view class="time-container">
              <view class="time-desc">距离本场结束还剩</view>
              <view class="time-btn">{{ goods.overTime }}</view>
            </view>
          </view>
          <view class="good-title-container">
            <view class="top" v-html="goods.title"></view>
            <view class="bottom">
              <view class="left">提货时间：{{ goods.getTime }}</view>
              <view class="right">
                <uni-number-box :value="goods.count" @change="change" />
              </view>
            </view>
          </view>
        </view>
        <view class="good-detail-container">
          <view class="title-container">
            <text class="dash-line">---------</text>
            <text class="title">商品详情</text>
            <text class="dash-line">---------</text>
          </view>
          <view class="content-desc">
            <view class="row">
              <view class="label">商品名称</view>
              <view class="content" v-html="goods.realName"></view>
            </view>
            <view class="row">
              <view class="label">商品编号</view>
              <view class="content">{{ goods.goodNumber }}</view>
            </view>
            <view class="row">
              <view class="label">上架时间</view>
              <view class="content">{{ goods.saleTime }}</view>
            </view>
            <view class="row">
              <view class="label">类型</view>
              <view class="content">{{ goods.category }}</view>
            </view>
          </view>
        </view>
        <view class="good-pic-container">
          <view class="title-container">
            <text class="dash-line">---------</text>
            <text class="title">图文详情</text>
            <text class="dash-line">---------</text>
          </view>
          <view class="pic-content">
            <view class="word-desc">{{ goods.picWord }}</view>
            <view class="pic-wrapper">
              <image
                v-for="(image, index) of goods.picList"
                :key="index"
                :src="image"
                class="pic-img"
              ></image>
            </view>
          </view>
        </view>
        <view class="play-container">
          <view class="title-container"> 吃喝玩乐购物指南 </view>
          <view class="time-line-container">
            <view
              class="item-container"
              v-for="(play, index) of playList"
              :key="index"
            >
              <view class="left">
                <view class="roune"></view>
                <view
                  class="line"
                  :style="
                    index === playList.length - 1
                      ? 'background: transparent'
                      : 'background: rgba(187, 187, 187, 0.48)'
                  "
                ></view>
              </view>
              <view class="right">
                <view class="title">{{ play.title }}</view>
                <view class="real-content">{{ play.desc }}</view>
              </view>
            </view>
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
import uniNumberBox from '../../components/uni-number-box'
export default {
  name: 'GoodDetail',
  components: { uniNumberBox },
  data () {
    return {
      shareImg: require("../../assets/images/md-launch.svg"),
      cartImg: require("../../assets/images/bottom-cart.svg"),
      tabs: ["基本信息", "图文详情"],
      selectedTabIndex: 0,
      isShowTab: false,
      goods: {
        goodsImg: require('../../assets/images/good.png'),
        getTime: '08月13日',
        goodPrice: '28.8',
        title: '卤将军 麻辣鸭掌 10/袋 约280g/袋',
        realName: '卤将军 麻辣鸭掌',
        overTime: '01:41:01',
        count: 1,
        goodNumber: 210009,
        saleTime: '2020-12-08',
        category: '零食',
        picWord: '色泽诱人.富有嚼劲！大家快来买啊！骨酥肉香滋味鲜爽20多味香料的卤汤，香气饱满、浓郁，外皮绵软，肌肉脆嫩，卤汁浸入骨头之中，食后美感久久不去。',
        picList: [
          require("../../assets/images/pic1.png"),
          require("../../assets/images/pic4.png")
        ]
      },
      playList: [{
        title: '在线下单',
        desc: '每天可购买商品时间：00：00-23：00'
      }, {
        title: '物流配送',
        desc: '每天16：00之前，物流会将您昨日购买的商品配送到您购买选择的自提门店'
      }, {
        title: '门店自提',
        desc: '每天可购买商品时间：00：00-23：00'
      }, {
        title: '售后无忧',
        desc: '每天可购买商品时间：00：00-23：00'
      }, {
        title: '吃喝玩乐全国热线',
        desc: '如果你遇到问题，请致电吃喝玩乐帮忙热线！电话：40088888'
      }]
    }
  },
  methods: {
    handleTab (index) {
      this.selectedTabIndex = this.selectedTabIndex == index ? this.selectedTabIndex : index;
    },
    handleScroll (e) {
      this.isShowTab = e.detail.scrollTop > 10
    },
    change (val) {

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
    background: rgba(187, 187, 187, 0.22);
    .tab-container {
      width: 100%;
      height: 80upx;
      display: flex;
      border-bottom: 1px solid #eee;
      opacity: 0;
      transition: all 0.3s;
      position: fixed;
      background: white;
      z-index: 99;
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
          padding: 26upx;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          .top {
            color: #101010;
            font-size: $font-lg;
            font-weight: bold;
            margin-bottom: 32upx;
          }
          .bottom {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left {
              font-size: 26upx;
              color: #101010;
            }
          }
        }
      }
      .good-detail-container {
        width: 100%;
        height: 384upx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 26upx;
        padding-top: 10upx;
        box-sizing: border-box;
        background: white;
        margin-top: 24upx;
        .title-container {
          width: 100%;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $font-lg;
          font-weight: bold;
          color: #101010;
          .dash-line {
            font-weight: normal;
            color: #ccc;
          }
          .title {
            margin: 0upx 20upx;
          }
        }
        .content-desc {
          width: 100%;
          height: 264upx;
          background: rgba(250, 79, 81, 0.22);
          padding: 22upx;
          box-sizing: border-box;
          border-radius: 16upx;
          .row {
            display: flex;
            align-items: center;
            font-size: $font-base;
            color: #101010;
            .label {
              width: 160upx;
              text-align: left;
            }
            .content {
              flex: 1;
            }
          }
          .row + .row {
            margin-top: 22upx;
          }
        }
      }
      .good-pic-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 10upx;
        box-sizing: border-box;
        background: white;
        .title-container {
          width: 100%;
          height: 100upx;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $font-lg;
          font-weight: bold;
          color: #101010;
          .dash-line {
            font-weight: normal;
            color: #ccc;
          }
          .title {
            margin: 0upx 20upx;
          }
        }
        .pic-content {
          width: 100%;
          .word-desc {
            padding: 0upx 40upx;
            font-size: $font-base;
            color: rgba(16, 16, 16, 0.78);
            margin-bottom: 26upx;
          }
          .pic-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            .pic-img {
              width: 100%;
              height: 1012upx;
            }
            .pic-img:last-child {
              height: 514upx;
            }
          }
        }
      }
      .play-container {
        background: white;
        margin-top: 24upx;
        padding-bottom: 20upx;
        width: 100%;
        .title-container {
          width: 100%;
          height: 100upx;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: $font-lg;
          font-weight: bold;
          color: #101010;
        }
        .time-line-container {
          width: 100%;
          padding: 0upx 26upx;
          box-sizing: border-box;
          .item-container {
            display: flex;
            margin-bottom: 20upx;
            .left {
              width: 50upx;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              .roune {
                width: 24upx;
                height: 24upx;
                border-radius: 50%;
                border: 2upx solid $theme-color;
                margin-top: 4upx;
              }
              .line {
                width: 2upx;
                height: 100upx;
                margin-top: 2upx;
                background: rgba(187, 187, 187, 0.48);
              }
            }
            .right {
              flex: 1;
              display: flex;
              flex-direction: column;
              color: #101010;
              font-size: $font-base;
              .title {
                margin-bottom: 16upx;
                font-weight: bold;
              }
              .real-content {
                line-height: 1.5;
              }
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 100upx;
    border: 2upx solid #eee;
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