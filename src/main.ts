import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'jquery'
import 'bootstrap'
import '@/assets/all.scss'
import dateFilter from './filter/date'
import integer from './filter/Integer'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import validation from './plugin/validate.js'
import store from './store'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.component('Loading', Loading)
Vue.filter('date', dateFilter)
Vue.filter('integer', integer)
Vue.config.productionTip = false

new Vue({
  validation,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
