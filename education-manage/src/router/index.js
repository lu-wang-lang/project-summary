import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
