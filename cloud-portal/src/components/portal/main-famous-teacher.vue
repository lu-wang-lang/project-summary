<template>
  <div class="famous-teacher-container">
    <div class="module-title">
      <div class="title">名师公开课</div>
      <div class="more" @click="getMore('teacher')">
        更多 <img :src="moreImg" class="img-more" />
      </div>
    </div>
    <div class="teacher-container">
      <div class="teacher-item" v-for="(teacher, index) of list" :key="index">
        <div class="teacher-img">
          <img :src="teacher.teacherImg" />
        </div>
        <div class="right-container">
          <div class="time">{{ teacher.time }}</div>
          <div class="title">{{ teacher.title }}</div>
          <div class="name">
            {{ teacher.teacher }}
            <span class="position">{{ teacher.position }}</span>
          </div>
          <div class="desc" v-html="teacher.desc"></div>
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
          time: "12月28日 20:00",
          title: "3天播音配音训练营",
          teacher: "奶昔",
          position: "配音女神",
          desc: "浙江传媒学院影视配音专业，配音女神",
          teacherImg: require("../../assets/images/teacher/1.png"),
        },
        {
          id: 2,
          time: "明天 20:00",
          title: "5小时get高能英语技巧",
          teacher: "爱丽丝",
          position: "王室口音",
          desc: "爱尔兰都柏林大学&nbsp&nbsp&nbsp讲师",
          teacherImg: require("../../assets/images/teacher/2.png"),
        },
        {
          id: 3,
          time: "12月28日 20:00",
          title: "1个公式，轻松学会基金股票投资",
          teacher: "有钱君",
          position: "网易理财学堂创始人",
          desc: "月薪5000也能弯道超车",
          teacherImg: require("../../assets/images/teacher/3.png"),
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
.course-live-container {
  width: 100%;
  padding-bottom:10px;
  margin-top:-10px;
  .course-live {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .teacher-item {
      width: calc((100% - 20px) / 3);
      height: 125px;
      border-radius: @card-border-radius;
      display: flex;
      padding: 15px;
      box-sizing: border-box;
      cursor: pointer;
      .teacher-img {
        width: 80px;
        margin-right: 20px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .right-container{
        flex:1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        font-size: @normal-font-size;
        color:#333;
        .time{
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          .line{
            margin-left: 10px;
            color:#ccc;
          }
          .open{
            color:@theme-color;
            margin-left: 10px;
            cursor: pointer;
          }
        }
        .title{
          font-size: @big-font-size;
          margin-bottom: 8px;
        }
        .name{
          font-size: @small-font-size;
          color:#666;
        }
      }
    }
    .teacher-item:hover{
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
      border-color: #fff;
    }
  }
}
</style>
