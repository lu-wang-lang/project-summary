<template>
  <div class="learn-path-container">
    <div class="module-title">
      <div class="title">
        <span>系统化学习路径</span>
        <span class="sub-title">网易云课堂六大课程体系，让学习有章有序</span>
      </div>
    </div>
    <div class="learn-path">
      <div class="path-item" v-for="(path, index) of list" :key="index">
        <img :src="path.pathImg" class="path-img"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseLive",
  data() {
    return {
      moreImg: require("../../assets/images/right-circle.svg"),
      list: [
        {
          id: 1,
          pathImg: require("../../assets/images/learn-path/1.png"),
        },
        {
          id: 2,
          pathImg: require("../../assets/images/learn-path/2.png"),
        },
        {
          id: 3,
          pathImg: require("../../assets/images/learn-path/3.png"),
        }, {
          id: 4,
          pathImg: require("../../assets/images/learn-path/4.png"),
        }, {
          id: 5,
          pathImg: require("../../assets/images/learn-path/5.png"),
        }, {
          id: 6,
          pathImg: require("../../assets/images/learn-path/6.png"),
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
.learn-path-container {
  width: 100%;
  padding-bottom:10px;
  .learn-path {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .path-item {
      width: calc((100% - 50px) / 6);
      height: 128px;
      cursor: pointer;
      .path-img{
        width: 100%;
        border-radius: @card-border-radius;
      }
    }
  }
}
</style>
