<template>
  <div class="micro-major-container">
    <div class="module-title">
      <div class="title">微专业</div>
      <div class="more" @click="getMore('teacher')">
        更多 <img :src="moreImg" class="img-more" />
      </div>
    </div>
    <div class="micro-major">
      <div class="major-item" v-for="(major, index) of list" :key="index">
        <div class="img-container">
          <lazy-image :src="major.majorImg" class="marjor-img"/>
        </div>
        <div class="content-container">
          <div class="title">{{major.title}}</div>
          <div class="desc">{{major.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from '../common/lazy-image.vue';
export default {
  name: "TeacherFamous",
  components:{LazyImage},
  data() {
    return {
      moreImg: require("../../assets/images/right-circle.svg"),
      list: [
        {
          id: 1,
          title: "UI设计师",
          desc: "打通全链路，成为独当一面的核心设计师",
          majorImg: require("../../assets/images/micro-major/1.png"),
        },
        {
          id: 2,
          title: "数据分析-高薪全能班",
          desc: "21周高效掌握数据精英必备技能",
          majorImg: require("../../assets/images/micro-major/2.png"),
        },
        {
          id: 3,
          title: "高级前端开发工程师",
          desc: "构建一线互联网企业Web前端全栈知识体系",
          majorImg: require("../../assets/images/micro-major/3.png"),
        },
        {
          id: 4,
          title: "安全工程师 · 21周特训营",
          desc: "网易安全部门打造：理论+工具+项目全覆盖",
          majorImg: require("../../assets/images/micro-major/4.png"),
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
.micro-major-container {
  width: 100%;
  padding-bottom:10px;
  .micro-major {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .major-item {
      width: calc((100% - 30px) / 4);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      cursor: pointer;
      .img-container{
        width: 100%;
        height: 165px;
        overflow: hidden;
        border-top-left-radius: @card-border-radius;
        border-top-right-radius: @card-border-radius;
        .marjor-img{
          width: 100%;
          transition: all 0.5s;
          border-top-left-radius: @card-border-radius;
          border-top-right-radius: @card-border-radius;
        }
      }
      .content-container{
        width: 100%;
        height: 65px;
        border:1px solid #eee;
        border-top: none;
        padding: 8px 0px 12px 10px;
        box-sizing: border-box;
        .title{
          font-size: @big-font-size;
          margin-bottom: 3px;
          color:#333;
        }
        .desc{
          font-size: @normal-font-size;
          color:#666;
        }
      }
    }
    .major-item:hover .marjor-img{
      transform: scale(1.2);
      transform-origin: center;
      transition: all 0.3s;
    }
  }
}
</style>
