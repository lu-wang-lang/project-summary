<template>
  <view class="good-detail-container">
    <view class="main-container">

    </view>
    <view class="footer"></view>
  </view>
</template>

<script>
export default {
  name:'GoodDetail',
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
.good-detail-container{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .main-container{
    width: 100%;
    flex:1;
    overflow-y: auto;
  }
  .footer{
    width: 100%;
    height: 100upx;
    border:1px solid #eee;
  }
}
</style>