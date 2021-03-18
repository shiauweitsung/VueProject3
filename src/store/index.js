import Vue from 'vue'
import Vuex from 'vuex'
import backProducts from './backProducts'
import products from './products'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  modules: {
    backProducts,
    products
  }
})
