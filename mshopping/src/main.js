// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入css和rem.js

import './assets/js/remScale'
import './assets/css/reset.css'
// 全局引入精灵图
import './assets/font/iconfont.css'


//引入vantUi框架
import VantUI from 'vant'
Vue.use(VantUI)
import 'vant/lib/index.css'


// 全局进入store
import store from './store'
Vue.prototype.$imgUrl = 'http://localhost:3000'

Vue.config.productionTip = false

// 引入全局组件
import comCommponent from './components/common/index'
for(let i in comCommponent){
  Vue.component(i,comCommponent[i])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
