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
      <div class="login">
        <div class="login-left">
          <div>
            <p>方便管理的後台系統</p>
            <p>簡易好看的操作畫面</p>
          </div>
        </div>
        <div class="login-right">
          <h4>登入帳號</h4>
          <ValidationObserver ref="form">
            <form @submit.prevent="onSubmit">
              <ValidationProvider
                class="login-input-item"
                rules="email|required"
                v-slot="{ errors }"
              >
                <label class="login-label" for="account">帳號 : </label>
                <input
                  class="login-input"
                  type="email"
                  name="email"
                  v-model="user.username"
                />
                <span class="error-txt">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider
                class="login-input-item"
                rules="required"
                v-slot="{ errors }"
              >
                <label class="login-label" for="password">密碼 : </label>
                <input
                  type="password"
                  name="password"
                  class="login-input"
                  v-model="user.password"
                />
                <span class="error-txt">{{ errors[0] }}</span>
              </ValidationProvider>
              <div class="login-submit">
                <button type="submit">登入</button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const vm = this
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$store.dispatch('updateLoading', true)
      this.$refs.form.validate().then(success => {
        if (!success) {
          alert('請正確填寫資料')
        } else {
          vm.$http.post(url, vm.user).then((res) => {
            const token = res.data.token
            const expired = res.data.expired
            if (res.data.success) {
              document.cookie = `shiaurazer=${token}; expires=${new Date(expired)};`
              vm.$router.push('/admin')
            } else {
              alert('帳號密碼錯誤')
            }
            this.$store.dispatch('updateLoading', false)
          })
        }
      })
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>
