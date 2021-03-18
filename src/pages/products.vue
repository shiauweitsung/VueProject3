<template>
  <div class="wrap">
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
              <div class="products-cont-item-img">
                <img :src="item.image" alt="" />
              </div>
              <div class="products-cont-item-info">
                <p>{{ item.title }}</p>
                <p>{{ item.description }}</p>
                <p>{{ item.price }}</p>
                <p>{{ item.origin_price }}</p>
                <router-link to="" class="learn-more">查看細節</router-link>
                <button class="main-btn">加入購物車</button>
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
      show: false,
      rotate: false
    }
  },
  methods: {
    ...mapActions('products', ['getProducts'])
  },
  computed: {
    ...mapGetters('products', ['products', 'category'])
  },
  created () {
    this.getProducts()
  }
}
</script>
