<template>
  <div class="banner-container">
    <div v-for="(swiper, index) of swiperList" :key="index">
      <div
        class="swiper-container"
        :style="{
          background: swiper.background,
          opacity: index === selectSwiperIndex ? 1 : 0,
          transition: 'all 0.8s',
        }"
      >
        <img :src="swiper.imgSrc" class="swiper-img" />
      </div>
    </div>
    <div class="swiper-list">
      <ul @mouseleave="handleMouseLeave">
        <li
          v-for="(swiper, index) of swiperList"
          :key="index"
          :class="index === selectSwiperIndex ? 'active-li' : ''"
          :title="swiper.title"
          @mouseover="handleMouseOver(index)"
        >
          <div
            :class="index === selectSwiperIndex ? 'arrow arrow-active' : 'arrow'"
          ></div>
          <div class="li-title">
            {{ swiper.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortalBanner",
  data() {
    return {
      selectSwiperIndex: 0,
      swiperTimer: null,
      hoverTimer: null,
      swiperList: [
        {
          imgSrc: require("../../assets/images/banner/0.jpg"),
          title: "八年周庆：免费领取100元红包",
          id: 0,
          background: "rgba(253,218,191)",
        },
        {
          imgSrc: require("../../assets/images/banner/1.png"),
          title: "免费试听：零基础轻松学Python",
          id: 1,
          background: "rgba(45,52,71)",
        },
        {
          imgSrc: require("../../assets/images/banner/2.png"),
          title: "限时体验：3天祝你练就地道英语口语",
          id: 2,
          background: "#FF3A24",
        },
        {
          imgSrc: require("../../assets/images/banner/3.jpg"),
          title: "限时领取：2小时掌握数据分析",
          id: 3,
          background: "rgba(26,144,117)",
        },
        {
          imgSrc: require("../../assets/images/banner/4.jpg"),
          title: "专题特惠：Excel实战训练营",
          id: 4,
          background: "rgba(40,92,254)",
        },
        {
          imgSrc: require("../../assets/images/banner/5.png"),
          title: "专题特惠：零基础入门商业插画",
          id: 5,
          background: "rgba(241,240,238)",
        },
        {
          imgSrc: require("../../assets/images/banner/6.png"),
          title: "播音直播：播音配音训练营",
          id: 6,
          background: "rgba(253,113,75)",
        },
      ],
    };
  },
  methods: {
    //处理swiper中鼠标hover事件
    handleMouseOver(index) {
      if (index !== this.selectSwiperIndex) {
        if (this.hoverTimer) {
          clearTimeout(this.hoverTimer);
          this.hoverTimer = null;
        }
        this.hoverTimer = setTimeout(() => {
          this.selectSwiperIndex = index;

          clearInterval(this.swiperTimer);
          this.setSwiperTimer();
        }, 1000);
      }
    },
    //鼠标移除ul-li区域
    handleMouseLeave() {
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
        this.hoverTimer = null;
      }
    },
    //swiper轮播设置timer
    setSwiperTimer() {
      this.swiperTimer = setInterval(() => {
        if (this.selectSwiperIndex < this.swiperList.length - 1) {
          this.selectSwiperIndex++;
        } else {
          this.selectSwiperIndex = 0;
        }
      }, 3000);
    },
  },
  mounted() {
    this.setSwiperTimer();
  },
};
</script>

<style lang="less">
@import url("../../assets/less/animate.min.css");
@import "../../assets/less/common.less";
.banner-container {
  position: relative;
  width: 100%;
  height: 360px;
  .swiper-container {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
    .swiper-img {
      width: @contentWidth;
      height: 100%;
      cursor: pointer;
    }
  }
  .swiper-list {
    width: 300px;
    height: 320px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    right: calc((100% - @contentWidth) / 2);
    top: 20px;
    z-index: 999;
    padding: 23px 10px;
    ul li {
      width: 100%;
      height: 40px;
      font-size: @big-font-size;
      color: rgba(255, 255, 255, 0.6);
      box-sizing: border-box;
      overflow: hidden;
      cursor: pointer;
      display: flex;
      align-items: center;
      .arrow {
        border-style: solid;
        border-width: 6px 8px 6px 8px;
        border-color: transparent transparent transparent transparent;
        width: 0px;
        height: 0px;
        margin-right: 5px;
      }
      .arrow-active {
        border-color: transparent @theme-color transparent transparent;
      }
      .li-title {
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
    .active-li,
    li:hover {
      color: @theme-color;
    }
  }
}
</style>
