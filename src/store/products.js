import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'
export default {
  namespaced: true,
  state: {
    products: [],
    product: [],
    productsPage: [],
    currentPage: 1,
    hasNext: false,
    category: [],
    cart: [],
    cartLength: '',
    count: 1,
    thisCount: 1
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      context.commit('UPDATELOADING', true, { root: true })
      axios.get(url).then(res => {
        if (res.data.success) {
          Object.keys(res.data.products).forEach(item => {
            res.data.products[item].count = 1
          })
          context.commit('PRODUCTS', res.data.products)
          context.commit('CATEGORY', res.data.products)
          context.commit('UPDATELOADING', false, { root: true })
        }
      })
    },
    getProductPage ({ commit, state }) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${state.currentPage}`
      commit('UPDATELOADING', true, { root: true })
      axios.get(url).then(res => {
        // console.log(res, 'page')
        if (res.data.success) {
          Object.keys(res.data.products).forEach(item => {
            res.data.products[item].count = 1
          })
          if (res.data.pagination.has_next || res.data.pagination.current_page === state.currentPage) {
            commit('UPDATEPRODUCTPAGE', res.data)
          } else if (res.data.pagination.has_next) {
            commit('PRODUCTSPAGE', res.data)
          }
          commit('UPDATELOADING', false, { root: true })
        }
      })
    },
    getProductDetail (context, id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`
      context.commit('UPDATELOADING', true, { root: true })
      axios.get(url).then(res => {
        if (res.data.success) {
          context.commit('GETPRODUCTDETAIL', res.data.product)
        }
        context.commit('UPDATELOADING', false, { root: true })
      })
    },
    addCartAPI (context, carts) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('UPDATELOADING', true, { root: true })
      axios.post(url, { data: carts }).then(res => {
        if (res.data.success) {
          context.dispatch('getCart')
          context.commit('UPDATELOADING', false, { root: true })
          context.dispatch('updateMessage', { message: '添加成功', status: 'success' }, { root: true })
        } else {
          context.dispatch('updateMessage', { message: '添加失敗', status: 'error' }, { root: true })
        }
      })
    },
    addCart (context, { id, qty }) {
      // 判斷是否有重複的購物車值，如果有會找到該物件，並增加數量與ID，然後刪除API重新post一次
      const find = context.state.cart.carts.find(res => {
        return res.product_id === id
      })
      if (find) {
        context.dispatch('delCart', find.id)
        let allqty = find.qty + qty
        let cart = {
          product_id: id,
          qty: allqty
        }
        context.dispatch('addCartAPI', cart)
      } else {
        let cart = {
          product_id: id,
          qty
        }
        context.dispatch('addCartAPI', cart)
      }
    },
    getCart (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      context.commit('UPDATELOADING', true, { root: true })
      axios.get(url).then(res => {
        if (res.data.success) {
          context.commit('UPDATELOADING', false, { root: true })
          context.commit('CART', res.data.data)
        }
      })
    },
    delCart (context, id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${id}`
      context.commit('UPDATELOADING', true, { root: true })
      axios.delete(url).then(res => {
        if (res.data.success) {
          context.dispatch('getCart')
          context.dispatch('updateMessage', { message: '刪除成功', status: 'success' }, { root: true })
        } else {
          alert('刪除錯誤失敗')
        }
        context.commit('UPDATELOADING', false, { root: true })
      })
    },
    useCoupon (context, coupon) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      context.commit('UPDATELOADING', true, { root: true })
      axios.post(url, { data: coupon }).then(res => {
        console.log(res)
        if (res.data.success) {
          context.dispatch('updateMessage', { message: '優惠套用成功', status: 'success' }, { root: true })
          context.dispatch('getCart')
        } else {
          context.dispatch('updateMessage', { message: '優惠碼錯誤', status: 'error' }, { root: true })
        }
        context.commit('UPDATELOADING', false, { root: true })
      })
    }
  },
  mutations: {
    updateField,
    PRODUCTS (state, payload) {
      state.products = payload
    },
    PRODUCTSPAGE (state, payload) {
      state.productsPage = payload.products
    },
    UPDATEPRODUCTPAGE (state, payload) {
      state.hasNext = payload.pagination.has_next
      state.currentPage++
      state.productsPage = state.productsPage.concat(payload.products)
    },
    GETPRODUCTDETAIL (state, payload) {
      state.product = payload
    },
    ADDOLDCART (state, payload) {
      console.log(state, payload)
      state.cart.carts.find(res => {
        if (res.id === payload.id) {
          res.qty += payload.qty
          res.total += payload.total
        }
      })
    },
    CHECKCART (state, payload) {
      const find = state.cart.carts.find(res => res.product_id === payload.product_id)
      if (find) {
        find.qty += payload.qty
      }
    },
    CATEGORY (state, payload) {
      // let array = payload.map(res => {
      //   return res.category
      // }).reduce((prev, cur) => {
      //   if (cur in prev) {
      //     prev[cur]++
      //   } else {
      //     prev[cur] = 1
      //   }
      //   return prev
      // }, {})
      // for (let i in array) {
      //   state.category.push({
      //     title: i,
      //     num: array[i]
      //   })
      // }
      // console.log(state.category)
      // 初始化分類， 以免SPA關係 導致切換頁 重複push陣列
      state.category = []
      payload.reduce((obj, item) => {
        if (item.category in obj) {
          obj[item.category]++
          state.category.forEach(res => {
            if (res.title === item.category) {
              res.num++
            }
          })
        } else {
          obj[item.category] = 1
          state.category.push({ title: item.category, num: 1 })
        }
        return obj
      }, {})
    },
    CART (state, payload) {
      state.cart = payload
      state.cartLength = payload.carts.length
    },
    COUNTSET (state, value) {
      state.count = value
    },
    COUNTADD (state, value) {
      if (value.count >= 999) {
        return true
      } else {
        value.count++
      }
    },
    COUNTDECREASE (state, value) {
      if (value.count <= 1) {
        return true
      } else {
        value.count--
      }
    },
    updateProduct (state, field) {
      updateField(state.product, field)
    }
  },
  getters: {
    getField,
    products: state => state.products,
    productsPage: state => state.productsPage,
    product: state => state.product,
    category: state => state.category,
    cart: state => state.cart,
    cartlength: state => state.cartLength,
    getProduct (state) {
      return getField(state.product)
    }
  }
}
