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
      <div class="recommend">
        <h4>為您推薦</h4>
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
                    <p>{{ item.price }}</p>
                    <p>{{ item.origin_price }}</p>
                    <router-link to="" class="learn-more">查看細節</router-link>
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
                  <button
                    class="main-btn"
                    @click="addCart(item.id, item.count, item)"
                  >
                    <img src="~@/assets/images/icon/cart.png" alt="" />
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
    ...mapGetters('products', ['products', 'category']),
    ...mapGetters(['isLoading']),
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
  }
}
</script>
