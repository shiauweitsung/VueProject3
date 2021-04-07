import axios from 'axios'
import { getField, updateField } from 'vuex-map-fields'
export default {
  namespaced: true,
  state: {
    coupon: [],
    moudleCoupon: [],
    isNew: true
  },
  actions: {
    addCoupon ({ dispatch, commit, state }, payload) {
      // 判斷是否為新， 轉換api 方法
      let url = ` ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${payload.id}`
      let method = 'put'
      if (state.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
        method = 'post'
      }
      // 先轉換日期格式， 再post api
      commit('TIMESTEMPCHANGE', payload.due_date)
      commit('UPDATELOADING', true, { root: true })
      axios[method](url, { data: payload }).then(res => {
        if (res.data.success) {
          dispatch('getCoupon')
        }
        commit('UPDATELOADING', false, { root: true })
        $('#couponModal').modal('hide')
      })
    },
    delCoupon (context, id) {
      const url = ` ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`
      context.commit('UPDATELOADING', true, { root: true })
      axios.delete(url).then(res => {
        if (res.data.success) {
          context.dispatch('getCoupon')
        }
        context.commit('UPDATELOADING', false, { root: true })
      })
    },
    openModal (context, payload) {
      context.commit('UPDATE_MOUDLE_COUPON', payload)
      $('#couponModal').modal('show')
    },
    getCoupon (context) {
      let page = 1
      const url = ` ${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      context.commit('UPDATELOADING', true, { root: true })
      axios.get(url).then(res => {
        if (res.data.success) {
          context.commit('GETCOUPON', res.data.coupons)
        }
        context.commit('UPDATELOADING', false, { root: true })
      })
    }
  },
  mutations: {
    updateField,
    GETCOUPON (state, payload) {
      state.coupon = payload
    },
    TIMESTEMPCHANGE (state, payload) {
      // 將日期轉換成timestemp 格式
      state.moudleCoupon.due_date = Math.floor(new Date(payload) / 1000)
    },
    UPDATE_MOUDLE_COUPON (state, payload) {
      state.isNew = payload.CouponisNew
      state.moudleCoupon = JSON.parse(JSON.stringify(payload.item))
      // 使用toISOString 轉換格式， 再使用split分割字串成陣列
      if (state.moudleCoupon.due_date) {
        const times = new Date(payload.item.due_date * 1000).toISOString().split('T')
        state.moudleCoupon.due_date = times[0]
      }
    },
    updateMoudleCoupon (state, field) {
      updateField(state.moudleCoupon, field)
    }
  },
  getters: {
    getField,
    coupon: state => state.coupon,
    moudleCoupon: state => state.moudleCoupon,
    getMoudleCoupon (state) {
      return getField(state.moudleCoupon)
    }
  }
}
