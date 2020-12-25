<template>
  <div class="best-course-container">
    <div class="module-title">
      <div class="title">新课推荐</div>
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
          title: "有意思的Python零基础入门教程",
          desc: "【乐学偶得 创新编程学习】",
          bestImg: require("../../assets/images/new-recommend/4.png"),
        },
        {
          id: 2,
          title: "Pytorch深度学习入门与实战",
          desc: "更新提示： 2020.12.21 更新 Unet",
          bestImg: require("../../assets/images/new-recommend/2.png"),
        },
        {
          id: 3,
          title: "新概念英语第三册 60课全",
          desc: "学英语，新概念就够了",
          bestImg: require("../../assets/images/new-recommend/1.png"),
        },
        {
          id: 4,
          title: "PPT逻辑美学",
          desc: "欢迎你！这可能是云课堂里首个聚",
          bestImg: require("../../assets/images/new-recommend/3.png"),
        },
        {
          id: 5,
          title: "用Power BI的抖音达人",
          desc: "本课程从0开始，讲解了使用Power",
          bestImg: require("../../assets/images/new-recommend/5.png"),
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
