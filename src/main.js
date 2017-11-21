// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Icons from './assets/icons.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render: createElement => createElement(App),
  created () {
    // 不会重新解析它正在使用的元素，不会破坏元素内的现有元素。
    // 避免了额外的序列化步骤，使其比直接innerHTML操作更快。
    document.body.insertAdjacentHTML('afterbegin', Icons)
  }
})
