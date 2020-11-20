<template>
  <div id="app">
   <div class="app-top">
      <div class="app-name">教育后台管理系统</div>
      <div class="app-elements">
        <i class="el-icon-bell message-icon"></i>
        <div class="">
          <div class="user-img"></div>
          <div class="user-name"></div>
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
import SideMenu from '@/components/Home/sideMenu'
export default {
  name: 'App',
  components:{
    SideMenu
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
      
      .message-icon{
        font-size: 20px;
        color:white;
        width: 30px;
        height: 20px;
        border-right: 1px solid white;
        display: inline-block;
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
    .app-container {
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
