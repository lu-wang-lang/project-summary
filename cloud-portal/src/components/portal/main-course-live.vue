<template>
  <div class="course-live-container">
    <div class="module-title">
      <div class="title">课堂直播</div>
      <div class="more" @click="getMore('courseLive')">
        更多 <img :src="moreImg" class="img-more" />
      </div>
    </div>
    <div class="course-live">
      <div class="teacher-item" v-for="(teacher, index) of list" :key="index">
        <div class="teacher-img">
          <img :src="teacher.teacherImg" />
        </div>
        <div class="right-container">
          <div class="time">
            <span>{{ teacher.time }}</span>
            <span class="line">|</span>
            <span class="open">开启提醒</span>
          </div>
          <div class="title">{{ teacher.title }}</div>
          <div class="name">
            {{ teacher.teacher }}
          </div>
          <div class="desc" v-html="teacher.desc"></div>
        </div>
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
          time: "今天 20:00",
          title: "加快项目进度-大型vue项目api层架构解析",
          teacher: "唐磊 网易前端高级讲师",
          teacherImg: require("../../assets/images/course-live/1.jpg"),
        },
        {
          id: 2,
          time: "今天 20:00",
          title: "安全工程师成长之路",
          teacher: "苏斌 网易资深安全工程师",
          teacherImg: require("../../assets/images/course-live/2.png"),
        },
        {
          id: 3,
          time: "今天 20:00",
          title: "【摄影干货】：拍好新年的第一缕阳光",
          teacher: "咔图 云课堂首席摄影讲师",
          teacherImg: require("../../assets/images/course-live/3.png"),
        }, {
          id: 4,
          time: "今天 20:00",
          title: "入行必听：UI设计师5大避坑问题",
          teacher: "aiki 网易特邀设计师",
          teacherImg: require("../../assets/images/course-live/4.jpg"),
        }, {
          id: 5,
          time: "今天 20:00",
          title: "用Python做股票指标分析和买卖时机选择",
          teacher: "网易特邀数据科学专家",
          teacherImg: require("../../assets/images/course-live/5.jpg"),
        }, {
          id: 6,
          time: "今天 20:00",
          title: "一节课教你用Excel搞定年终总结！",
          teacher: "王佩丰 微软全球最有价值专家（MVP)",
          teacherImg: require("../../assets/images/course-live/6.jpg"),
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
          line-height: 24px;
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
