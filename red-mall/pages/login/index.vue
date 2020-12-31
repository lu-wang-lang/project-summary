<template>
  <view class="login-container">
    <image class="logo-img" :src="logoImg"></image>
    <view class="title">好吃好喝</view>
    <view class="sub-title">一家只卖当日菜的社区电商</view>
    <view class="btn-container">
      <button class="phone-btn btn" @click="phoneLogo">手机号登录</button>
      <button
        class="wechat-btn btn"
        open-type="getPhoneNumber"
        @getphonenumber="onGetPhoneNumber"
        withCredentials="true"
        type="default"
      >
        微信登录
      </button>
    </view>
  </view>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      logoImg: require("../../assets/images/logo.png"),
    };
  },
  methods: {
    phoneLogo() {},
    wechatLogo() {},
    onGetPhoneNumber(e) {
      debugger
			  let _this = this;
			  if (e.detail.errMsg == "getPhoneNumber:ok") {
			    uni.checkSession({
			      success(res) {
              console.log(e, res,_this.jscode, "code");
              uni.showLoading({
                title: '登录中'
              });
              // _this.wechatLoginGetData(e)
			      },
			      fail(err) {
              uni.hideLoading();
              // _this.initData(2,e,1);
			      }
			    })
			  } else {
			    uni.showToast({
			      icon: 'none',
			      title: '微信授权登录失败'
			    });
			  }
			},
  },
};
</script>

<style lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 160upx;
  box-sizing: border-box;
  .logo-img {
    width: 290upx;
    height: 290upx;
    border-radius: 50%;
    margin-bottom: 44upx;
  }
  .title {
    font-size: 40upx;
    color: #101010;
    margin-bottom: 24upx;
  }
  .sub-title {
    font-size: $font-base;
    color: #101010;
    margin-bottom: 104upx;
  }
  .btn-container {
    display: flex;
    align-items: center;
    .btn {
      width: 312upx;
      height: 80upx;
      border-radius: 40upx;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 40upx;
      font-weight: bold;
    }
    .phone-btn {
      background: #fa4f51;
      margin-right: 26upx;
    }
    .wechat-btn {
      background: #6cae0c;
    }
  }
}
</style>
