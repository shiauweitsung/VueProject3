import axios from 'axios'
export default {
  namespaced: true,
  state: {
    products: [],
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
    addCart (context, { id, qty }) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`
      let carts = {
        product_id: id,
        qty
      }
      context.commit('UPDATELOADING', true, { root: true })
      axios.post(url, { data: carts }).then(res => {
        if (res.data.success) {
          context.dispatch('getCart')
          context.commit('UPDATELOADING', false, { root: true })
        } else {
          alert('error')
        }
      })
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
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
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
      console.log(value)
      if (state.count >= 999) {
        return true
      } else {
        state.count++
      }
    },
    COUNTDECREASE (state) {
      if (state.count <= 1) {
        return true
      } else {
        state.count--
      }
    }
  },
  getters: {
    products: state => state.products,
    category: state => state.category,
    cart: state => state.cart,
    cartlength: state => state.cartLength
  }
}
