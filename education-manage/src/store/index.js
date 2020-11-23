import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

const store = new vuex.Store({
  state: {
    route: {
      name: '首页',
      path: '/home'
    }
  },
  mutations: {
    changeRoute (ctx, val) {
      ctx.route = val
    }
  },
  actions: {

  }
})

export default {
  store
}