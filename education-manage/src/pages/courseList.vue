<template>
  <div class="course-list"
       ref="courseList">
    <div class="search-div">
      <div class="title">课程筛选</div>
      <div class="search-container">
        <el-form :inline="true"
                 :model="searchData"
                 class="demo-form-inline">
          <el-form-item label="上架状态">
            <el-select v-model="searchData.status"
                       placeholder="请选择">
              <el-option v-for="item in optionsList"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="上传时间">
            <el-date-picker v-model="searchData.time"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始时间"
                            end-placeholder="结束时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-input v-model="searchData.courseName"
                      placeholder="请输入课程标题或关键词"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"
                       @click="handleSearch">
              <img :src="searchImg"
                   style="vertical-align: -2px;" />
              筛选
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="table-div"
         ref="tableDiv">
      <div class="list-top">
        <div class="title">课程列表</div>
        <el-button type="primary"
                   @click="handleAdd">添加课程</el-button>
      </div>
      <div class="list-container">
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="courseNumber"
                           label="编号"
                           width="80">
          </el-table-column>
          <el-table-column prop="courseName"
                           label="名称"
                           width="180">
          </el-table-column>
          <el-table-column prop="imgSrc"
                           label="封面"
                           width="180">
          </el-table-column>
          <el-table-column prop="status"
                           label="状态"
                           width="100">
          </el-table-column>
          <el-table-column prop="price"
                           label="价格"
                           width="100">
          </el-table-column>
          <el-table-column prop="saleCount"
                           label="销量"
                           width="100">
          </el-table-column>
          <el-table-column prop="uploadAccount"
                           label="上传人"
                           width="100">
          </el-table-column>
          <el-table-column prop="uploadTime"
                           label="上传时间"
                           width="180">
          </el-table-column>
          <el-table-column label="操作">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Select,
  Option,
  Form,
  FormItem,
  Input,
  Button,
  DatePicker,
  Table,
  TableColumn,
} from 'element-ui'
export default {
  name: 'CourseList',
  components: {
    'el-select': Select,
    'el-option': Option,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-input': Input,
    'el-button': Button,
    'el-date-picker': DatePicker,
    'el-table': Table,
    'el-table-column': TableColumn,
  },
  data () {
    return {
      searchData: {
        status: '',   //上架状态
        courseName: '',//课程标题
        time: [], //上传时间
      },
      optionsList: [{
        value: '1',
        label: '上架'
      }, {
        value: '0',
        label: '下架'
      }],
      searchImg: require("../assets/images/filter.svg"),
      tableData: [{
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '1',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }, {
        courseNumber: '0035432',
        courseName: '墨刀原型竞品课程',
        imgSrc: require('../assets/images/img/course.png'),
        status: '0',
        price: '88.00',
        saleCount: 888,
        uploadAccount: '王小塔',
        uploadTime: '2020.11.24 15:18'
      }],
    }
  },
  methods: {
    handleSearch () {

    },
    handleAdd () {

    }
  },
  mounted () {
    let height = this.$refs.courseList.offsetHeight - 178  //- 20-20-144
    this.$refs.tableDiv.style.height = height + 'px'
  }
}
</script>

<style lang="less">
.course-list {
  width: 100%;
  height: calc(100% - 45px);
  display: flex;
  flex-direction: column;

  .search-div,
  .table-div {
    width: 100%;
    height: 144px;
    background: white;
    margin-top: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px;
  }
  .table-div {
    // height: 1009px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .title {
    width: 50%;
    height: 24px;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
  }

  .search-container {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-size: 14px;
    .el-form-item__label {
      color: #333;
    }
  }
  .list-top {
    height: 64px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
  }
  .list-container {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    padding-top: 0px;
  }
}
</style>