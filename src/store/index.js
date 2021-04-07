import Vue from 'vue'
import Vuex from 'vuex'
import backProducts from './backProducts'
import backCoupon from './backCoupon'
import backOrder from './backOrder'
import products from './products'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    message: []
  },
  actions: {
    updateLoading (context, payload) {
      // 宣告一個執行loading的callback，並在其他函示執行中 執行此函示，並給予一個true或false
      context.commit('UPDATELOADING', payload)
    },
    updateMessage (context, { message, status }) {
      const timestemp = Math.floor(new Date() / 1000)
      const messages = {
        message,
        status,
        timestemp
      }
      context.commit('UPDATEMESSAGE', messages)
      context.dispatch('removeMessage', timestemp)
    },
    removeMessage (context, timestemp) {
      setTimeout(function () {
        context.commit('REMOVEMESSAGE', timestemp)
      }, 3000)
    },
    removeMessageNow (context, num) {
      context.commit('REMOVEMESSAGENOW', num)
    }
  },
  mutations: {
    UPDATELOADING (state, payload) {
      state.isLoading = payload
    },
    UPDATEMESSAGE (state, payload) {
      state.message.push(payload)
    },
    REMOVEMESSAGE (state, payload) {
      state.message.forEach((item, i) => {
        if (item.timestemp === payload) {
          state.message.splice(i, 1)
        }
      })
    },
    REMOVEMESSAGENOW (state, payload) {
      state.message.splice(payload, 1)
    }
  },
  getters: {
    isLoading: state => state.isLoading,
    message: state => state.message
  },
  modules: {
    backProducts,
    backCoupon,
    backOrder,
    products
  }
})
