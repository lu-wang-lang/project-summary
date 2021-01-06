<template>
  <view class="assure-container">
    <view class="assure-main-container">
      <view class="address-top">{{ owner.address }}</view>
      <view class="owner-container">
        <view class="owner">收货人：{{ owner.name }}</view>
        <view class="order-num">{{ order.orderNumber }}</view>
      </view>
      <view class="address-detail-container">
        <view class="real-address">
          <view class="left">我的当前自提店</view>
          <view class="right">切换自提店</view>
          <view class="triangle"></view>
        </view>
        <view class="main-address-container">
          <view class="name">{{ shop.name }}</view>
          <view class="address">{{ shop.address }}</view>
        </view>
      </view>
      <view class="goods-container">
        <view class="good-item" v-for="(good, index) of order.shoppingList" :key="index">
          <view class="left-img-container">
            <image class="good-img" :src="good.imgSrc"></image>
          </view>
          <view class="right-detail">
            <view class="title" v-html="good.title"></view>
            <view class="desc" v-html="good.desc"></view>
            <view class="bottom">
              <view class="price">
                <text>￥</text><text class="real-price">{{ good.price }}</text>
              </view>
              <uni-number-box :value="good.count" class="count-num" :disabled="true" />
            </view>
          </view>
        </view>
      </view>
      <view class="tips-container">
        <image :src="vertifyImg" class="vertify-img"></image>
        <view class="main-text"
          >如您购买的商品有任何问题，请直接与购买门店
          联系，门店会为您处理，让您售后无忧</view
        >
      </view>
    </view>
    <view class="footer">
      <view class="price-container">
        合计：
        <text class="price">￥{{ order.totalPrice || 0 }}</text>
      </view>
      <button class="buy-btn" @click="goBuy">提交订单</button>
    </view>
    <uni-popup id="popup" ref="popup" :type="'bottom'" @change="change">
      <view class="popup-content">
        <view class="hair">{{ order.getTime }}</view>
        <view class="desc">此商品需要您到店自提，请仔细确认地址！</view>
        <view class="pop-address">
          <view class="top">自提门店：{{ order.getHouse }}</view>
          <view class="bottom">{{ order.realAddress }}</view>
        </view>
        <view class="btn-container">
          <button class="cancel-btn btn" @click="cancelBtn">取消订单</button>
          <button class="btn" @click="sureBtn">确认订单</button>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import uniNumberBox from "../../components/uni-number-box";
import uniPopup from "../../components/uni-popup/uni-popup.vue";
export default {
  name: "AssureOrder",
  components: { uniNumberBox, uniPopup },
  data() {
    return {
      owner: {
        address: "湖南省长沙市岳麓区嘉顺苑小区",
        name: "易胖子",
      },
      order: {
        orderNumber: "17680000000",
        shoppingList: [
          {
            id: 1,
            imgSrc: require("../../assets/images/swiper1.png"),
            title: "散装土鸡蛋  360枚 40斤",
            desc: "40斤 正负25g",
            price: 28.8,
            count: 10,
            isSelected: false,
          },
          {
            id: 2,
            imgSrc: require("../../assets/images/swiper1.png"),
            title: "散装土鸡蛋  360枚 40斤",
            desc: "40斤 正负25g",
            price: 28.8,
            count: 1,
            isSelected: false,
          },
          {
            id: 3,
            imgSrc: require("../../assets/images/swiper1.png"),
            title: "散装土鸡蛋  360枚 40斤",
            desc: "40斤 正负25g",
            price: 28.8,
            count: 1,
            isSelected: false,
          },
          {
            id: 4,
            imgSrc: require("../../assets/images/swiper1.png"),
            title: "散装土鸡蛋  360枚 40斤",
            desc: "40斤 正负25g",
            price: 28.8,
            count: 1,
            isSelected: false,
          },
          {
            id: 5,
            imgSrc: require("../../assets/images/swiper1.png"),
            title: "散装土鸡蛋  360枚 40斤",
            desc: "40斤 正负25g",
            price: 28.8,
            count: 1,
            isSelected: false,
          },
        ],
        totalPrice: 1000,
        getTime: "08月20日提货",
        getHouse: "岳麓梅溪湖街道嘉顺苑小区5栋芙蓉兴盛店",
        realAddress: "湖南省长沙市岳麓区梅溪湖街道嘉顺苑小区5栋103",
      },
      shop: {
        name: "岳麓区梅溪湖街道东方红小区快乐惠店",
        address: "门店地址：湖南省长沙市岳麓区梅西湖街道建顺源9栋2单元",
      },
      vertifyImg: require("../../assets/images/verified-user.svg"),
    };
  },
  methods: {
    goBuy() {
      this.$refs.popup.open();
    },
    change(e) {
      console.log("popup " + e.type + " 状态", e.show);
    },
    cancelBtn() {
      this.$refs.popup.close();
    },
    sureBtn() {
      this.$refs.popup.close();
    },
  },
};
</script>

<style lang="scss">
.assure-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: $grey-bg;
  display: flex;
  flex-direction: column;
  .assure-main-container {
    width: 100%;
    flex: 1;
    overflow-y: auto;
    .address-top {
      width: 100%;
      height: 80upx;
      background: $theme-color;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: $font-base;
      color: white;
    }
    .owner-container {
      width: 100%;
      height: 80upx;
      background: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: $font-base;
      color: #101010;
      padding: 0upx 20upx;
      box-sizing: border-box;
      .order-num {
        color: rgba(16, 16, 16, 0.71);
      }
    }
    .address-detail-container {
      width: 100%;
      margin: 30upx 0upx;
      border-top-left-radius: 16upx;
      border-top-right-radius: 16upx;
      overflow: hidden;
      box-sizing: border-box;
      box-shadow: $card-box-shadow;
      background: white;
      .real-address {
        width: 100%;
        height: 76upx;
        background-color: rgba(230, 212, 140, 1);
        padding: 0upx 36upx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: $font-base;
        box-sizing: border-box;
        position: relative;
        .left {
          color: rgb(145, 120, 16);
          font-weight: bold;
        }
        .right {
          color: rgba(16, 16, 16, 0.82);
        }
        .triangle {
          position: absolute;
          width: 0;
          height: 0;
          border-left: 18upx solid transparent;
          border-right: 18upx solid transparent;
          border-top: 18upx solid rgba(230, 212, 140, 1);
          top: 76upx;
          left: 50%;
          z-index: 99;
        }
      }
      .main-address-container {
        padding: 0upx 26upx;
        box-sizing: border-box;
        .name {
          color: rgba(16, 16, 16, 1);
          font-size: $font-base;
          font-weight: bold;
          margin-top: 40upx;
          margin-bottom: 28upx;
        }
        .address {
          color: rgba(16, 16, 16, 1);
          font-size: $font-base;
          margin-bottom: 34upx;
          line-height: 1.5;
        }
      }
    }
    .goods-container {
      width: 100%;
      margin: 18upx auto;
      .good-item {
        width: 100%;
        background: white;
        margin-bottom: 8upx;
        box-sizing: border-box;
        padding: 40upx 22upx;
        display: flex;
        align-items: center;
        .left-img-container {
          display: flex;
          align-items: center;
          .good-img {
            width: 280upx;
            height: 168upx;
            border-radius: 16upx;
          }
        }
        .right-detail {
          display: flex;
          flex-direction: column;
          margin-left: 14upx;
          flex: 1;
          .title {
            font-size: $font-base;
            font-weight: bold;
            color: #101010;
            margin-bottom: 18upx;
          }
          .desc {
            font-size: $font-base;
            color: rgba(16, 16, 16, 1);
            margin-bottom: 22upx;
          }
          .bottom {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            .price {
              font-size: 16upx;
              color: $theme-color;
              font-weight: bold;
              display: flex;
              align-items: center;
              .real-price {
                font-size: 36upx;
              }
            }
            .count-num {
              width: 190upx;
              height: 60upx;
              .uni-numbox {
                width: 100%;
              }
              .uni-numbox__value,
              .uni-numbox__minus,
              .uni-numbox__plus {
                height: 54upx;
                font-size: $font-sm;
              }
            }
          }
        }
      }
    }
    .tips-container {
      margin: 60upx 48upx;
      display: flex;
      padding: 26upx;
      font-size: 26upx;
      color: rgba(16, 16, 16, 1);
      line-height: 1.5;
      background: rgba(250, 79, 81, 0.22);
      border-radius: 16upx;
      .vertify-img {
        width: 48upx;
        height: 48upx;
        margin-right: 20upx;
      }
    }
  }
  .footer {
    width: 100%;
    height: 120upx;
    display: flex;
    align-items: center;
    background: white;
    padding: 0upx 32upx;
    box-sizing: border-box;
    .price-container {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-right: 20upx;
      box-sizing: border-box;
      color: rgba(16, 16, 16, 0.64);
      font-size: $font-base;
      font-weight: bold;
      .price {
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
  .popup-content {
    width: 100%;
    background-color: #fff;
    padding: 0upx 32upx;
    border-top-left-radius: 40upx;
    border-top-right-radius: 40upx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .hair {
      width: 400upx;
      height: 76upx;
      background: #ec0d0d;
      color: white;
      font-size: $font-base;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom-left-radius: 16upx;
      border-bottom-right-radius: 16upx;
    }
    .desc {
      margin: 20upx auto;
      color: $theme-color;
      font-size: $font-base;
    }
    .pop-address {
      width: 100%;
      background: rgba(187, 187, 187, 0.28);
      padding: 28upx;
      box-sizing: border-box;
      font-size: $font-base;
      color: rgba(187, 187, 187, 1);
      text-align: center;
      border-radius: 16upx;
      .top {
        color: rgba(16, 16, 16, 1);
        font-size: $font-lg;
        font-weight: bold;
        margin-bottom: 18upx;
        line-height: 1.7;
      }
    }
    .btn-container {
      width: 100%;
      padding: 24upx 30upx;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .btn {
        width: 268upx;
        height: 80upx;
        border-radius: 40upx;
        background: $theme-color;
        color: white;
        font-size: $font-base;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .cancel-btn {
        background: #fbab07;
      }
    }
  }
}
</style>
