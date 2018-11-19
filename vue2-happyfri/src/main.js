// vue
import Vue from 'vue'
// 路由插件
import VueRouter from 'vue-router'

// 自定义路由
import routes from './router/router'

// vuex
import store from './store/'
import ajax from './config/ajax'

// 自定义less / js
import './style/common'

// 自定义屏幕自适应改变
import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

new Vue({ // 创建vue实例
  router, // 挂载路由
  store, // 挂载 store 状态
}).$mount('#app')
// $mount() 手动挂载
