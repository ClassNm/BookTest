// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
console.log(store);

//引入swiper的样式表
import 'swiper/dist/css/swiper.min.css'

Vue.config.productionTip = false

// 全局过滤器
Vue.filter('money',(val)=>{
  return `￥${(val/100).toFixed(2)}`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
