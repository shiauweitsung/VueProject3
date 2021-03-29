<template>
  <div class="wrap">
    <div class="content">
      <div class="product_detail-cont">
        <div class="product_detail-cont-left">
          <img :src="product.image" alt="" />
        </div>
        <div class="product_detail-cont-right">
          <div class="product_detail-cont-rigth-title mb-3">
            <h3>{{ product.title }}</h3>
          </div>
          <div class="product_detail-cont-rigth-discount mb-3">
            <button>折扣馬</button>
          </div>
          <div class="product_detail-cont-rigth-price mb-3">
            <p class="color-grey mb-3">建議售價 :</p>
            <span class="origin-price mr-3">${{ product.origin_price }}</span>
            <span class="sale-price">${{ product.price }}</span>
          </div>
          <div class="product_detail-cont-rigth-count mb-3">
            <p class="color-grey mb-2">數量 :</p>
            <div>
              <button>-</button>
              <input type="text" v-model="product.count" />
              <button>+</button>
            </div>
          </div>
          <div class="product_detail-cont-rigth-btn">
            <button class="main-btn">Add To Cart</button>
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
            class="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description"
          >
            {{ product.description }}
          </div>
          <div
            class="tab-pane fade"
            id="content"
            role="tabpanel"
            aria-labelledby="content-tab"
          >
            {{ product.content }}
          </div>
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <ul>
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
    }
  },
  computed: {
    ...mapGetters('products', ['product'])
  },
  created () {
    this.productId = this.$route.params.id
    this.getProductDetail()
  }
}
</script>
