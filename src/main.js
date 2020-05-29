// import Vue from 'vue'
import App from './App'
  import router from './router'
// import Vant from 'vant';
// import 'vant/lib/index.css';
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' 
// Vue.use(ElementUI)
// Vue.use(Vant)

Vue.config.productionTip = false

import rem from './common/js/rem.js'
import common from "./common/js/util.js";
Vue.prototype.common = common
Vue.use(rem)
import './common/css/reset.less'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  }
})

//  import './assets/css/mui.less'
//  import mui from './assets/js/mui.js'
//  Vue.prototype.mui = mui
//import store from './store/index'
// import axios from 'axios'
// Vue.prototype.$axios=axios

// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

//Vue.prototype.$video = Video
import 'babel-polyfill'

// router.afterEach(() => {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// })

// import VueVideoPlayer from 'vue-video-player'
// import 'video.js/dist/video-js.css'

// Vue.use(VueVideoPlayer)
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts
// import Bridge from './config/bridge.js'
//   Vue.prototype.$bridge = Bridge
  //import $ from 'jquery'
// import { post, put, patch, Get } from './common/js/http';

// Vue.prototype.$post=post
// Vue.prototype.$get=Get
// Vue.prototype.$put=put
// Vue.prototype.$patch=patch

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,

  render: h => h(App)
})
