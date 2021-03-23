<template>
  <div class="wrap">
    <div class="content">購物車</div>
    {{ cart }}
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'cart',
  methods: {
    ...mapActions('products', ['getCart'])
  },
  computed: {
    ...mapGetters('products', ['cart'])
  }
}
</script>
