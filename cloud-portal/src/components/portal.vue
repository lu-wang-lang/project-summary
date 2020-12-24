<template>
  <div class="portal" @click="handlePortalClick">
    <div class="header">
      <div class="header-logo">
        <span>网易云课堂</span>
        <span>我的职业课堂</span>
      </div>
      <div class="header-search">
        <el-select
          class="search-type"
          v-model="searchData.type"
          @change="changeSearchType"
        >
          <el-option
            v-for="(option, index) of searchTypeList"
            :key="index"
            :label="option.name"
            :value="option.type"
          ></el-option>
        </el-select>
        <input
          class="search-input"
          :placeholder="searchTypeList[selectedIndex].placeholder"
          v-model="searchData.content"
          @keydown.enter="handleSearch"
          @click.stop="focusSearchInput"
        />
        <div class="search-icon" @click="handleSearch">
          <img :src="searchImg" />
          <span>搜索</span>
        </div>
        <div class="search-tips" ref="searchTips">
          <ul class="top-ul">
            <li class="top-li" v-if="historyTips.length > 0">
              <div class="top-title">
                历史搜索
                <div class="clear-history" @click="clearHistory">
                  <i class="el-icon-delete"></i>
                  清空
                </div>
              </div>
              <ul class="sub-ul">
                <li
                  class="sub-li"
                  v-for="(tip, idx) of historyTips"
                  :key="idx"
                  @click="clickSearchTip(tip.content)"
                >
                  {{ tip.content }}
                </li>
              </ul>
            </li>
            <li class="top-li">
              <div class="top-title">热门搜索</div>
              <ul class="sub-ul">
                <li
                  class="sub-li"
                  v-for="(tip, idx) of searchTypeList[selectedIndex].searchTips"
                  :key="idx"
                  @click="clickSearchTip(tip.content)"
                >
                  {{ tip.content }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-parts">
        <span class="learn">我的学习</span>
        <el-badge :value="2" :max="10" class="badge-item">
          <i class="icon el-icon-bell"></i>
        </el-badge>
        <el-badge :value="10" :max="10" class="badge-item">
          <i class="icon el-icon-shopping-cart-2"></i>
        </el-badge>
        <div class="user-container">
          <div class="img-container">
            <img :src="avatarImg" />
          </div>
          <span>王小塔</span>
        </div>
      </div>
    </div>
    <div class="main-container" :style="'min-height:' + minHeight">
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
    <div class="footer">
      <div class="container">
        <div class="footer-left">
          <div class="desc-top">
            网易云课堂 是网易公司（163.com）旗下专注职业技能提升的在线学习平台。
          </div>
          <div class="alink">
            <a
              v-for="(alink, index) of alinks"
              :key="index"
              :href="alink.href"
              target="_blank"
              :data-index="alink.title"
              >{{ alink.title }}</a
            >
          </div>
          <pre class="bottom-desc">
©1997-2020 网易公司 版权所有     粤B2-20090191-18     工业和信息化部备案管理系统网站</pre
          >
        </div>
        <div class="footer-right">
          <div class="download">
            <div class="download-item">
              <img :src="appleImg" />
              <div class="download-content">
                <span>App Store</span>
                <span>下载</span>
              </div>
            </div>
            <div class="download-item">
              <img :src="androidImg" />
              <div class="download-content">
                <span>Android</span>
                <span>下载</span>
              </div>
            </div>
          </div>
          <div class="contact">
            关注我们：
            <span class="contact-item">
              <img :src="weixinImg" />
            </span>
            <span class="contact-item">
              <img :src="weiboImg" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Select, Option, OptionGroup, Badge } from "element-ui";
// import Swiper from 'swiper';
// import swiperAnimate from '../utils/swiper-animate'
export default {
  name: "Portal",
  components: {
    "el-select": Select,
    "el-option": Option,
    "el-option-group": OptionGroup,
    "el-badge": Badge,
  },
  data() {
    return {
      minHeight: "0px",
      avatarImg: require("../assets/images/avatar.png"),
      searchImg: require("../assets/images/mb-search.svg"),
      appleImg: require("../assets/images/apple.svg"),
      androidImg: require("../assets/images/android.svg"),
      weixinImg: require("../assets/images/weixin.svg"),
      weiboImg: require("../assets/images/weibo.svg"),
      searchTypeList: [
        {
          type: "course",
          name: "课程",
          placeholder: "Python零基础入门",
          searchTips: [
            {
              id: 1,
              content: "Python零基础入门",
            },
            {
              id: 2,
              content: "金融量化",
            },
            {
              id: 3,
              content: "思维导图速学指南",
            },
            {
              id: 4,
              content: "股票量化",
            },
          ],
        },
        {
          type: "school",
          name: "网校",
          placeholder: "搜索网校",
          searchTips: [
            {
              id: 1,
              content: "达内",
            },
            {
              id: 2,
              content: "骇客",
            },
            {
              id: 3,
              content: "软件",
            },
            {
              id: 4,
              content: "网校",
            },
            {
              id: 5,
              content: "考研",
            },
          ],
        },
      ],
      searchData: {
        type: "course",
        content: "",
      },
      selectedIndex: 0,
      historyTips: [],
      selectSwiperIndex: 0,
      swiperTimer: null,
      hoverTimer: null,
      swiperList: [
        {
          imgSrc: require("../assets/images/banner/0.jpg"),
          title: "八年周庆：免费领取100元红包",
          id: 0,
          background: "rgba(253,218,191)",
        },
        {
          imgSrc: require("../assets/images/banner/1.png"),
          title: "免费试听：零基础轻松学Python",
          id: 1,
          background: "rgba(45,52,71)",
        },
        {
          imgSrc: require("../assets/images/banner/2.png"),
          title: "限时体验：3天祝你练就地道英语口语",
          id: 2,
          background: "#FF3A24",
        },
        {
          imgSrc: require("../assets/images/banner/3.jpg"),
          title: "限时领取：2小时掌握数据分析",
          id: 3,
          background: "rgba(26,144,117)",
        },
        {
          imgSrc: require("../assets/images/banner/4.jpg"),
          title: "专题特惠：Excel实战训练营",
          id: 4,
          background: "rgba(40,92,254)",
        },
        {
          imgSrc: require("../assets/images/banner/5.png"),
          title: "专题特惠：零基础入门商业插画",
          id: 5,
          background: "rgba(241,240,238)",
        },
        {
          imgSrc: require("../assets/images/banner/6.png"),
          title: "播音直播：播音配音训练营",
          id: 6,
          background: "rgba(253,113,75)",
        },
      ],
      alinks: [
        {
          title: "关于我们",
          href: "//study.163.com/about/aboutus.htm#/about?aboutType=1",
        },
        {
          title: "联系我们",
          href: "//study.163.com/about/aboutus.htm#/about?aboutType=2",
        },
        {
          title: "帮助中心",
          href: "//study.163.com/about/aboutus.htm#/about?aboutType=4",
        },
        {
          title: "中国大学MOOC",
          href: "//www.icourse163.org/",
        },
        {
          title: "网易卡搭编程",
          href:
            "//geek.163.com/?utm_source=study.163.com&amp;utm_medium=web_bottombanner&amp;utm_campaign=business&amp;utm_content=qxq20180720",
        },
        {
          title: "极客战记",
          href: "//codecombat.163.com/",
        },
        {
          title: "有道智云",
          href: "//ai.youdao.com/gw.s",
        },
      ],
    };
  },
  methods: {
    //搜索类型切换事件  --searchType
    changeSearchType(val) {
      this.selectedIndex =
        this.searchTypeList.findIndex((c) => c.type === val) > -1
          ? this.searchTypeList.findIndex((c) => c.type === val)
          : 0;
      this.focusSearchInput();
    },
    //点击搜索中的tip内容 --需要对搜索类型也进行判断处理
    clickSearchTip(content) {
      let idx = this.historyTips.findIndex((c) => c.content === content);
      if (idx === -1) {
        this.historyTips.unshift({ content });
        if (this.historyTips.length > 2) {
          this.historyTips.pop();
        }
      }
      window.location.href = `https://study.163.com/provider-search?keyword=${content}`;
    },
    //清空搜索历史
    clearHistory() {
      this.historyTips = [];
    },
    //搜索
    handleSearch() {
      if (this.searchData.content) {
        this.clickSearchTip(this.searchData.content);
      }
    },
    focusSearchInput() {
      this.$refs["searchTips"].style.display = "block";
    },
    handlePortalClick() {
      this.$refs["searchTips"].style.display = "none";
    },
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
          let _this = this;
          this.swiperTimer = setInterval(() => {
            if (_this.selectSwiperIndex < _this.swiperList.length - 1) {
              _this.selectSwiperIndex++;
            } else {
              _this.selectSwiperIndex = 0;
            }
          }, 3000);
        }, 1000);
      }
    },
    handleMouseLeave() {
      if (this.hoverTimer) {
        clearTimeout(this.hoverTimer);
        this.hoverTimer = null;
      }
    },
  },
  mounted() {
    let height =
      (document.body.clientHeight || document.documentElement.clientHeight) - 112 - 184;
    this.minHeight = height + "px";

    let _this = this;
    this.swiperTimer = setInterval(() => {
      if (_this.selectSwiperIndex < _this.swiperList.length - 1) {
        _this.selectSwiperIndex++;
      } else {
        _this.selectSwiperIndex = 0;
      }
    }, 3000);
  },
};
</script>

<style lang="less">
@import url("../assets/less/animate.min.css");
@import "../assets/less/common.less";
.portal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    width: @contentWidth;
    height: 112px;
    display: flex;
    align-items: center;
    .header-logo {
      width: 145px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span:first-child {
        font-size: 28px;
        letter-spacing: 0.5px;
      }
      span:last-child {
        font-size: @normal-font-size;
        color: #a6a4a4;
        letter-spacing: 2px;
      }
    }
    .header-search {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .search-type {
        width: 70px;
        .el-input__suffix {
          right: 3px;
        }
        .el-input__suffix-inner {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .el-input__inner {
          height: 36px;
          text-align: right;
          padding: 8px 20px 7px 7px;
          border: 1px solid @border-color;
          border-right: none;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          color: @normal-color;
        }
        .el-input__icon {
          width: 14px;
        }
      }
      .search-input {
        width: 240px;
        height: 36px;
        padding: 0px 5px;
        color: @normal-color;
        font-size: @normal-font-size;
        border: 1px solid @border-color;
        border-left: none;
      }
      .search-input::selection {
        background: #0e6bda;
        color: white;
      }
      .search-input:focus {
        border: 1px solid @border-color;
        border-left: none;
        outline: none;
      }
      .search-icon {
        width: 80px;
        height: 36px;
        display: flex;
        border: 1px solid @theme-color;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background: @theme-color;
        color: white;
        align-items: center;
        font-size: @normal-font-size;
        cursor: pointer;
        img {
          width: 18px;
          margin-right: 2px;
          margin-left: 10px;
        }
      }
      .search-icon:hover {
        opacity: 0.9;
      }
      .search-tips {
        width: 300px;
        position: absolute;
        background: white;
        top: 76px;
        left: 222px;
        z-index: 999;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
        border-radius: 2px;
        padding-bottom: 10px;
        display: none;
        .top-ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          .top-li {
            .top-title {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 50px;
              font-size: 12px;
              color: #999;
              padding: 0px 16px;
              .clear-history {
                cursor: pointer;
              }
            }
            .sub-ul {
              width: 100%;
              display: flex;
              flex-direction: column;
              .sub-li {
                height: 50px;
                padding: 0px 0px 0px 16px;
                color: @normal-color;
                font-size: 14px;
                display: flex;
                align-items: center;
                cursor: pointer;
              }
              .sub-li:hover {
                color: @theme-color;
                background: @light-gray-color;
              }
            }
          }
        }
      }
    }
    .header-parts {
      width: 255px;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: @normal-font-size;
      color: @normal-color;
      .learn {
        cursor: pointer;
      }
      .badge-item {
        margin-left: 15px;
        .icon {
          font-size: 20px;
          cursor: pointer;
        }
      }
      .user-container {
        margin-left: 25px;
        border-left: 1px solid @border-color;
        display: flex;
        align-items: center;
        cursor: pointer;
        .img-container {
          width: 30px;
          height: 30px;
          border: 1px solid @border-color;
          border-radius: 50%;
          margin: 0px 10px;
          padding: 2px;
          img {
            width: 100%;
          }
        }
      }
      .learn:hover,
      .badge-item:hover,
      .user-container:hover {
        color: @theme-color;
        transition: 0.2s all;
      }
    }
  }
  .main-container {
    position: relative;
    width: 100%;
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
  .footer {
    width: 100%;
    height: 184px;
    background: #474443;
    .container {
      width: @contentWidth;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      .footer-left {
        display: flex;
        flex-direction: column;
        .desc-top {
          color: white;
          margin-bottom: 17px;
        }
        .alink {
          display: flex;
          a {
            text-decoration: none;
            cursor: pointer;
            padding-right: 15px;
            color: white;
          }
          a:hover {
            text-decoration: underline;
          }
        }
        .bottom-desc {
          color: #999;
          margin-top: 14px;
          font-size: @normal-font-size;
        }
      }
      .footer-right {
        .download {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 27px;
          .download-item {
            width: 110px;
            height: 33px;
            border-radius: 4px;
            border: 1px solid #fff;
            background: #101010;
            margin-left: 10px;
            padding: 3px;
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
              width: 24px;
              height: 24px;
            }
            .download-content {
              display: flex;
              flex-direction: column;
              color: white;
              font-size: 12px;
              margin-left: 10px;
            }
          }
        }
        .contact {
          color: white;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .contact-item {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
            cursor: pointer;
            img {
              width: 70%;
            }
          }
        }
      }
    }
  }
}

.el-select-dropdown__item.selected {
  color: @theme-color;
}
</style>
