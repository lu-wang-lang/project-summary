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
      <view class="order-item" v-for="(order, index) of orderList" :key="index">
        <view class="top">
          <view class="order-time">{{ order.orderTime }}</view>
          <view
            :class="
              order.type === 'notPay' || order.type === 'notReceive'
                ? 'status red'
                : 'status'
            "
          >
            <text>{{ order.name }}</text>
            <text
              v-if="!(order.type === 'notPay' || order.type === 'notReceive')"
              class="text-line"
              >|</text
            >
            <image
              :src="deleteImg"
              class="delete-img"
              v-if="!(order.type === 'notPay' || order.type === 'notReceive')"
            ></image>
          </view>
        </view>
        <view class="middle">
          <image class="order-img" :src="order.orderImg"></image>
          <view class="middle-right">
            <view class="title" v-html="order.title"></view>
            <view class="order-bottom">
              <view class="get-time">{{ order.getTime }}</view>
              <view class="sale-count">X{{ order.saleCount }}</view>
            </view>
          </view>
        </view>
        <view class="bottom">
          <view class="bottom-top">
            <text class="sale-count">共{{ order.saleCount }}件</text>
            <text class="desc">应付总额：</text>
            <text class="bottom-price">￥{{ order.price }}</text>
          </view>
          <view
            class="order-btn"
            v-if="order.type === 'finished' || order.type == 'closed'"
            @click="buy('again', order)"
            >再次购买</view
          >
          <view
            class="order-btn order-btn-red"
            v-else-if="order.type === 'notPay'"
            @click="buy('once', order)"
            >立即付款</view
          >
        </view>
      </view>
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
  name: "Order",
  data() {
    return {
      searchImg: require("../../assets/images/mb-search.svg"),
      selectedIndex: 0,
      tabList: [
        {
          type: "total",
          title: "全部",
        },
        {
          type: "notPay",
          title: "待付款",
        },
        {
          type: "notReceive",
          title: "待提货",
        },
        {
          type: "finished",
          title: "已提货",
        },
      ],
      orderList: [],
      totalList: [
        {
          type: "notPay",
          name: "未付款",
          orderTime: "2017-06-24",
          orderImg: require("../../assets/images/good.png"),
          title: "卤将军 麻辣鸭掌 10/袋 约280g/袋",
          getTime: "08月20日提货",
          saleCount: 2,
          price: 169.0,
        },
        {
          type: "notPay",
          name: "未付款",
          orderTime: "2017-06-24",
          orderImg: require("../../assets/images/good.png"),
          title: "卤将军 麻辣鸭掌 10/袋 约280g/袋",
          getTime: "08月20日提货",
          saleCount: 2,
          price: 169.0,
        },
        {
          type: "finished",
          name: "交易成功",
          orderTime: "2017-06-24",
          orderImg: require("../../assets/images/good.png"),
          title: "卤将军 麻辣鸭掌 10/袋 约280g/袋",
          getTime: "08月20日提货",
          saleCount: 2,
          price: 169.0,
        },
        {
          type: "notReceive",
          name: "待提货",
          orderTime: "2017-06-24",
          orderImg: require("../../assets/images/good.png"),
          title: "卤将军 麻辣鸭掌 10/袋 约280g/袋",
          getTime: "08月20日提货",
          saleCount: 2,
          price: 169.0,
        },
        {
          type: "closed",
          name: "交易关闭",
          orderTime: "2017-06-24",
          orderImg: require("../../assets/images/good.png"),
          title: "卤将军 麻辣鸭掌 10/袋 约280g/袋",
          getTime: "08月20日提货",
          saleCount: 2,
          price: 169.0,
        },
      ],
      isEmpty: true,
      emptyImg: require("../../assets/images/logo.png"),
      deleteImg: require("../../assets/images/delete.svg"),
    };
  },
  methods: {
    handleSearch() {},
    handleTab(index) {
      this.selectedIndex = index;
      this.initData();
    },
    goShopping() {
      uni.switchTab({
        url: "/pages/homePage/index",
      });
    },
    buy(type, order) {
      if (type === "again") {
        uni.navigateTo({
          url: "/pages/category/detail",
        });
      }
    },
    initData() {
      let type = "";
      this.selectedIndex = this.selectedIndex ? this.selectedIndex : 0;
      switch (this.selectedIndex) {
        case 0:
          break;
        case 1:
          type = "notPay";
          break;
        case 2:
          type = "notReceive";
          break;
        case 3:
          type = "finished";
          break;
        default:
          break;
      }
      if (type) {
        this.orderList = this.totalList.filter((item) => {
          return item.type === type;
        });
      } else {
        this.orderList = this.totalList;
      }
      this.isEmpty = this.orderList.length === 0;
    },
  },
  onShow() {
    this.initData();
  },
  onLoad(options) {
    switch (options.type) {
      case "total":
        this.selectedIndex = 0;
        break;
      case "notPay":
        this.selectedIndex = 1;
        break;
      case "notReceive":
        this.selectedIndex = 2;
        break;
      case "finished":
        this.selectedIndex = 3;
        break;
      default:
        this.selectedIndex = 0;
        break;
    }
    this.initData();
  },
};
</script>

<style lang="scss" scoped>
.order-container {
  width: 100vw;
  height: 100vh;
  background: $grey-bg;
  overflow: hidden;
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
    padding-bottom: 60rpx;
    height: calc(100% - 178upx);
    overflow-y: auto;
    .order-item {
      width: 100%;
      background: white;
      margin-bottom: 18upx;
      border-radius: 16upx;
      padding: 0upx 22upx;
      box-sizing: border-box;
      .top {
        width: 100%;
        box-sizing: border-box;
        height: 70upx;
        border-bottom: 1px solid #eee;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 26upx;
        color: #101010;
        .status {
          display: flex;
          align-items: center;
          .text-line {
            margin: 6upx;
          }
          .delete-img {
            width: 32upx;
            height: 32upx;
          }
        }
        .red {
          color: $theme-color;
        }
      }
    }
    .middle {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      .order-img {
        margin: 10upx;
        margin-right: 22upx;
        width: 150upx;
        height: 150upx;
      }
      .middle-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
          width: 100%;
          font-size: $font-base;
          color: #101010;
          margin-bottom: 40upx;
          font-weight: bold;
        }
        .order-bottom {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: $font-sm;
          color: rgba(133, 133, 133, 1);
          .sale-count {
            color: rgba(16, 16, 16, 0.99);
            font-weight: bold;
          }
        }
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      .bottom-top {
        width: 100%;
        height: 80upx;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: rgba(133, 133, 133, 1);
        font-size: $font-sm;
        .sale-count {
          margin-right: 10upx;
        }
        .desc {
          margin-right: 12upx;
        }
        .bottom-price {
          color: rgba(16, 16, 16, 0.99);
          font-weight: bold;
          font-size: $font-base;
        }
      }
      .order-btn {
        width: 160upx;
        height: 52upx;
        border-radius: 26upx;
        border: 1px solid $theme-color;
        color: $theme-color;
        font-size: 26upx;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20upx;
      }
      .order-btn-red {
        background: $theme-color;
        color: white;
      }
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
