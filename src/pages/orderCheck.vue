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
      <div class="cart-cont pt-3">
        <div class="cart-cont-step">
          <div class="cart-cont-step-1">1.確認商品</div>
          <div class="cart-cont-step-2">2.填寫資料</div>
          <div class="cart-cont-step-3 step_active">3.完成訂購</div>
        </div>

        <div class="cart-order">
          <table class="cart-order-table">
            <thead>
              <td colspan="4">產品</td>
              <td align="center">數量</td>
              <td align="center">價格</td>
            </thead>
            <tbody v-for="(item, key) in orderData" :key="key">
              <tr>
                <td colspan="4">
                  <div class="cart-order-table-title">
                    <img :src="item.product.image" alt="" />
                    <span>{{ item.product.title }}</span>
                  </div>
                </td>
                <td align="center">{{ item.qty }}</td>
                <td align="center">{{ item.final_total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cart-userinfo">
          <div class="cart-userinfo-txt">
            <div>
              <p>姓名 :</p>
              <span>{{ orderUser.name }}</span>
            </div>
            <div>
              <p>電話 :</p>
              <span>{{ orderUser.tel }}</span>
            </div>
            <div>
              <p>地址 :</p>
              <span>{{ orderUser.address }}</span>
            </div>
            <div>
              <p>備註 :</p>
              <span>{{ data.message }}</span>
            </div>
            <div class="paystate">
              <div class="ispay" v-if="isPay">付款完成</div>
              <div class="nopay" v-else>尚未付款</div>
              <div class="payending" v-if="isPay">
                <router-link to="/products/all">再去逛逛</router-link>
              </div>
              <div class="paynow" @click="payorder(data.id)" v-else>
                點選付款
              </div>
            </div>
          </div>
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
      orderUser: {},
      orderId: ''
    }
  },
  methods: {
    getOrder (id) {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order/${id}`
      this.$store.dispatch('updateLoading', true)
      this.$http.get(url).then(res => {
        vm.data = res.data.order
        vm.orderUser = res.data.order.user
        vm.orderData = res.data.order.products
        // 重新獲取購物車數量，將cart數量清空
        this.$store.dispatch('products/getCart')
        this.$store.dispatch('updateLoading', false)
      })
    },
    payorder (id) {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/pay/${id}`
      this.$http.post(url, id).then(res => {
        console.log(res)
        if (res.data.success) {
          vm.getOrder(id)
        }
      })
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    isPay () {
      return this.data.is_paid
    }
  },

  created () {
    this.orderId = this.$route.params.id
    this.getOrder(this.orderId)
  }
}
</script>
