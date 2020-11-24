import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  base: '/',//process.env.BASE_URL
  routes: routes,
  mode: 'history'
})

// router.beforeEach((to, from, next) => {
//   // if (to.path === from.path) {
//   //   next(false)
//   // } else {
//   //   next()
//   // }
// })

export default router