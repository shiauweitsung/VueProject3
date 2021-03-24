<template>
  <div class="back-wrap">
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
    <h2 class="back-title">產品列表</h2>
    <button
      type="button"
      class="main-btn"
      data-toggle="modal"
      @click="openModal({})"
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
          <p>{{ item.description }}</p>
          <p>US {{ item.price }}</p>
          <p>{{ item.content }}</p>
        </div>
        <button class="back-products-item-btn" @click="editshow(item)">
          <svg
            id="Layer_1"
            enable-background="new 0 0 512 512"
            height="24"
            viewBox="0 0 512 512"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="m272.066 512h-32.133c-25.989 0-47.134-21.144-47.134-47.133v-10.871c-11.049-3.53-21.784-7.986-32.097-13.323l-7.704 7.704c-18.659 18.682-48.548 18.134-66.665-.007l-22.711-22.71c-18.149-18.129-18.671-48.008.006-66.665l7.698-7.698c-5.337-10.313-9.792-21.046-13.323-32.097h-10.87c-25.988 0-47.133-21.144-47.133-47.133v-32.134c0-25.989 21.145-47.133 47.134-47.133h10.87c3.531-11.05 7.986-21.784 13.323-32.097l-7.704-7.703c-18.666-18.646-18.151-48.528.006-66.665l22.713-22.712c18.159-18.184 48.041-18.638 66.664.006l7.697 7.697c10.313-5.336 21.048-9.792 32.097-13.323v-10.87c0-25.989 21.144-47.133 47.134-47.133h32.133c25.989 0 47.133 21.144 47.133 47.133v10.871c11.049 3.53 21.784 7.986 32.097 13.323l7.704-7.704c18.659-18.682 48.548-18.134 66.665.007l22.711 22.71c18.149 18.129 18.671 48.008-.006 66.665l-7.698 7.698c5.337 10.313 9.792 21.046 13.323 32.097h10.87c25.989 0 47.134 21.144 47.134 47.133v32.134c0 25.989-21.145 47.133-47.134 47.133h-10.87c-3.531 11.05-7.986 21.784-13.323 32.097l7.704 7.704c18.666 18.646 18.151 48.528-.006 66.665l-22.713 22.712c-18.159 18.184-48.041 18.638-66.664-.006l-7.697-7.697c-10.313 5.336-21.048 9.792-32.097 13.323v10.871c0 25.987-21.144 47.131-47.134 47.131zm-106.349-102.83c14.327 8.473 29.747 14.874 45.831 19.025 6.624 1.709 11.252 7.683 11.252 14.524v22.148c0 9.447 7.687 17.133 17.134 17.133h32.133c9.447 0 17.134-7.686 17.134-17.133v-22.148c0-6.841 4.628-12.815 11.252-14.524 16.084-4.151 31.504-10.552 45.831-19.025 5.895-3.486 13.4-2.538 18.243 2.305l15.688 15.689c6.764 6.772 17.626 6.615 24.224.007l22.727-22.726c6.582-6.574 6.802-17.438.006-24.225l-15.695-15.695c-4.842-4.842-5.79-12.348-2.305-18.242 8.473-14.326 14.873-29.746 19.024-45.831 1.71-6.624 7.684-11.251 14.524-11.251h22.147c9.447 0 17.134-7.686 17.134-17.133v-32.134c0-9.447-7.687-17.133-17.134-17.133h-22.147c-6.841 0-12.814-4.628-14.524-11.251-4.151-16.085-10.552-31.505-19.024-45.831-3.485-5.894-2.537-13.4 2.305-18.242l15.689-15.689c6.782-6.774 6.605-17.634.006-24.225l-22.725-22.725c-6.587-6.596-17.451-6.789-24.225-.006l-15.694 15.695c-4.842 4.843-12.35 5.791-18.243 2.305-14.327-8.473-29.747-14.874-45.831-19.025-6.624-1.709-11.252-7.683-11.252-14.524v-22.15c0-9.447-7.687-17.133-17.134-17.133h-32.133c-9.447 0-17.134 7.686-17.134 17.133v22.148c0 6.841-4.628 12.815-11.252 14.524-16.084 4.151-31.504 10.552-45.831 19.025-5.896 3.485-13.401 2.537-18.243-2.305l-15.688-15.689c-6.764-6.772-17.627-6.615-24.224-.007l-22.727 22.726c-6.582 6.574-6.802 17.437-.006 24.225l15.695 15.695c4.842 4.842 5.79 12.348 2.305 18.242-8.473 14.326-14.873 29.746-19.024 45.831-1.71 6.624-7.684 11.251-14.524 11.251h-22.148c-9.447.001-17.134 7.687-17.134 17.134v32.134c0 9.447 7.687 17.133 17.134 17.133h22.147c6.841 0 12.814 4.628 14.524 11.251 4.151 16.085 10.552 31.505 19.024 45.831 3.485 5.894 2.537 13.4-2.305 18.242l-15.689 15.689c-6.782 6.774-6.605 17.634-.006 24.225l22.725 22.725c6.587 6.596 17.451 6.789 24.225.006l15.694-15.695c3.568-3.567 10.991-6.594 18.244-2.304z"
            />
            <path
              fill="white"
              d="m256 367.4c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4zm0-192.8c-44.885 0-81.4 36.516-81.4 81.4s36.516 81.4 81.4 81.4 81.4-36.516 81.4-81.4-36.515-81.4-81.4-81.4z"
            />
          </svg>
        </button>
        <transition name="fade">
          <div class="back-products-item-btn-edit" v-if="item.show">
            <button class="main-btn" @click="openModal(item)">修改</button>
            <button class="main-btn" @click="delProducts(item)">刪除</button>
          </div>
        </transition>
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
                <div>
                  <p>上傳圖片網址 :</p>
                  <input type="file" ref="file" @change="updateFiled" />
                  <label for="imgUrl">網址 : </label>
                  <input type="text" id="imgUrl" :value="modalproduct.image" />
                </div>
                <img
                  :src="modalproduct.image"
                  alt=""
                  v-if="modalproduct.image"
                />
              </div>
              <div class="modal-products-title">
                <label for="product-title">名稱 : </label>
                <input
                  type="text"
                  id="product-title"
                  :value="modalproduct.title"
                />
              </div>
              <div class="modal-products-txt">
                <div class="modal-products-txt-category">
                  <label for="product-category">分類 : </label>
                  <input
                    type="text"
                    id="product-category"
                    :value="modalproduct.category"
                  />
                </div>
                <div class="modal-products-txt-unit">
                  <label for="product-unit">單位 : </label>
                  <input
                    type="text"
                    id="product-unit"
                    :value="modalproduct.unit"
                  />
                </div>
                <div class="modal-products-txt-price">
                  <label for="product-price">價錢 : </label>
                  <input
                    type="text"
                    id="product-price"
                    :value="modalproduct.price"
                  />
                </div>
                <div class="modal-products-txt-origin">
                  <label for="product-origin_price">原價 : </label>
                  <input
                    type="text"
                    id="product-origin_price"
                    :value="modalproduct.origin_price"
                  />
                </div>
              </div>
              <div class="modal-products-desc">
                <label for="product-description">介紹 : </label>
                <textarea
                  cols="40"
                  rows="10"
                  type="text"
                  id="product-description"
                  v-model="message"
                />
              </div>
              <div class="modal-products-cont">
                <label for="product-content">內容 : </label>
                <textarea
                  cols="40"
                  rows="10"
                  type="text"
                  id="product-content"
                  :value="modalproduct.content"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="main-btn"
              @click="updateProduct(modalproduct)"
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
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'backProducts',
  methods: {
    ...mapActions('backProducts', ['getProducts']),
    openModal (item) {
      console.log(item)
      this.$store.dispatch({
        type: 'backProducts/openModal',
        item: item
      })
      console.log(this.$store.state.backProducts.modalProduct)
    },
    editshow (item) {
      console.log(item)
      this.$store.commit('backProducts/EDITSHOW', item)
    },
    updateFiled () {
      const updatefile = this.$refs.file.files[0]
      const vm = this
      const formData = new FormData()
      formData.append('file-to-upload', updatefile)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      this.$store.dispatch('updateLoading', true)
      this.$http.post(url, formData, {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res)
        if (res.data.success) {
          vm.$set(vm.modalproduct, 'image', res.data.imageUrl)
        }
        this.$store.dispatch('updateLoading', false)
      })
    },
    updateProduct (item) {
      console.log(item)
      this.$store.dispatch('backProducts/updateProduct', item)
    },
    delProducts (item) {
      this.$store.dispatch('backProducts/delProduct', item)
    },
    updateMoudleProduct (e) {
      console.log(e)
      this.$store.commit('backProducts/UPDATEMOUDLEPRODUCT', e.target.value)
    }
  },
  computed: {
    ...mapGetters('backProducts', ['products', 'modalproduct']),
    ...mapGetters(['isLoading']),
    message: {
      get () {
        return this.$store.state.backProducts.modalProduct.description
      },
      set (value) {
        this.$store.commit('backProducts/UPDATEMOUDLEPRODUCT', value)
      }
    }
  },
  created () {
    this.getProducts()
    console.log(this.$store.state.backProducts.modalProduct.description)
  }
}
</script>
