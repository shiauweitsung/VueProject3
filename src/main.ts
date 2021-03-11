import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'jquery'
import 'bootstrap'
import '@/assets/all.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators')

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
