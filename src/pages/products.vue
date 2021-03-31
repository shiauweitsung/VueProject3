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
      <div class="recommend">
        <h4>為您推薦</h4>
        <div v-for="(item, key) in productsPage" :key="key">
          {{ item.title }}
        </div>
      </div>
      <div class="products">
        <div class="products-category">
          <h4>分類</h4>
          <ul>
            <li
              class="products-category-title"
              @click="(show = !show), (rotate = !rotate)"
            >
              產品列表
              <span
                ><img
                  :class="{ rotate90: rotate }"
                  src="~@/assets/images/icon/arrow.png"
                  alt=""
              /></span>
            </li>
            <transition-group name="category">
              <li
                class="products-category-item"
                key="allCategory"
                v-show="show"
              >
                <router-link
                  :to="{ name: 'products', params: { category: 'all' } }"
                  >全部</router-link
                >
              </li>
              <li
                v-for="(item, key) in category"
                :key="key"
                v-show="show"
                class="products-category-item"
              >
                <router-link
                  :to="{ name: 'products', params: { category: item.title } }"
                >
                  {{ item.title }} <span>({{ item.num }})</span>
                </router-link>
              </li>
            </transition-group>
          </ul>
        </div>
        <div class="products-cont">
          <div class="products-cont-title">
            <h4>產品列表</h4>
            <div class="products-cont-title-sort">
              <button class="main-btn" @click="sortShow = !sortShow">
                篩選 : <span v-if="sortBy === 'priceH'">價錢高→低</span>
                <span v-else-if="sortBy === 'priceL'">價錢低→高</span>
              </button>
              <div v-if="sortShow" class="products-cont-title-sort-cont">
                <button
                  @click="
                    {
                      (sortBy = 'priceH'), (sortShow = !sortShow);
                    }
                  "
                  key="sortKey"
                >
                  價錢高→低
                </button>
                <button
                  @click="
                    {
                      (sortBy = 'priceL'), (sortShow = !sortShow);
                    }
                  "
                  key="sortKey2"
                >
                  價錢低→高
                </button>
              </div>
            </div>
          </div>
          <div class="products-cont-list">
            <transition-group name="products" tag="div">
              <div
                class="products-cont-item"
                v-for="(item, key) in filterProducts"
                :key="key"
              >
                <div>
                  <div class="products-cont-item-img">
                    <img :src="item.image" alt="" />
                  </div>
                  <div class="products-cont-item-info">
                    <p>{{ item.title }}</p>
                    <p>{{ item.description }}</p>
                    <p class="origin-price">原價 ${{ item.price }}</p>
                    <p class="sale-price mb-4">特價 ${{ item.origin_price }}</p>
                    <button
                      to=""
                      class="learn-more"
                      @click="productDetail(item.id)"
                    >
                      查看細節
                    </button>
                  </div>
                </div>
                <div>
                  <div class="products-cont-item-btn">
                    <button @click="addCount(item)">+</button>
                    <input
                      type="number"
                      v-model="item.count"
                      @keypress="keypress"
                      @input="checkCount"
                      oninput="if(value.length>3)value=value.slice(0,3)"
                      id="countNumb"
                    />
                    <button @click="decreaseCount(item)">-</button>
                  </div>
                  <button @click="addCart(item.id, item.count, item)">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 456.029 456.029"
                      style="enable-background: new 0 0 456.029 456.029"
                      xml:space="preserve"
                      class="add-cart-btn"
                    >
                      <g>
                        <g>
                          <path
                            d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248    c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48    C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064    c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4    C457.728,97.71,450.56,86.958,439.296,84.91z"
                          />
                        </g>
                      </g>
                      <g>
                        <g>
                          <path
                            d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296    c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                          />
                        </g>
                      </g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                      <g></g>
                    </svg>
                    <transition
                      appear
                      v-for="(item, index) in showMoveDot"
                      :key="index"
                      @before-appear="beforeEnter"
                      @after-appear="afterEnter"
                    >
                      <div
                        class="products-cont-item-btn-img"
                        ref="ball"
                        v-if="item"
                      >
                        <img :src="dropimg" alt="" />
                      </div>
                    </transition>
                  </button>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { mapMultiRowFields } from 'vuex-map-fields'

export default {
  name: 'products',
  data () {
    return {
      show: true,
      rotate: true,
      showMoveDot: [],
      dropimg: '',
      sortBy: '',
      sortShow: false
    }
  },
  methods: {
    ...mapActions('products', ['getProducts', 'getCart']),
    addCart (id, qty, product) {
      this.$store.dispatch('products/addCart', { id, qty })
      this.showMoveDot = [...this.showMoveDot, true]
      this.elLeft = event.target.getBoundingClientRect().left
      this.elTop = event.target.getBoundingClientRect().top
      this.dropimg = product.image
    },
    productDetail (id) {
      this.$router.push(`/product/${id}`)
    },
    keypress (e) {
      if (e.key === '+' || e.key === 'e' || e.key === '-') {
        e.preventDefault()
      }
    },
    checkCount (e) {
      let value = Number(e.target.value)
      if (value < 1 || value === '' || value === 0) {
        e.target.value = 0
        alert('最小數量為1 不可為0或是空白')
      }
    },
    addCount (item) {
      this.$store.commit('products/COUNTADD', item)
    },
    decreaseCount (item) {
      this.$store.commit('products/COUNTDECREASE', item)
    },
    beforeEnter (el) {
      el.style.transform = `translate3d(${this.elLeft}px,${this.elTop}px , 0)`
      el.style.opacity = 1
    },
    afterEnter (el) {
      // 取得購物車位置
      const badgePosition = document
        .querySelector('.header-account-cart')
        .getBoundingClientRect()
      // 設置小球移動的位移
      el.style.transform = `translate3d(${badgePosition.left - 30}px,${badgePosition.top}px,0)`
      el.style.transition = 'transform .88s linear'
      // 讓動畫消失
      this.showMoveDot = this.showMoveDot.map(() => false)
      // 設置透明度
      el.style.opacity = 1
      // 監聽動畫結束後 執行callback
      el.addEventListener('transitionend', () => {
        el.style.display = 'none'
        this.count++
        this.listenInCart()
      })
    },
    listenInCart () {
      // 取得購物車的DOM元素添加class
      document.querySelector('.header-account-cart').classList.add('moveToCart')
      setTimeout(() => {
        // 500毫秒後移除底部Tabbar購物車的DOM元素class
        document.querySelector('.header-account-cart').classList.remove('moveToCart')
      }, 500)
    },
    productsSort () {
      this.filterProducts.sort((a, b) => {
        return b.price - a.price
      })
    },
    getProductPage () {
      this.$store.dispatch('products/getProductPage', 1)
    }
  },
  mounted () {
    document.addEventListener('mouseup', (e) => {
      this.$nextTick(() => {
        let sort = document.querySelector('.products-cont-title-sort-cont')
        if (sort) {
          if (!sort.contains(e.target)) {
            this.sortShow = false
          }
        }
      })
    })
  },
  computed: {
    ...mapGetters('products', ['products', 'category', 'productsPage']),
    ...mapGetters(['isLoading']),
    ...mapMultiRowFields('products', ['products']),
    Nowcategory () {
      // 取得現在網址的位置
      return this.$route.params.category
    },
    filterProducts () {
      // 監聽網址過濾的分類 進行產品過濾
      let filter = this.products.filter(res => {
        if (this.Nowcategory === 'all') {
          return res
        } else {
          return res.category === this.Nowcategory
        }
      })
      if (this.sortBy === 'priceH') {
        filter.sort((a, b) => {
          return b.price - a.price
        })
      } else if (this.sortBy === 'priceL') {
        filter.sort((a, b) => {
          return a.price - b.price
        })
      }
      return filter
    }
  },
  created () {
    this.getProducts()
    this.getProductPage()
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop
      let clientHeight = document.documentElement.clientHeight
      let scrollHeight = document.documentElement.scrollHeight
      if (scrollTop + clientHeight === scrollHeight) {
        console.log('到底部了')
      }
    })
  }
}
</script>
