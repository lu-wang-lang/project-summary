<template>
  <div class="portal">
    <portal-header></portal-header>
    <portal-banner></portal-banner>
    <div class="main-container" :style="'min-height:' + minHeight">
      <teacher-famous></teacher-famous>
      <course-live></course-live>
    </div>
    <portal-footer></portal-footer>
  </div>
</template>

<script>
import PortalHeader from "../components/portal/header";
import PortalBanner from "../components/portal/banner";
import TeacherFamous from "../components/portal/main-famous-teacher";
import CourseLive from "../components/portal/main-course-live";
import PortalFooter from "../components/portal/footer";
export default {
  name: "Portal",
  components: {
    PortalHeader,
    PortalBanner,
    TeacherFamous,
    CourseLive,
    PortalFooter,
  },
  data() {
    return {
      minHeight: "0px",
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
  }
}
</style>
