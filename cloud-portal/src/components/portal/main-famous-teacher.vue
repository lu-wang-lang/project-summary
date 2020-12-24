<template>
  <div class="famous-teacher-container">
    <div class="module-title">
      <div class="title">名师公开课</div>
      <div class="more" @click="getMore('teacher')">
        更多 <img :src="moreImg" class="img-more" />
      </div>
    </div>
    <div class="teacher-container"></div>
  </div>
</template>

<script>
export default {
  name: "TeacherFamous",
  data() {
    return {
      moreImg: require("../../assets/images/right-circle.svg"),
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
.famous-teacher-container {
  widows: 100%;
}
</style>
