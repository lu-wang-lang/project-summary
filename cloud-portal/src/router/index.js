import Vue from 'vue'
import Router from 'vue-router'
import Portal from '@/components/portal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'portal',
      component: Portal
    }
  ]
})
