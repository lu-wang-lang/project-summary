<template>
  <div class="portal">
    <portal-header></portal-header>
    <portal-banner></portal-banner>
    <div class="main-container" :style="'min-height:' + minHeight">
      <teacher-famous></teacher-famous>
      <course-live></course-live>
      <learn-path></learn-path>
      <micro-major></micro-major>
      <div class="recommend">
        <img :src="recommendImg"/>
      </div>
      <series-course></series-course>
      <best-course></best-course>
    </div>
    <portal-footer></portal-footer>
  </div>
</template>

<script>
import PortalHeader from "../components/portal/header";
import PortalBanner from "../components/portal/banner";
import TeacherFamous from "../components/portal/main-famous-teacher";
import CourseLive from "../components/portal/main-course-live";
import LearnPath from "../components/portal/main-learn-path.vue";
import MicroMajor from "../components/portal/main-micro-major";
import SeriesCourse from "../components/portal/main-series-course";
import BestCourse from "../components/portal/main-best-course.vue";
import PortalFooter from "../components/portal/footer";
export default {
  name: "Portal",
  components: {
    PortalHeader,
    PortalBanner,
    TeacherFamous,
    CourseLive,
    LearnPath,
    MicroMajor,
    SeriesCourse,
    BestCourse,
    PortalFooter,
  },
  data() {
    return {
      minHeight: "0px",
      recommendImg:require("../assets/images/recommend.jpg"),
    };
  },
  mounted() {
    let height =
      (document.body.clientHeight || document.documentElement.clientHeight) - 656; // -112 - 184 - 360
    this.minHeight = height + "px";
  },
};
</script>

<style lang="less">
@import url("../assets/less/animate.min.css");
@import "../assets/less/common.less";
.portal {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-container {
    width: 100%;
    padding: 0px calc((100% - @contentWidth) / 2);
    box-sizing: border-box;
    .recommend{
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
