<template>
  <div class="best-course-container">
    <div class="module-title">
      <div class="title">精选好课</div>
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
          title: "普通家庭投资股票的正确姿势",
          desc: "稳扎稳打参与股票投资",
          bestImg: require("../../assets/images/best-course/1.png"),
        },
        {
          id: 2,
          title: "解读金字塔原理",
          desc: "打造结构化思维",
          bestImg: require("../../assets/images/best-course/2.png"),
        },
        {
          id: 3,
          title: "零基础学画画!提升画功审美创意",
          desc: "从这里原创属于自己的绘画作品",
          bestImg: require("../../assets/images/best-course/3.png"),
        },
        {
          id: 4,
          title: "跟橘子学PS",
          desc: "云课堂行家精品课，PS入门必备",
          bestImg: require("../../assets/images/best-course/4.png"),
        },
        {
          id: 5,
          title: "躺着也赚钱的基金投资课",
          desc: "60多万人跟学 98%以上获利",
          bestImg: require("../../assets/images/best-course/5.png"),
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
