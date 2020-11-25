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
                       @click="handleSearch"
                       size="small">
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
        <div>
          <el-button type="primary"
                     @click="handleAdd"
                     size="small">添加课程</el-button>
          <el-button type="danger"
                     @click="deleteRows"
                     size="small">批量删除</el-button>
        </div>
      </div>
      <div class="list-container">
        <el-table :data="tableData"
                  ref="multipleTable"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column prop="courseNumber"
                           label="编号"
                           width="80">
            <!-- <template slot="header">
              <div style="text-align:center;">编号</div>
            </template> -->
          </el-table-column>
          <el-table-column prop="courseName"
                           label="名称"
                           width="180">
            <template slot-scope="scope">
              <div :title="scope.row.courseName"
                   style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{scope.row.courseName}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="imgSrc"
                           label="封面"
                           width="120">
            <template slot-scope="scope">
              <el-image style="width: 50px;"
                        :src="scope.row.imgSrc"
                        :preview-src-list="[scope.row.imgSrc]">
                <div slot="placeholder"
                     class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
                <div slot="error"
                     class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </template>
          </el-table-column>
          <el-table-column prop="status"
                           label="状态"
                           width="100">
            <template slot-scope="scope">
              <div v-if="scope.row.status==1">上架</div>
              <div v-else>下架</div>
            </template>
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
            <template slot-scope="scope">
              <el-button @click.native.prevent="editRow(scope.$index, tableData)"
                         type="text"
                         size="medium">
                编辑
              </el-button>
              <el-button @click.native.prevent="goDownRow(scope.$index, tableData)"
                         type="text"
                         size="medium"
                         style="color:#38A28A;">
                下架
              </el-button>
              <el-button @click.native.prevent="deleteRow(scope.$index, tableData)"
                         type="text"
                         size="medium"
                         style="color:#F44235;">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="page-row">
          <el-pagination @size-change="handleSizeChange"
                         @current-change="handleCurrentChange"
                         :current-page=" pageIndex"
                         :page-sizes="[10, 20, 30, 40]"
                         :page-size="pageSize"
                         layout="total, sizes, prev, pager, next, jumper"
                         :total="tableData.length">
          </el-pagination>
        </div>
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
  Pagination,
  Checkbox,
  Image,
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
    'el-pagination': Pagination,
    'el-checkbox': Checkbox,
    'el-image': Image,
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
      }],
      pageIndex: 1, //currentPage
      pageSize: 10,
      checked: false,
      multipleSelection: [],
    }
  },
  methods: {
    handleSearch () {

    },
    handleAdd () {

    },
    editRow (index, data) { },
    goDownRow (index, data) { },
    deleteRow (index, data) {
      this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      });
    },
    deleteRows () {
      if (this.multipleSelection.length == 0) {
        this.$message({
          message: '请先选择需要删除的数据',
          type: 'warning'
        });
        return
      }
      this.$confirm('此操作将永久删除数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      });
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
  },
  mounted () {

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
    height: 810px;
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
    padding: 20px;
    padding-top: 0px;
    .cell {
      text-align: center;
    }
    .el-table th {
      border-bottom: 1px solid #ebeef5;
      color: #333;
    }
    .page-row {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 20px;
      padding-left: 10px;
      .tool-btn {
        display: flex;
        justify-content: space-between;
        width: 140px;
        font-size: 14px;
        .el-checkbox__inner {
          margin-top: -4px;
        }
      }
    }
  }
}
</style>