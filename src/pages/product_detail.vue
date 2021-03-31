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
      <div class="product_detail-cont">
        <div class="product_detail-cont-left">
          <img :src="product.image" alt="" />
        </div>
        <div class="product_detail-cont-right">
          <div class="product_detail-cont-right-title mb-3">
            <h3>{{ product.title }}</h3>
          </div>
          <div class="product_detail-cont-right-discount mb-3"></div>
          <div class="product_detail-cont-right-price mb-3">
            <p class="color-grey mb-3">建議售價 :</p>
            <span class="origin-price mr-3">${{ product.origin_price }}</span>
            <span class="sale-price">${{ product.price }}</span>
          </div>
          <div class="product_detail-cont-right-count mb-3">
            <p class="color-grey mb-3">數量 :</p>
            <div>
              <button @click="decreaseCount(product)">-</button>
              <input
                type="text"
                v-model="count"
                @keypress="keypress"
                @input="checkCount"
              />
              <button @click="addCount(product)">+</button>
            </div>
          </div>
          <div class="product_detail-cont-right-btn">
            <button
              class="main-btn"
              @click="addCart(product.id, product.count)"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div class="product_detail-cont-info">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="description-tab"
              data-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
              >介紹</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="content-tab"
              data-toggle="tab"
              href="#content"
              role="tab"
              aria-controls="content"
              aria-selected="false"
              >內容</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
              >注意事項</a
            >
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active mt-3"
            id="description"
            role="tabpanel"
            aria-labelledby="description"
          >
            {{ product.description }}
          </div>
          <div
            class="tab-pane fade mt-3"
            id="content"
            role="tabpanel"
            aria-labelledby="content-tab"
          >
            {{ product.content }}
          </div>
          <div
            class="tab-pane fade mt-3"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <ul class="pl-0">
              <li>如購買此網站商品，有任何問題請洽: (02)-1234-5678</li>
              <li>
                官網網站商品有提供線上客服服務。line ID : razer123456 FB :
                razer123456
              </li>
              <li>
                筆電問題：請撥打：02-7890-1234，或使用電子郵件和線上客服服務
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { createHelpers } from 'vuex-map-fields'
const { mapFields } = createHelpers({
  getterType: 'products/getProduct',
  mutationType: 'products/updateProduct'
})
export default {
  name: 'product_detail',
  data () {
    return {
      productId: ''
    }
  },
  methods: {
    getProductDetail () {
      this.$store.dispatch('products/getProductDetail', this.productId)
    },
    addCount (item) {
      this.$store.commit('products/COUNTADD', item)
    },
    decreaseCount (item) {
      this.$store.commit('products/COUNTDECREASE', item)
    },
    keypress (e) {
      if (e.key === '+' || e.key === 'e' || e.key === '-') {
        e.preventDefault()
      }
    },
    checkCount (e) {
      let value = Number(e.target.value)
      console.log(e)
      if (value < 1 || value === '' || value === 0) {
        e.target.value = 1
        alert('最小數量為1 不可為0或是空白')
      }
    },
    addCart (id, qty) {
      console.log(id, qty)
      this.$store.dispatch('products/addCart', { id, qty })
    }
  },
  computed: {
    ...mapGetters('products', ['product']),
    ...mapGetters(['isLoading']),
    ...mapFields(['count'])
  },
  created () {
    this.productId = this.$route.params.id
    this.getProductDetail()
  }
}
</script>
