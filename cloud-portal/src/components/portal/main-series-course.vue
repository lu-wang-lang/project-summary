<template>
  <div class="series-course-container">
    <div class="module-title">
      <div class="title">系列课程</div>
    </div>
    <div class="series-course">
      <div class="series-item" v-for="(series, index) of list" :key="index">
        <div class="img-container">
          <lazy-image :src="series.seriesImg" class="series-img"/>
        </div>
        <div class="content">
          <div class="title">{{series.title}}</div>
          <div class="desc">{{series.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from '../common/lazy-image.vue';
export default {
  name: "TeacherFamous",
  components:{
    LazyImage
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: "Office从入门到精通",
          desc: "一站搞定PPT、Excel、Word",
          seriesImg:require("../../assets/images/series-course/1.png"),
        },
        {
          id: 2,
          title: "Tensorflow深度学习",
          desc: "通俗易懂+系统学习+贴近实战",
          seriesImg:require("../../assets/images/series-course/2.png"),
        },
        {
          id: 3,
          title: "影视制作进阶班",
          desc: "学会自媒体的普世技能",
          seriesImg:require("../../assets/images/series-course/3.png"),
        },
        {
          id: 4,
          title: "Project项目管理",
          desc: "教你最地道的Project项目管理技能",
          seriesImg:require("../../assets/images/series-course/4.png"),
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
.series-course-container {
  width: 100%;
  padding-bottom:10px;
  .series-course {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .series-item {
      width: calc((100% - 30px) / 4);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      cursor: pointer;
      position: relative;
      .img-container{
        width: 100%;
        overflow: hidden;
        border-radius: @card-border-radius;
        .series-img{
          width: 100%;
          transition: all 0.5s;
          border-radius: @card-border-radius;
        }
      }
      .content{
        width: 90%;
        height: 70px;
        position: absolute;
        top:80px;
        margin-left: 5%;
        background: url("../../assets/images/series-course/white.png") no-repeat;
        background-size:100% 100%;
        .title{
          margin: 14px 0px 3px;
          text-align: center;
          color:#333;
          font-size: 18px;
        }
        .desc{
          text-align: center;
          color:#666;
          font-size: @normal-font-size;
        }
      }
    }
    .series-item:hover .series-img{
      transform: scale(1.2);
      transform-origin: center;
      transition: all 0.3s;
    }
  }
}
</style>
