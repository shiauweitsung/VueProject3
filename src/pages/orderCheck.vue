<template>
  <div class="wrap">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ripple-bzo8opf0rpm">
        <div class="ldio-zifyp9wz5z">
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
    <div class="content">
      <div class="cart-cont">
        <div class="cart-cont-step">
          <div class="cart-cont-step-1">1.確認商品</div>
          <div class="cart-cont-step-2">2.填寫資料</div>
          <div class="cart-cont-step-3 step_active">3.完成訂購</div>
        </div>

        <div class="cart-order">
          <table class="cart-order-table">
            <thead>
              <td colspan="4">產品</td>
              <td>數量</td>
              <td>價格</td>
            </thead>
            <tbody v-for="(item, key) in orderData" :key="key">
              <tr>
                <td colspan="4">
                  <div class="cart-order-table-title">
                    <img :src="item.product.image" alt="" />
                    <span>{{ item.product.title }}</span>
                  </div>
                </td>
                <td>{{ item.qty }}</td>
                <td>{{ item.final_total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'orderCheck',
  data () {
    return {
      data: [],
      orderData: [],
      orderId: ''
    }
  },
  methods: {
    getOrder (id) {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${id}`
      this.$store.dispatch('updateLoading', true)
      this.$http.get(url).then(res => {
        vm.data = res.data
        vm.orderData = res.data.order.products
        // 重新獲取購物車數量，將cart數量清空
        this.$store.dispatch('products/getCart')
        this.$store.dispatch('updateLoading', false)
      })
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  created () {
    this.orderId = this.$route.params.id
    this.getOrder(this.orderId)
  }
}
</script>
