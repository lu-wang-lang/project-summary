<template>
  <div class="header">
    <div class="header-logo" @click="handlePortalClick">
      <span>网易云课堂</span>
      <span>我的职业课堂</span>
    </div>
    <div class="header-search">
      <el-select class="search-type" v-model="searchData.type" @change="changeSearchType">
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
</template>

<script>
import { Select, Option, OptionGroup, Badge } from "element-ui";
export default {
  name: "PortalHeader",
  components: {
    "el-select": Select,
    "el-option": Option,
    "el-option-group": OptionGroup,
    "el-badge": Badge,
  },
  data() {
    return {
      avatarImg: require("../../assets/images/avatar.png"),
      searchImg: require("../../assets/images/mb-search.svg"),
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
    };
  },
  methods: {
    handlePortalClick() {
      this.$refs["searchTips"].style.display = "none";
    },
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
  },
};
</script>

<style lang="less">
@import url("../../assets/less/animate.min.css");
@import "../../assets/less/common.less";
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
    cursor: pointer;
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
.el-select-dropdown__item.selected {
  color: @theme-color;
}
</style>
