import axios from 'axios'
export default {
  namespaced: true,
  state: {
    orderData: []
  },
  actions: {
    getOrder (context) {
      let page = 1
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${page}`
      context.commit('UPDATELOADING', true, { root: true })
      axios.get(url).then(res => {
        if (res.data.success) {
          context.commit('GETORDER', res.data.orders)
        }
        context.commit('UPDATELOADING', false, { root: true })
      })
    }
  },
  mutations: {
    GETORDER (state, payload) {
      state.orderData = payload
    }
  },
  getters: {
    orderData: state => state.orderData
  }
}
