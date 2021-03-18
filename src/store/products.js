import axios from 'axios'
export default {
  namespaced: true,
  state: {
    products: [],
    category: []
  },
  actions: {
    getProducts (context) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
      axios.get(url).then(res => {
        context.commit('PRODUCTS', res.data.products)
        context.commit('CATEGORY', res.data.products)
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
      console.log(state.category)
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
    }
  },
  getters: {
    products: state => state.products,
    category: state => state.category
  }
}
