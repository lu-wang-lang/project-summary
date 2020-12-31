<template>
  <view class="category-container">
    <view class="search-container">
      <view class="search" @click="handleSearch">
        <image class="search-img" :src="searchImg"></image>
        <text class="placeholder">搜索商品 - 好货等你</text>
      </view>
    </view>
    <view class="main-wrapper">
      <view class="left">
        <scroll-view class="menu-container" :scroll-y="true" :show-scrollbar="false">
          <view
            v-for="(menu, index) of menuList"
            :key="index"
            class="menu-item"
            @click="handleMenu(index)"
          >
            <view
              :class="selectedIndex === index ? 'item-wrapper active' : 'item-wrapper'"
            >
              {{ menu.title }}
            </view>
          </view>
        </scroll-view>
      </view>
      <view class="right">
        <scroll-view class="menu-container" :scroll-y="true" :show-scrollbar="false">
          <view
            class="good-item out-line"
            v-for="(good, index) of selectedGoods"
            :key="index"
          >
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
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      searchImg: require("../../assets/images/mb-search.svg"),
      menuList: [
        {
          id: 0,
          title: "为你推荐",
        },
        {
          id: 1,
          title: "水果区",
        },
        {
          id: 2,
          title: "蔬菜区",
        },
        {
          id: 3,
          title: "家禽区",
        },
        {
          id: 4,
          title: "水产区",
        },
        {
          id: 5,
          title: "肉食区",
        },
        {
          id: 6,
          title: "蛋类区",
        },
        {
          id: 7,
          title: "营养早餐",
        },
        {
          id: 1,
          title: "水果区",
        },
        {
          id: 2,
          title: "蔬菜区",
        },
        {
          id: 3,
          title: "家禽区",
        },
        {
          id: 4,
          title: "水产区",
        },
        {
          id: 5,
          title: "肉食区",
        },
        {
          id: 6,
          title: "蛋类区",
        },
        {
          id: 7,
          title: "营养早餐",
        },
      ],
      goodsList: [
        [
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
        [
          {
            isNormal: true,
            id: 4,
            image: "../../assets/images/swiper3.png",
            title: "超白超白洗衣粉  500g 1袋",
            time: "08月13日",
            price: "9.9",
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
            id: 1,
            image: "../../assets/images/swiper1.png",
            title: "语农 散装土鸡蛋  360枚 40斤",
            time: "08月13日",
            price: "28.8",
            saleCount: 2700,
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
        ],
      ],
      selectedGoods: [],
      selectedIndex: 0,
    };
  },
  methods: {
    handleSearch() {},
    handleMenu(index) {
      this.selectedIndex = this.selectedIndex === index ? this.selectedIndex : index;
      this.selectedGoods =
        this.selectedIndex % 2 === 0 ? this.goodsList[0] : this.goodsList[1];
    },
    addCart(good) {},
  },
  mounted() {
    this.selectedGoods = this.goodsList[0];
  },
};
</script>

<style lang="scss">
.category-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .search-container {
    width: 100%;
    height: 68upx;
    padding: 0upx 36upx;
    margin: 20upx 0upx;
    box-sizing: border-box;
    .search {
      width: 100%;
      height: 100%;
      padding: 0upx 18upx;
      box-sizing: border-box;
      background: rgb(237, 237, 237);
      border-radius: 16upx;
      display: flex;
      align-items: center;
      color: #828282;
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
  .main-wrapper {
    width: 100%;
    flex: 1;
    overflow: hidden;
    display: flex;
    .left {
      width: 208upx;
      height: 100%;
      border-right: 1px solid #eee;
      .menu-container {
        height: 100%;
        .menu-item {
          width: 100%;
          height: 100upx;
          display: flex;
          justify-content: center;
          align-items: center;
          .item-wrapper {
            width: 170upx;
            height: 52upx;
            border-radius: 26upx;
            font-size: $font-base;
            color: #101010;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .active {
            background: $theme-color;
            color: white;
          }
        }
      }
    }
    .right {
      flex: 1;
      height: 100%;
      .menu-container {
        height: 100%;
        margin-bottom: 30upx;
        .good-item {
          width: 90%;
          margin:0upx auto;
          margin-bottom: 30upx;
          .good-img {
            width: 100%;
            height: 236upx;
            border-radius: 8upx;
          }
          .title {
            font-size: $font-base;
            color: #000;
            margin: 16upx 0upx 14upx;
            font-weight: bold;
          }
          .time {
            font-size: 26upx;
            color: #000;
            margin-bottom: 10upx;
          }
          .bottom {
            display: flex;
            align-items: flex-end;
            position: relative;
            .price {
              color: $theme-color;
              font-size: $font-sm;
              margin-right: 40upx;
              .price-text {
                font-size: $font-base;
                font-weight: bold;
              }
            }
            .sale {
              font-size: $font-sm;
              color: rgba(0, 0, 0, 0.54);
            }
            .cart {
              position: absolute;
              right: 32upx;
              top: -4upx;
              width: 148upx;
              height: 44upx;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              background: $theme-color;
              font-size: $font-sm;
              border-radius: 30upx;
            }
          }
        }
      }
    }
  }
}
</style>
