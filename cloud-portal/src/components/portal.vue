<template>
  <div class="portal" @click="handlePortalClick">
    <div class="header">
      <div class="header-logo">
        <span>网易云课堂</span>
        <span>我的职业课堂</span>
      </div>
      <div class="header-search">
        <el-select class="search-type" v-model="searchData.type" @change="changeSearchType">
          <el-option 
            v-for="(option,index) of searchTypeList" 
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
          <img :src="searchImg"/>
          <span>搜索</span>
        </div>
        <div class="search-tips" ref="searchTips">
          <ul class="top-ul">
            <li class="top-li" v-if="historyTips.length>0">
              <div class="top-title">
                历史搜索
                <div class="clear-history" @click="clearHistory">
                  <i class="el-icon-delete"></i>
                  清空
                </div>
              </div>
              <ul class="sub-ul">
                <li class="sub-li"
                    v-for="(tip,idx) of historyTips"
                    :key="idx"
                    @click="clickSearchTip(tip.content)">{{tip.content}}</li>
              </ul>
            </li>
            <li class="top-li">
              <div class="top-title">
                热门搜索
              </div>
              <ul class="sub-ul">
                <li class="sub-li"
                    v-for="(tip,idx) of searchTypeList[selectedIndex].searchTips"
                    :key="idx"
                    @click="clickSearchTip(tip.content)">{{tip.content}}</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="header-parts">
        <span class="learn">我的学习</span>
        <el-badge :value="2" :max="10" class="badge-item">
          <i class="icon el-icon-bell" ></i>
        </el-badge>
        <el-badge :value="10" :max="10" class="badge-item">
          <i class="icon el-icon-shopping-cart-2"></i>
        </el-badge>
        <div class="user-container">
          <div class="img-container">
            <img :src="avatarImg"/>
          </div>
          <span>王小塔</span>
        </div>
      </div>
    </div>
    <div class="main-container" :style="'min-height:'+minHeight">
      <transition name="fade">
        <div
          class="swiper-container" 
          :style="'background:'+swiper.background"
        >
          <div></div>
          <img :src="swiper.imgSrc" class="swiper-img"/>
        </div>
      </transition>
    </div>
    <div class="footer">
      <div class="container">
        <div class="footer-left">
          <div class="desc-top">网易云课堂 是网易公司（163.com）旗下专注职业技能提升的在线学习平台。</div>
          <div class="alink">
            <a 
              v-for="(alink,index) of alinks" 
              :key="index"
              :href="alink.href"
              target="_blank" 
              :data-index="alink.title"
            >{{alink.title}}</a>
          </div>
          <pre class="bottom-desc">©1997-2020 网易公司 版权所有     粤B2-20090191-18     工业和信息化部备案管理系统网站</pre>
        </div>
        <div class="footer-right">
          <div class="download">
            <div class="download-item">
              <img :src="appleImg"/>
              <div class="download-content">
                <span>App Store</span>
                <span>下载</span>
              </div>
            </div>
            <div class="download-item">
              <img :src="androidImg"/>
              <div class="download-content">
                <span>Android</span>
                <span>下载</span>
              </div>
            </div>
          </div>
          <div class="contact">
            关注我们：
            <span class="contact-item">
              <img :src="weixinImg"/>
            </span>
            <span class="contact-item">
              <img :src="weiboImg"/>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Select, 
  Option,
  OptionGroup,
  Badge,
} from 'element-ui'
// import Swiper from 'swiper';
// import swiperAnimate from '../utils/swiper-animate'
export default {
  name: 'Portal',
  components:{
    'el-select':Select,
    'el-option':Option,
    'el-option-group':OptionGroup,
    'el-badge':Badge,
  },
  data () {
    return {
      minHeight:'0px',
      avatarImg:require('../assets/images/avatar.png'),
      searchImg:require('../assets/images/mb-search.svg'),
      appleImg:require('../assets/images/apple.svg'),
      androidImg:require('../assets/images/android.svg'),
      weixinImg:require('../assets/images/weixin.svg'),
      weiboImg:require('../assets/images/weibo.svg'),
      searchTypeList:[{
        type:'course',
        name:'课程',
        placeholder:'Python零基础入门',
        searchTips:[{
          id:1,
          content:'Python零基础入门'
        },{
          id:2,
          content:'金融量化'
        },{
          id:3,
          content:'思维导图速学指南'
        },{
          id:4,
          content:'股票量化'
        }]
      },{
        type:'school',
        name:'网校',
        placeholder:'搜索网校',
        searchTips:[{
          id:1,
          content:'达内'
        },{
          id:2,
          content:'骇客'
        },{
          id:3,
          content:'软件'
        },{
          id:4,
          content:'网校'
        },{
          id:5,
          content:'考研'
        }]
      }],
      searchData:{
        type:'course',
        content:''
      },
      selectedIndex:0,
      historyTips:[],
      selectSwiperIndex:0,
      swiperTimer:null,
      swiper:[],
      swiperList:[{
        imgSrc:require('../assets/images/banner/1.png'),
        title:'',
        id:1,
        background:'#272D16'
      },{
        imgSrc:require('../assets/images/banner/2.png'),
        title:'',
        id:2,
        background:'#FF3A24'
      },{
        imgSrc:require('../assets/images/banner/3.jpg'),
        title:'',
        id:3,
        background:'#1A8FA6'
      },{
        imgSrc:require('../assets/images/banner/4.jpg'),
        title:'',
        id:4,
        background:'#2C64FF'
      }],
      alinks:[{
        title:'关于我们',
        href:'//study.163.com/about/aboutus.htm#/about?aboutType=1'
      },{
        title:'联系我们',
        href:'//study.163.com/about/aboutus.htm#/about?aboutType=2'
      },{
        title:'帮助中心',
        href:'//study.163.com/about/aboutus.htm#/about?aboutType=4'
      },{
        title:'中国大学MOOC',
        href:'//www.icourse163.org/'
      },{
        title:'网易卡搭编程',
        href:'//geek.163.com/?utm_source=study.163.com&amp;utm_medium=web_bottombanner&amp;utm_campaign=business&amp;utm_content=qxq20180720'
      },{
        title:'极客战记',
        href:'//codecombat.163.com/'
      },{
        title:'有道智云',
        href:'//ai.youdao.com/gw.s'
      }]
    }
  },
  methods:{
    //搜索类型切换事件  --searchType
    changeSearchType(val){
      this.selectedIndex = this.searchTypeList.findIndex(c=>c.type===val) > -1
        ?this.searchTypeList.findIndex(c=>c.type===val):0
      this.focusSearchInput()
    },
    //点击搜索中的tip内容 --需要对搜索类型也进行判断处理
    clickSearchTip(content){
      let idx = this.historyTips.findIndex(c=>c.content===content)
      if(idx===-1){
        this.historyTips.unshift({ content })
        if(this.historyTips.length>2){
          this.historyTips.pop()
        }
      }
      window.location.href=`https://study.163.com/provider-search?keyword=${content}`
    },
    //清空搜索历史
    clearHistory(){
      this.historyTips = []
    },
    //搜索
    handleSearch(){
      if(this.searchData.content){
        this.clickSearchTip(this.searchData.content)
      }
    },
    focusSearchInput(){
      this.$refs['searchTips'].style.display="block"
    },
    handlePortalClick(){
      this.$refs['searchTips'].style.display="none"
    },
  },
  mounted(){
    let height = (document.body.clientHeight||document.documentElement.clientHeight)-112-184
    this.minHeight = height+'px'

    this.swiper = this.swiperList[this.selectSwiperIndex]
    if(this.selectSwiperIndex <  this.swiperList.length - 1){
      this.selectSwiperIndex++
    }else{
      this.selectSwiperIndex = 0
    }
    let _this = this
    this.swiperTimer = setInterval(() => {
      _this.swiper = _this.swiperList[_this.selectSwiperIndex]
      if(_this.selectSwiperIndex <  _this.swiperList.length - 1){
        _this.selectSwiperIndex++
      }else{
        _this.selectSwiperIndex = 0
      }
    },3000)
  }
}
</script>

<style lang="less">
@import url('../assets/less/animate.min.css');
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
    display: flex;
    align-items: center;
    .header-logo{
      width: 145px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span:first-child{
        font-size: 28px;
        letter-spacing: 0.5px;
      }
      span:last-child{
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
      position: relative;
      .search-type{
        width: 70px;
        .el-input__suffix{
          right:3px;
        }
        .el-input__suffix-inner{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .el-input__inner{
          height: 36px;
          text-align: right;
          padding: 8px 20px 7px 7px;
          border: 1px solid @border-color;
          border-right: none;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          color:@normal-color;
        }
        .el-input__icon{
          width: 14px;
        }
      }
      .search-input{
        width: 240px;
        height: 36px;
        padding: 0px 5px;
        color:@normal-color;
        font-size: @normal-font-size;
        border: 1px solid @border-color;
        border-left: none;
      }
      .search-input::selection{
        background: #0E6BDA;
        color:white;
      }
      .search-input:focus{
        border: 1px solid @border-color;
        border-left: none;
        outline: none;
      }
      .search-icon{
        width: 80px;
        height: 36px;
        display: flex;
        border: 1px solid @theme-color;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        background: @theme-color;
        color:white;
        align-items: center;
        font-size: @normal-font-size;
        cursor: pointer;
        img{
          width: 18px;
          margin-right: 2px;
          margin-left: 10px;
        }
      }
      .search-icon:hover{
        opacity: 0.9;
      }
      .search-tips{
        width: 300px;
        position: absolute;
        background: white;
        top: 76px;
        left: 222px;
        z-index: 999;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
        border-radius: 2px;
        padding-bottom:10px;
        display: none;
        .top-ul{
          width: 100%;
          display: flex;
          flex-direction: column;
          .top-li{
            .top-title{
              display: flex;
              justify-content: space-between;
              align-items:center ;
              height:50px;
              font-size: 12px;
              color:#999;
              padding: 0px 16px;
              .clear-history{
                cursor: pointer;
              }
            }
            .sub-ul{
              width: 100%;
              display: flex;
              flex-direction: column;
              .sub-li{
                height: 50px;
                padding: 0px 0px 0px 16px;
                color:@normal-color;
                font-size: 14px;
                display: flex;
                align-items: center;
                cursor: pointer;    
              }
              .sub-li:hover{
                color:@theme-color;
                background: @light-gray-color;
              }
            }
          }
        }
      }
    }
    .header-parts{
      width: 255px;
      height: 100%;
      display: flex;
      align-items: center;
      font-size: @normal-font-size;
      color:@normal-color;
      .learn{
        cursor: pointer;
      }
      .badge-item{
        margin-left: 15px;
        .icon{
          font-size: 20px;
          cursor: pointer;
        }
      }
      .user-container{
        margin-left: 25px;
        border-left: 1px solid @border-color;
        display: flex;
        align-items: center;
        cursor: pointer;
        .img-container{
          width: 30px;
          height:30px;
          border: 1px solid @border-color;
          border-radius: 50%;
          margin: 0px 10px;
          padding: 2px;
          img{
            width: 100%;
          }
        }
      }
      .learn:hover,
      .badge-item:hover,
      .user-container:hover{
        color:@theme-color;
        transition: 0.2s all;
      }
    }
  }
  .main-container{
    width: 100%;
    .swiper-container {
      width: 100%;
      height: 360px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .swiper-img{
        width: @contentWidth;
        height: 100%;
      }
      .fade-enter-active {
        animation: bounce-in .5s;
      }
      .fade-leave-active { 
        animation: bounce-in .5s reverse;
      }
    }
  }
  .footer{
    width: 100%;
    height: 184px;
    background: #474443;
    .container{
      width: @contentWidth;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      .footer-left{
        display: flex;
        flex-direction: column;
        .desc-top{
          color:white;
          margin-bottom: 17px;
        }
        .alink{
          display: flex;
          a{
            text-decoration: none;
            cursor: pointer;
            padding-right: 15px;
            color:white;
          }
          a:hover{
            text-decoration: underline;
          }
        }
        .bottom-desc{
          color:#999;
          margin-top: 14px;
          font-size: @normal-font-size;
        }
      }
      .footer-right{
        .download{
          display: flex;
          justify-content: flex-end;
          margin-bottom: 27px;
          .download-item{
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
            img{
              width: 24px;  
              height: 24px;
            }
            .download-content{
              display: flex;
              flex-direction: column;
              color: white;
              font-size: 12px;
              margin-left: 10px;
            }
          }
        }
        .contact{
          color:white;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .contact-item{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: white;
            display: flex;
            justify-content:center;
            align-items: center;
            margin-left: 5px;
            cursor: pointer;
            img{
              width: 70%;
            }
          }
        }

      }
    }
  }
}

.el-select-dropdown__item.selected{
  color:@theme-color;
}
</style>
