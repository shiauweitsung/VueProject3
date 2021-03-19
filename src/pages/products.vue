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
            <transition-group name="fade">
              <li
                v-for="(item, key) in category"
                :key="key"
                v-show="show"
                class="products-category-item"
              >
                {{ item.title }} <span>({{ item.num }})</span>
              </li>
            </transition-group>
          </ul>
        </div>
        <div class="products-cont">
          <h4>產品列表</h4>
          <div class="products-cont-list">
            <div
              class="products-cont-item"
              v-for="(item, key) in products"
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
                    v-model="count"
                    @keypress="keypress"
                    @input="checkCount"
                    oninput="if(value.length>3)value=value.slice(0,3)"
                    id="countNumb"
                  />
                  <button @click="decreaseCount">-</button>
                </div>
                <button class="main-btn" @click="addCart(item.id, (qty = 1))">
                  加入購物車
                </button>
              </div>
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
  name: 'products',
  data () {
    return {
      show: true,
      rotate: true
    }
  },
  methods: {
    ...mapActions('products', ['getProducts', 'getCart']),
    addCart (id, qty) {
      this.$store.dispatch('products/addCart', { id, qty })
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
    decreaseCount () {
      this.$store.commit('products/COUNTDECREASE')
    }
  },
  computed: {
    ...mapGetters('products', ['products', 'category']),
    ...mapGetters(['isLoading']),
    count: {
      get () {
        return this.$store.state.products.count
      },
      set (value) {
        this.$store.commit('products/COUNTSET', value)
      }
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>
