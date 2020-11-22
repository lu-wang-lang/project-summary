<template>
  <div id="app">
    <div class="app-top">
      <div class="app-name">教育后台管理系统</div>
      <div class="app-elements">
        <el-badge :value="2"
                  :max="99"
                  class="item badge-container">
          <i class="el-icon-bell message-icon"></i>
        </el-badge>
        <div class="user-container">
          <img :src="userImg"
               class="user-img" />
          <div class="user-name">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-user"
                                  @click.native="clickDropMenu('user')">个人信息</el-dropdown-item>
                <el-dropdown-item icon="el-icon-switch-button"
                                  @click.native="clickDropMenu('logout')">安全退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="app-container">
      <div class="app-left">
        <side-menu></side-menu>
      </div>
      <div class="main-container">
        <el-breadcrumb separator="/"
                       class="bread">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <!-- <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
        </el-breadcrumb>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
} from "element-ui";
import SideMenu from '@/components/Home/sideMenu'
export default {
  name: 'App',
  components: {
    SideMenu,
    'el-dropdown': Dropdown,
    'el-dropdown-menu': DropdownMenu,
    'el-dropdown-item': DropdownItem,
    'el-badge': Badge,
    'el-breadcrumb': Breadcrumb,
    'el-breadcrumb-item': BreadcrumbItem
  },
  data () {
    return {
      userName: '王小塔',
      userImg: require('./assets/images/avatar.png')
    }
  },
  methods: {
    clickDropMenu (type) {
      switch (type) {
        case 'user':
          alert(`跳转${type}页面`)
          break
        case 'logout':
          alert(`安全退出`)
          break
        default: break
      }
    }
  }
}
</script>

<style lang="less">
body {
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;
}
#app {
  width: 100%;
  height: 100%;
  .app-top {
    width: 100%;
    height: 60px;
    background: #38a28a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .app-name {
      width: 240px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      color: white;
    }
    .app-elements {
      width: 220px;
      height: 50px;
      padding: 15px 0px;
      padding-right: 57px;
      display: flex;
      align-items: center;
      .badge-container {
        width: 55px;
        .message-icon {
          font-size: 23px;
          color: white;
          width: 55px;
          border-right: 1px solid white;
          display: inline-block;
          cursor: pointer;
        }
        .el-badge__content.is-fixed {
          right: 40px;
        }
        .el-badge__content {
          background: #ff9502;
        }
      }
      .user-container {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 25px;
        .user-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .user-name {
          margin-left: 10px;
          .el-dropdown {
            display: inline-block;
            position: relative;
            color: #606266;
            font-size: 14px;
            color: white;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
          }
          .el-dropdown span::selection {
            background: transparent;
          }
        }
      }
    }
  }
  .app-container {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    overflow: hidden;
    .app-left {
      width: 240px;
      background: rgb(67, 74, 80);
    }
    .main-container {
      padding: 20px;
      flex: 1;
      overflow-y: auto;
      background: #ededed;
      .bread {
        width: 100%;
        height: 25px;
      }
      .el-breadcrumb__inner {
        font-weight: 700;
      }
    }
  }
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 5px;
  background: rgba(144, 147, 153, 0.7);
}
</style>
