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
    openModal (context, item) {
      context.commit('MODALPRODUCT', item)
    },
    updateProduct (context, item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${item.id}`
      axios.put(url, { data: item }).then(res => {
        if (res.data.success) {
          context.dispatch('getProducts')
          $('#modalproducts').modal('hide')
        }
      })
    },
    delProduct (context, item) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${item.id}`
      axios.delete(url).then(res => {
        if (res.data.success) {
          context.dispatch('getProducts')
        }
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.backProducts = payload
    },
    MODALPRODUCT (state, payload) {
      state.modalProduct = payload.item
      $('#modalproducts').modal('show')
    }
  },
  getters: {
    products: state => state.backProducts,
    modalproduct: state => state.modalProduct
  }
}
