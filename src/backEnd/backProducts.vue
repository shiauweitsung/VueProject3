<template>
  <div class="back-wrap">
    <h2 class="back-title">產品列表</h2>
    <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      @click="openModal((isNew = true), {})"
    >
      建立新產品
    </button>
    <div class="back-products">
      <div
        class="back-products-item"
        v-for="(item, key) in products"
        :key="key"
      >
        <div class="back-products-item-img">
          <img :src="item.image" alt="" />
        </div>
        <div class="back-products-item-info">
          <p class="back-products-item-info-name">{{ item.title }}</p>
          <p>介紹</p>
          <p>US {{ item.price }}</p>
        </div>
        <button @click="openModal((isNew = false), item)">修改</button>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalproducts"
      tabindex="-1"
      role="dialog"
      aria-labelledby="productsLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="productsLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body modal-products">
            <form action="">
              <div class="modal-products-img">
                <p>上傳圖片網址:</p>
                <input type="file" />
                <input type="text" v-model="modalproduct.image" />
                <img :src="modalproduct.image" alt="" />
              </div>
              <div class="modal-products-title">
                <label for="product-title"></label>
                <input type="text" v-model="modalproduct.title" />
              </div>
              <div class="modal-products-txt">
                <div class="modal-products-txt-category">
                  <label for="product-category"></label>
                  <input type="text" v-model="modalproduct.category" />
                </div>
                <div class="modal-products-txt-unit">
                  <label for="product-unit"></label>
                  <input type="text" v-model="modalproduct.unit" />
                </div>
                <div class="modal-products-txt-price">
                  <label for="product-price"></label>
                  <input type="text" v-model="modalproduct.price" />
                </div>
                <div class="modal-products-txt-origin">
                  <label for="product-origin_price"></label>
                  <input type="text" v-model="modalproduct.origin_price" />
                </div>
              </div>
              <div class="modal-products-desc">
                <label for="product-description"></label>
                <input type="text" v-model="modalproduct.description" />
              </div>
              <div class="modal-products-cont">
                <label for="product-content"></label>
                <input type="text" v-model="modalproduct.content" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'backProducts',
  methods: {
    ...mapActions('backProducts', ['getProducts']),
    openModal (isNew, item) {
      console.log(isNew, item)
      this.$store.dispatch({
        type: 'backProducts/openModal',
        modalNew: isNew,
        item: item
      })
    }
  },
  computed: {
    ...mapGetters('backProducts', ['products', 'modalproduct'])
  },
  created () {
    this.getProducts()
  }
}
</script>
