<template>
  <div class="side-menu">
    <el-menu default-active="1"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose"
             @select="handleSelect"
             text-color="#fff"
             background-color=" rgb(67, 74, 80)"
             active-text-color="white"
             :unique-opened="true">
      <el-menu-item index="1"
                    ref="1"
                    data-link="/home"
                    data-name="首页">
        <img :src="homeImg"
             class="menu-icon mgt" />
        首页
      </el-menu-item>
      <el-menu-item index="2"
                    ref="2"
                    data-link="/course-list"
                    data-name="课程管理">
        <img :src="booksImg"
             class="menu-icon mgt" />课程管理
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <img :src="listImg"
               class="menu-icon" /><span>订单管理</span>
        </template>
        <el-menu-item index="3-1"
                      ref="3-1">订单</el-menu-item>
        <el-menu-item index="3-2"
                      ref="3-2">退款</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <img :src="accountImg"
               class="menu-icon" /><span>用户管理</span>
        </template>
        <el-menu-item index="4-1"
                      ref="4-1">学员</el-menu-item>
        <el-menu-item index="4-2"
                      ref="4-2">讲师</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <img :src="msgImg"
               class="menu-icon" /><span>咨询管理</span>
        </template>
        <el-menu-item index="5-1"
                      ref="5-1">轮播图</el-menu-item>
        <el-menu-item index="5-2"
                      ref="5-2">文章</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <img :src="tagsImg"
               class="menu-icon" /><span>促销管理</span>
        </template>
        <el-menu-item index="6-1"
                      ref="6-1">秒杀活动</el-menu-item>
        <el-menu-item index="6-2"
                      ref="6-2">优惠券</el-menu-item>
      </el-submenu>
      <el-menu-item index="7"
                    ref="7">
        <img :src="settingImg"
             class="menu-icon mgt" />系统设置
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {
  Menu,
  Submenu,
  MenuItem,
  // MenuItemGroup,
} from "element-ui";
export default {
  name: 'SideMenu',
  components: {
    'el-menu': Menu,
    'el-submenu': Submenu,
    // 'el-menu-item-group': MenuItemGroup,
    'el-menu-item': MenuItem
  },
  data () {
    return {
      homeImg: require("../../assets/images/menu-room.svg"),
      booksImg: require("../../assets/images/menu-bookmark.svg"),
      listImg: require("../../assets/images/menu-list.svg"),
      accountImg: require("../../assets/images/menu-account.svg"),
      msgImg: require("../../assets/images/menu-message.svg"),
      tagsImg: require("../../assets/images/menu-tags.svg"),
      settingImg: require("../../assets/images/menu-settings.svg"),
      menuList: [{
        title: '首页',
        path: '/'
      }, {
        title: '课程管理',
        path: '/course-list'
      }, {
        title: '订单管理',
        path: '',
        children: [{
          title: '订单',
          path: '/'
        }, {
          title: '退款',
          path: '/'
        }]
      }, {
        title: '用户管理',
        path: '/',
        children: [{
          title: '学员',
          path: '/'
        }, {
          title: '讲师',
          path: '/'
        }]
      }, {
        title: '资讯管理',
        path: '/',
        children: [{
          title: '轮播图',
          path: '/'
        }, {
          title: '文章',
          path: '/'
        }]
      }, {
        title: '促销管理',
        path: '/',
        children: [{
          title: '秒杀活动',
          path: '/'
        }, {
          title: '优惠券',
          path: '/'
        }]
      }, {
        title: '系统设置',
        path: '/'
      }],
      oldPath: '/home'
    }
  },
  methods: {
    handleOpen () {

    },
    handleClose () {

    },
    handleSelect (key, keyPath) {
      let path = this.$refs[keyPath]["$attrs"]["data-link"]
      if (path != this.oldPath) {
        let name = this.$refs[keyPath]["$attrs"]["data-name"]
        this.oldPath = path
        this.$store.store.commit('changeRoute', { path, name })
        this.$router.push(path)
      }
    }
  }
}
</script>

<style  lang="less">
.side-menu {
  width: 100%;
  height: calc(100% - 10px);
  margin-top: 10px;
  .el-menu {
    border: none;
  }
  .el-submenu .el-menu-item,
  .el-submenu__title {
    font-weight: normal;
  }
  .is-active {
    background: #38a28a !important;
    font-weight: bold !important;
  }
  .el-submenu {
    background: transparent !important;
  }
  .el-menu-item:focus,
  .el-menu-item:hover,
  .el-submenu__title:hover {
    background: #38a28a !important;
  }
  .menu-icon {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    margin-top: 3px;
  }
  .mgt {
    margin-top: -1px;
  }
}
</style>