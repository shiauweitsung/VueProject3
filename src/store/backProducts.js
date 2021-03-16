import axios from 'axios'
export default {
  namespaced: true,
  state: {
    backProducts: [],
    modalProduct: [],
    modalNew: false
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`
      axios.get(url).then(res => {
        context.commit('PRODUCTS', res.data.products)
      })
    },
    openModal (context, { modalNew, item }) {
      context.commit('MODALPRODUCT', { modalNew, item })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.backProducts = payload
    },
    MODALPRODUCT (state, payload) {
      console.log(payload, 'muc')
      if (!payload.modalNew) {
        state.modalProduct = payload.item
        state.modalNew = true
      } else {
        state.modalProduct = payload.item
        state.modalNew = false
      }
      $('#modalproducts').modal('show')
    }
  },
  getters: {
    products: state => state.backProducts,
    modalproduct: state => state.modalProduct
  }
}
