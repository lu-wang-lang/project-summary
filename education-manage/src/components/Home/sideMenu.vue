<template>
  <div class="side-menu">
    <el-menu default-active="1"
             class="el-menu-vertical-demo"
             text-color="#fff"
             background-color=" rgb(67, 74, 80)"
             active-text-color="white"
             :unique-opened="true"
             @select="handleSelect">
      <template v-for="item of menuList">
        <template v-if="item.children && item.children.length>0">
          <el-submenu :key="item.index"
                      :index="item.index">
            <template slot="title">
              <img :src="item.imgSrc"
                   class="menu-icon" /><span>{{item.title}}</span>
            </template>
            <el-menu-item :index="child.index"
                          :ref="child.index"
                          v-for="(child,idx) of item.children"
                          @click="handleClickMenu(child)"
                          :key="idx">{{child.title}}</el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="item.index"
                        :index="item.index"
                        :ref="item.index"
                        @click="handleClickMenu(item)">
            <img :src="item.imgSrc"
                 class="menu-icon mgt" />
            {{item.title}}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {
  Menu,
  Submenu,
  MenuItem,
} from "element-ui";
export default {
  name: 'SideMenu',
  components: {
    'el-menu': Menu,
    'el-submenu': Submenu,
    'el-menu-item': MenuItem
  },
  data () {
    return {
      menuList: [{
        title: '首页',
        path: 'home',
        index: '1',
        imgSrc: require("../../assets/images/menu-room.svg"),
      }, {
        title: '课程管理',
        path: 'course-list',
        index: '2',
        imgSrc: require("../../assets/images/menu-bookmark.svg"),
      }, {
        title: '订单管理',
        path: '',
        imgSrc: require("../../assets/images/menu-list.svg"),
        index: '3',
        children: [{
          title: '订单',
          path: 'order-buy',
          index: '3-1'
        }, {
          title: '退款',
          path: 'order-back',
          index: '3-2'
        }]
      }, {
        title: '用户管理',
        path: '/',
        imgSrc: require("../../assets/images/menu-account.svg"),
        index: '4',
        children: [{
          title: '学员',
          path: 'user-student',
          index: '4-1'
        }, {
          title: '讲师',
          path: 'user-teacher',
          index: '4-2'
        }]
      }, {
        title: '资讯管理',
        path: '/',
        imgSrc: require("../../assets/images/menu-message.svg"),
        index: '5',
        children: [{
          title: '轮播图',
          path: 'news-swiper',
          index: '5-1'
        }, {
          title: '文章',
          path: 'news-article',
          index: '5-2'
        }]
      }, {
        title: '促销管理',
        path: '/',
        imgSrc: require("../../assets/images/menu-tags.svg"),
        index: '6',
        children: [{
          title: '秒杀活动',
          path: 'sale-activity',
          index: '6-1'
        }, {
          title: '优惠券',
          path: 'sale-coupon',
          index: '6-2'
        }]
      }, {
        title: '系统设置',
        path: 'setting',
        index: '7',
        imgSrc: require("../../assets/images/menu-settings.svg"),
      }],
      oldPath: '/home'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      if (keyPath.length > 1) {
        let parentKey = keyPath[0]
        let childKey = keyPath[1]
      }
      console.log(key, 'key')
      console.log(keyPath, 'keyPath')
    },
    handleClickMenu (obj) {
      this.$router.push(obj.path)
    }
  }
}
</script>

<style  lang="less">
.side-menu {
  width: 100%;
  height: calc(100% - 10px);
  margin-top: 10px;
  .el-menu {
    border: none;
  }
  .el-submenu .el-menu-item,
  .el-submenu__title {
    font-weight: normal;
  }
  .is-active {
    background: #38a28a !important;
    font-weight: bold !important;
  }
  .el-submenu {
    background: transparent !important;
  }
  .el-menu-item:focus,
  .el-menu-item:hover,
  .el-submenu__title:hover {
    background: #38a28a !important;
  }
  .menu-icon {
    width: 15px;
    height: 15px;
    margin-right: 15px;
    margin-top: 3px;
  }
  .mgt {
    margin-top: -1px;
  }
}
</style>