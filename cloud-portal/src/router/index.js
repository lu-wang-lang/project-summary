import Vue from 'vue'
import Router from 'vue-router'
import Portal from '@/components/portal'
import teacherIntroduction from '@/components/teacher-introduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
      component: Portal
    }, {
      path: '/teachInduct',
      name: 'teacher-introduction',
      component: teacherIntroduction
    }
  ]
})
