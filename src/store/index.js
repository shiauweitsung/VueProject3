import Vue from 'vue'
import Vuex from 'vuex'
import backProducts from './backProducts'
import products from './products'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false
  },
  actions: {
    updateLoading (context, payload) {
      // 宣告一個執行loading的callback，並在其他函示執行中 執行此函示，並給予一個true或false
      context.commit('UPDATELOADING', payload)
    }
  },
  mutations: {
    UPDATELOADING (state, payload) {
      state.isLoading = payload
    }
  },
  getters: {
    isLoading: state => state.isLoading
  },
  modules: {
    backProducts,
    products
  }
})
