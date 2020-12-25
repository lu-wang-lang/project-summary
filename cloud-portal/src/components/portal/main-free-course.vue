<template>
  <div class="best-course-container">
    <div class="module-title">
      <div class="title">免费好课</div>
    </div>
    <div class="best-course">
      <div class="best-item" v-for="(course, index) of list" :key="index">
        <div class="img-container">
          <img :src="course.bestImg" class="best-img"/>
        </div>
        <div class="content-container">
          <div class="title">{{course.title}}</div>
          <div class="desc">{{course.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeacherFamous",
  data() {
    return {
      moreImg: require("../../assets/images/right-circle.svg"),
      list: [
        {
          id: 1,
          title: "Axure9互联网产品经理",
          desc: "【2019网易产品经理课程】",
          bestImg: require("../../assets/images/free-course/1.png"),
        },
        {
          id: 2,
          title: "吉他入门标准教程",
          desc: "初级入门教程",
          bestImg: require("../../assets/images/free-course/2.png"),
        },
        {
          id: 3,
          title: "全民一起VBA基础篇",
          desc: "VBA如此易学、如此实用",
          bestImg: require("../../assets/images/free-course/3.png"),
        },
        {
          id: 4,
          title: "微信公众号—零基础全面系统教学",
          desc: "带你变身运营达人",
          bestImg: require("../../assets/images/free-course/4.png"),
        },
        {
          id: 5,
          title: "PR视频剪辑快速入门",
          desc: "制作属于自己的视频作品",
          bestImg: require("../../assets/images/free-course/5.png"),
        },
      ],
    };
  },
  methods: {
    getMore(type) {},
  },
};
</script>

<style lang="less">
@import url("../../assets/less/animate.min.css");
@import "../../assets/less/common.less";
.best-course-container {
  width: 100%;
  padding-bottom:10px;
  .best-course {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .best-item {
      width: calc((100% - 40px) / 5);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      cursor: pointer;
      .img-container{
        width: 100%;
        overflow: hidden;
        border-radius: @card-border-radius;
        .best-img{
          width: 100%;
          transition: all 0.5s;
          border-radius: @card-border-radius;
        }
      }
      .content-container{
        width: 100%;
        padding: 8px 0px;
        box-sizing: border-box;
        .title{
          font-size: @normal-font-size;
          margin-bottom: 3px;
          color:#333;
        }
        .desc{
          font-size: @small-font-size;
          color:#888;
        }
      }
    }
    .best-item:hover .best-img{
      transform: scale(1.2);
      transform-origin: center;
      transition: all 0.3s;
    }
  }
}
</style>
