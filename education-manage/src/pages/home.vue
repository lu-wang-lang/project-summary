<template>
  <div class="home">
    <div class="title">
      这里是首页
    </div>
    <div class="tab"
         @click="moveCourseList">去课程列表页面</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    moveCourseList () {
      this.$route.push('./courseList')
    }
  }
}
</script>

<style scoped>
.home {
}
</style>