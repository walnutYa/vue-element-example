import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'

import axios from 'axios'
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
axios.interceptors.request.use(config => {
  // console.log(config)
  // 这里可以设置请求头信息 eg: config.headers.Authorization = window.sessionStorage.getItem('token')
  // config.headers.xxx = 'xxx'
  // 在最后必须return config
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
