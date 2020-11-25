let routeArray = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: resolve => require(["../pages/home.vue"], resolve)
  }, {
    path: '/course-list',
    name: 'course-list',
    component: resolve => require(["../pages/courseList.vue"], resolve)
  }, {
    path: '/course-add',
    name: 'course-add',
    component: resolve => require(["../components/course/addCourse.vue"], resolve)
  }, {
    path: '/order-buy',
    name: 'order-buy',
    component: resolve => require(["../pages/order/orderBuyList.vue"], resolve)
  }, {
    path: '/order-back',
    name: 'order-back',
    component: resolve => require(["../pages/order/orderBackList.vue"], resolve)
  }, {
    path: '/user-student',
    name: 'order-student',
    component: resolve => require(["../pages/user/userStudentList.vue"], resolve)
  }, {
    path: '/user-teacher',
    name: 'user-teacher',
    component: resolve => require(["../pages/user/userTeacherList.vue"], resolve)
  }, {
    path: '/news-swiper',
    name: 'news-swiper',
    component: resolve => require(["../pages/news/newsSwiperList.vue"], resolve)
  }, {
    path: '/news-article',
    name: 'news-article',
    component: resolve => require(["../pages/news/newsArticleList.vue"], resolve)
  }, {
    path: '/sale-activity',
    name: 'sale-activity',
    component: resolve => require(["../pages/sale/saleActivityList.vue"], resolve)
  }, {
    path: '/sale-coupon',
    name: 'sale-coupon',
    component: resolve => require(["../pages/sale/saleCouponList.vue"], resolve)
  }, {
    path: '/setting',
    name: 'setting',
    component: resolve => require(["../pages/setting.vue"], resolve)
  },
]

export default routeArray;