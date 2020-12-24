<template>
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
</template>
<script>
export default {
  name: "PortalFooter",
  data() {
    return {
      appleImg: require("../../assets/images/apple.svg"),
      androidImg: require("../../assets/images/android.svg"),
      weixinImg: require("../../assets/images/weixin.svg"),
      weiboImg: require("../../assets/images/weibo.svg"),
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
};
</script>
<style lang="less">
@import url("../../assets/less/animate.min.css");
@import "../../assets/less/common.less";
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
</style>
