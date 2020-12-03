<template>
  <div class="portal">
    <div class="header">
      <div class="header-logo">
        <p>网易云课堂</p>
        <p>我的职业课堂</p>
      </div>
      <div class="header-search">
        <div class="search-container"></div>
      </div>
      <div class="header-parts">
        <span style="cursor: pointer;">我的学习</span>
        <i class="icon el-icon-bell" ></i>
        <i class="icon el-icon-shopping-cart-2"></i>
        <div class="user-container">
          <div class="img-container">
            <img :src="avatarImg"/>
          </div>
          <span>王小塔</span>
        </div>
      </div>
    </div>
    <div class="banner"></div>
    <div class="container"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Portal',
  data () {
    return {
      avatarImg:require('../assets/images/avatar.png')
    }
  }
}
</script>

<style lang="less">
@import '../assets/less/common.less';
.portal{
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header{
    width: @contentWidth;
    height: 112px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .header-logo{
      width: 145px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p:first-child{
        font-size: 28px;
        letter-spacing: 0.5px;
      }
      p:last-child{
        font-size: @normal-font-size;
        color:#A6A4A4;
        letter-spacing: 2px;
      }
    }
    .header-search{
      flex:1;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .header-search{
      display: flex;
      align-items: center;
      justify-content: center;
      .search-container{
        width: 397px;
        height: 36px;
        border: 1px solid #4BAF50;
        border-radius: 20px;
      }
    }
    .header-parts{
      width: 255px;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: @normal-font-size;
      color:#5B5B5B;
      .icon{
        font-size: 20px;
        margin-left: 16px;
        cursor: pointer;
      }
      .user-container{
        margin-left: 16px;
        border-left: 1px solid #bbbbbe;
        display: flex;
        align-items: center;
        cursor: pointer;
        .img-container{
          width: 30px;
          height:30px;
          border: 1px solid #bbbbbe;
          border-radius: 50%;
          margin: 0px 10px;
          padding: 2px;
          box-sizing:border-box ;
          img{
            width: 100%;
          }
        }
      }
    }
  }
  .footer{}
}
</style>
