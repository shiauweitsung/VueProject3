import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'
export default {
  namespaced: true,
  state: {
    backProducts: [],
    modalProduct: [],
    thisProduct: '',
    modalNew: false
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products/all`
      context.commit('UPDATELOADING', true, { root: true })
      axios.get(url).then(res => {
        if (res.data.success) {
          Object.keys(res.data.products).forEach((item) => {
            // res.data.products 取出該物件裡面的所有名稱
            // item是該物件的每一個 名稱
            // 使用讀取物件方式 取到每一個產品
            res.data.products[item].show = false
            res.data.products[item].count = 1
          })
          context.commit('PRODUCTS', res.data.products)
          context.commit('UPDATELOADING', false, { root: true })
        }
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
    updateField,
    PRODUCTS (state, payload) {
      state.backProducts = payload
    },
    MODALPRODUCT (state, payload) {
      state.modalProduct = payload.item
      $('#modalproducts').modal('show')
    },
    // UPDATEMOUDLEPRODUCT (state, value) {
    //   // VUEX雙向綁定方法 藉由state 讀取components的 computed值 進行修改
    //   state.modalProduct.description = value
    // },
    EDITSHOW (state, value) {
      state.thisProduct = value
      state.thisProduct.show = !state.thisProduct.show
    },
    updateMoudle (state, field) {
      // 使用vuex-map-field套件 更新moudleProduct的值
      updateField(state.modalProduct, field)
    }
  },
  getters: {
    getField,
    products: state => state.backProducts,
    modalproduct: state => state.modalProduct,
    getMoudleProduct (state) {
      // 使用vuex-map-field套件 更新moudleProduct的值
      return getField(state.modalProduct)
    }
  }
}
