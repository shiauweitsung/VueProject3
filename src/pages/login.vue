<template>
  <div class="wrap">
    <div class="content">
      <h2>登入</h2>
      <ValidationObserver ref="form">
        <form @submit.prevent="onSubmit">
          <ValidationProvider rules="email|required" v-slot="{ errors }">
            <label for="account">帳號 : </label>
            <input type="email" name="email" v-model="user.username" />
            <span class="error-txt">{{ errors[0] }}</span>
          </ValidationProvider>
          <ValidationProvider rules="required" v-slot="{ errors }">
            <label for="password">密碼 : </label>
            <input type="password" name="password" v-model="user.password" />
            <span class="error-txt">{{ errors[0] }}</span>
          </ValidationProvider>
          <button type="submit">登入</button>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
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
          })
        }
      })
    }
  }
}
</script>
