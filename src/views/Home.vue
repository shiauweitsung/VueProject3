<template>
  <div class="home">
    <headers />
    <router-view></router-view>
    <footers />
  </div>
</template>

<script>
import headers from '@/components/header.vue'
import footers from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    headers,
    footers
  }
}
</script>
