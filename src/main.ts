import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import '@/assets/all.scss'
import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
