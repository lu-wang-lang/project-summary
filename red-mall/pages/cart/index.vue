<template>
  <view class="cart-container">
    <view class="address">这里是地址定位</view>
    <view class="goods-container">
      <view class="good-item" v-for="(good, index) of shoppingList" :key="index">
        <view class="left-img-container">
          <label class="radio" @click="handleChange(index)">
            <radio
              value="r2"
              color="#D93025"
              style="transform: scale(0.7)"
              :checked="good.isSelected"
            />
          </label>
          <image class="good-img" :src="good.imgSrc"></image>
        </view>
        <view class="right-detail">
          <view class="title" v-html="good.title"></view>
          <view class="desc" v-html="good.desc"></view>
          <view class="bottom">
            <view class="price">
              <text>￥</text><text class="real-price">{{ good.price }}</text>
            </view>
            <uni-number-box
              :value="good.count"
              :min="1"
              :selectedIndex="index"
              class="count-num"
              @change="changeCount"
            />
          </view>
        </view>
      </view>
    </view>
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
        <text class="price">￥{{ totalPrice }}</text>
      </view>
      <button :class="selectedCount > 0 ? 'buy-btn active' : 'buy-btn'" @click="goBuy">
        去结算
        <text v-if="selectedCount > 0">（{{ selectedCount }}）</text>
      </button>
    </view>
  </view>
</template>
<script>
import uniNumberBox from "../../components/uni-number-box";
export default {
  name: "ShoppingCart",
  components: { uniNumberBox },
  data() {
    return {
      isSelectedAll: false,
      shoppingList: [
        {
          id: 1,
          imgSrc: require("../../assets/images/swiper1.png"),
          title: "散装土鸡蛋  360枚 40斤",
          desc: "40斤 正负25g",
          price: 28.8,
          count: 1,
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
      totalPrice: 0,
      selectedCount: 0,
    };
  },
  methods: {
    sumPrice() {
      this.totalPrice = 0;
      this.selectedCount = 0;
      this.shoppingList.forEach((item) => {
        if (item.isSelected) {
          this.totalPrice = item.price * item.count + this.totalPrice;
          this.selectedCount++;
        }
      });
      this.totalPrice = this.totalPrice.toFixed(2)
    },
    handleChangeAll() {
      this.isSelectedAll = !this.isSelectedAll;
      this.shoppingList.forEach((item) => {
        item.isSelected = this.isSelectedAll;
      });
      this.sumPrice();
    },
    handleChange(index) {
      this.shoppingList[index].isSelected = !this.shoppingList[index].isSelected;
      this.sumPrice();
    },
    changeCount(index, val) {
      this.shoppingList[index].count = val;
      if (this.shoppingList[index].isSelected) {
        this.sumPrice();
      }
    },
    goBuy() {
      if (this.selectedCount === 0) {
        console.log("toast");
        return;
      }
      console.log("去结算");
    },
  },
};
</script>

<style lang="scss">
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
        .radio {
          margin-right: 22upx;
        }
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
              width: 170upx !important;
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
      background: #ccc;
      color: white;
      font-size: $font-base;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .active {
      background: $theme-color;
    }
  }
}
</style>
