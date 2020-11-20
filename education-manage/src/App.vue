<template>
  <div id="app">
    <div class="app-top">
      <div class="app-name">教育后台管理系统</div>
      <div class="app-elements">
        <el-badge :value="200"
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
                {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
                <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
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
  },
  data () {
    return {
      userName: '王小塔',
      userImg: require('./assets/images/avatar.png')
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
    height: 80px;
    background: #38a28a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .app-name {
      padding: 22px 24px;
      font-size: 24px;
      color: white;
    }
    .app-elements {
      width: 192px;
      height: 50px;
      padding: 15px 0px;
      padding-right: 57px;
      display: flex;
      align-items: center;
      .badge-container {
        width: 55px;
        .message-icon {
          font-size: 25px;
          color: white;
          width: 55px;
          border-right: 1px solid white;
          display: inline-block;
          cursor: pointer;
        }
      }
      .user-container {
        flex: 1;
        display: flex;
        align-items: center;
        padding-left: 20px;
        .user-img {
          width: 50px;
          height: 50px;
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
    height: calc(100% - 80px);
    display: flex;
    .app-left {
      width: 240px;
      background: #4a5259;
    }
    .main-container {
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
