<template>
  <div>
    <transition-group name="fade">
      <div
        class="message"
        v-for="(item, key) in message"
        :key="key"
        :class="item.status"
      >
        <p>{{ item.message }}</p>
        <button
          type="button"
          @click="removeMessageNow(key)"
          aria-label="Close"
          class="close-btn"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </transition-group>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'alertMessage',
  methods: {
    updateMessage: function (message, status) {
      this.$store.dispatch('updateMessage', { message, status })
    },
    removeMessage: function (timestemp) {
      this.$store.dispatch('removeMessage', timestemp)
    },
    removeMessageNow: function (num) {
      this.$store.dispatch('removeMessageNow', num)
    }
  },
  computed: {
    ...mapGetters(['message'])
  }
}
</script>
<style lang="scss" scope>
@import '@/assets/all.scss';
.message {
  position: fixed;
  right: 0px;
  top: 100px;
  padding: 10px 15px;
  text-align: center;
  transition: all 0.5s;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    margin-left: 15px;
    margin-right: 15px;
  }
}
.close-btn {
  text-align: right;
}
.success {
  background-color: map-get($color, main);
}
.error {
  background-color: map-get($color, red);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
