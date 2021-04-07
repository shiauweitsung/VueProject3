<template>
  <div class="back-wrap">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-bzo8opf0rpm">
        <div class="ldio-zifyp9wz5z">
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
    <h2 class="mb-4">優惠券列表</h2>
    <button
      type="button"
      class="main-btn mb-4"
      data-toggle="modal"
      @click="openModal({}, (CouponisNew = true))"
    >
      新增優惠券
    </button>
    <table class="coupon-table">
      <thead>
        <tr>
          <td>優惠名稱</td>
          <td>優惠代碼</td>
          <td align="center">優惠折數</td>
          <td align="center">到期日</td>
          <td align="center">編輯</td>
        </tr>
      </thead>
      <tbody v-for="(item, key) in coupon" :key="key" style="color: white">
        <tr>
          <td>{{ item.title }}</td>
          <td>{{ item.code }}</td>
          <td align="center">{{ item.percent }}</td>
          <td align="center">{{ item.due_date | date }}</td>
          <td align="center">
            <button
              @click="openModal(item, (CouponisNew = false))"
              class="main-btn"
            >
              修改
            </button>
            <button class="main-btn" @click="delCoupon(item.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="">優惠名稱</label>
            <input type="text" v-model="title" />
            <label for="">優惠代碼</label>
            <input type="text" v-model="code" />
            <label for="">折數</label>
            <input type="text" v-model="percent" />
            <label for="">到期日</label>
            <input type="date" v-model="due_date" />
          </div>
          <div class="modal-footer">
            <button type="button" class="main-btn" data-dismiss="modal">
              關閉
            </button>
            <button
              type="button"
              class="main-btn"
              @click="addCoupon(moudleCoupon)"
            >
              完成
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { createHelpers } from 'vuex-map-fields'
import { mapActions, mapGetters } from 'vuex'
const { mapFields } = createHelpers({
  getterType: 'backCoupon/getMoudleCoupon',
  mutationType: 'backCoupon/updateMoudleCoupon'
})
export default {
  name: 'backCoupon',
  data () {
    return {
      CouponisNew: false
    }
  },
  methods: {
    addCoupon (item) {
      this.$store.dispatch('backCoupon/addCoupon', item)
    },
    delCoupon (id) {
      this.$store.dispatch('backCoupon/delCoupon', id)
    },
    openModal (item, CouponisNew) {
      this.$store.dispatch('backCoupon/openModal', { item, CouponisNew })
    },
    ...mapActions('backCoupon', ['getCoupon'])
  },
  computed: {
    ...mapGetters('backCoupon', ['coupon', 'moudleCoupon']),
    ...mapGetters(['isLoading']),
    ...mapFields(['title', 'percent', 'code', 'due_date'])
  },
  created () {
    this.getCoupon()
  }
}
</script>
