<template>
  <div class="course-list">
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
    <div class="table-div">
      <div class="list-top">
        <div class="title">课程列表</div>
        <el-button type="primary"
                   @click="handleAdd">添加课程</el-button>
      </div>
      <div class="list-container">

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
      searchImg: require("../assets/images/filter.svg")
    }
  },
  methods: {
    handleSearch () {

    },
    handleAdd () {

    }
  }
}
</script>

<style lang="less">
.course-list {
  width: 100%;
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
    height: 1009px;
    padding: 0px;
    display: flex;
    flex-direction: column;
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
    padding: 0px 20px;
    background: red;
  }
}
</style>