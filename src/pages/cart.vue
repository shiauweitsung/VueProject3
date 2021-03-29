<template>
  <div class="wrap">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-spin-vr67c069ls">
        <div class="ldio-i4ihhev39wf">
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
          <div><div></div></div>
        </div>
      </div>
    </loading>
    <div class="content">
      <div class="cart">
        <div class="cart-banner"></div>
        <div class="cart-cont">
          <div class="cart-cont-step">
            <div
              class="cart-cont-step-1"
              :class="{ step_active: currentStep === 1 }"
            >
              1.確認商品
            </div>
            <div
              class="cart-cont-step-2"
              :class="{ step_active: currentStep === 2 }"
            >
              2.填寫資料
            </div>
            <div class="cart-cont-step-3">3.完成訂購</div>
          </div>
          <div v-if="currentStep === 1">
            <div class="cart-cont-list">
              <div class="cart-cont-list-title">
                <p>購物車明細</p>
                <p @click="cartShow = !cartShow">
                  <span v-if="cartShow">收合</span> <span v-else>展開</span>
                  <span :class="{ rotate180: !cartShow }"></span>
                </p>
              </div>
              <transition name="category">
                <div v-if="cartShow">
                  <div class="cart-cont-list-info">
                    <div class="cart-cont-list-info-header">
                      <div class="cart-cont-list-info-title">產品</div>
                      <div class="cart-cont-list-info-count">數量</div>
                      <div class="cart-cont-list-info-price">價錢</div>
                    </div>
                    <div
                      class="cart-cont-list-info-item"
                      v-for="(item, key) in cart.carts"
                      :key="key"
                    >
                      <div class="cart-cont-list-info-title">
                        <img :src="item.product.image" alt="" />
                        <span>{{ item.product.title }}</span>
                      </div>
                      <div class="cart-cont-list-info-count">
                        {{ item.qty }}
                      </div>
                      <div class="cart-cont-list-info-price">
                        $ {{ item.product.price }}
                      </div>
                    </div>
                  </div>
                  <div class="cart-cont-list-total">
                    <p>
                      商品金額 : $ <span>{{ cart.total | integer }}</span>
                    </p>
                    <p v-if="cart.final_total != cart.total" class="error-txt">
                      折扣後金額 : $
                      <span>{{ cart.final_total | integer }}</span>
                    </p>
                    <p>運費小計 : <span> 0 </span></p>
                  </div>
                  <div class="cart-cont-list-coupon">
                    <div>
                      <input
                        type="text"
                        placeholder="請輸入優惠代碼"
                        v-model="coupon"
                      />
                      <button @click="useCoupon">套用優惠</button>
                    </div>
                  </div>
                </div>
              </transition>
              <div class="cart-cont-next">
                <router-link to="/products/all">繼續購物</router-link>
                <button @click="currentStep++">下一步</button>
              </div>
            </div>
          </div>
          <div v-if="currentStep === 2">
            <div class="cart-cont-userinfo">
              <ValidationObserver v-slot="{ handleSubmit }" ref="form">
                <form @submit.prevent="handleSubmit(onSubmit)">
                  <div class="cart-cont-userinfo-title">
                    <p>收件人資訊</p>
                    <span>(必填)</span>
                  </div>
                  <ValidationProvider
                    name="姓名"
                    rules="required"
                    tag="div"
                    v-slot="{ errors, classes }"
                    class="cart-cont-userinfo-input"
                  >
                    <label for="name">姓名</label>
                    <input
                      v-model="userForm.user.name"
                      type="text"
                      :class="classes"
                    />
                    <span class="error-txt">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    name="信箱"
                    rules="required"
                    tag="div"
                    v-slot="{ errors, classes }"
                    class="cart-cont-userinfo-input"
                  >
                    <label for="email">信箱</label>
                    <input
                      v-model="userForm.user.email"
                      type="text"
                      :class="classes"
                    />
                    <span class="error-txt">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider
                    name="手機"
                    rules="required|phonenumber"
                    tag="div"
                    v-slot="{ errors, classes }"
                    class="cart-cont-userinfo-input"
                  >
                    <label for="tel">手機號碼</label>
                    <input
                      v-model="userForm.user.tel"
                      type="number"
                      :class="classes"
                      oninput="if(value.length>10)value=value.slice(0,10)"
                    />
                    <span class="error-txt">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <div class="cart-cont-userinfo-title">
                    <p>配送資訊</p>
                    <span>(必填)</span>
                  </div>
                  <div class="cart-cont-userinfo-title">
                    <p>留言備註</p>
                    <span>(選填)</span>
                  </div>
                  <div class="cart-cont-userinfo-message">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="10"
                      placeholder="備註請在此填寫"
                      v-model="userForm.message"
                    ></textarea>
                  </div>
                  <div class="cart-cont-next">
                    <button @click="currentStep--">上一步</button>
                    <button type="submit">送出訂單</button>
                  </div>
                </form>
              </ValidationObserver>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'cart',
  data () {
    return {
      cartShow: true,
      currentStep: 1,
      userForm: {
        user: {},
        message: ''
      },
      coupon: ''
    }
  },
  methods: {
    ...mapActions('products', ['getCart']),
    onSubmit () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/order`
      this.$refs.form.validate().then(success => {
        if (!success) {
          return true
        }
        this.$store.dispatch('updateLoading', true)
        this.$http.post(url, { data: this.userForm }).then(res => {
          if (res.data.success) {
            this.$store.dispatch('updateLoading', false)
            vm.$router.push(`/ordercheck/${res.data.orderId}`)
          }
        })
      })
    },
    useCoupon () {
      const coupon = {
        code: this.coupon
      }
      this.$store.dispatch('products/useCoupon', coupon)
    }
  },
  computed: {
    ...mapGetters('products', ['cart']),
    ...mapGetters(['isLoading'])
  }
}
</script>
<style lang="scss">
</style>
