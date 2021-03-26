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
    <h2 class="mb-3">訂單列表</h2>
    <table class="order-table">
      <thead>
        <tr>
          <td>姓名</td>
          <td>信箱</td>
          <td align="center">電話</td>
          <td align="center">地址</td>
          <td align="center">編輯</td>
        </tr>
      </thead>
      <tbody v-for="(item, key) in orderData" :key="key" style="color: white">
        <tr>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.email }}</td>
          <td align="center">{{ item.user.tel }}</td>
          <td align="center">{{ item.user.address }}</td>
          <td align="center">
            <button class="main-btn mr-2" @click="openModal(item)">修改</button>
            <button class="main-btn">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div
      class="modal fade"
      id="backOrder"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="name"></label>
            <input type="text" v-model="orderModal.user.name" />
            <label for="tel"></label>
            <input type="text" v-model="orderModal.user.tel" />
            <label for="email"></label>
            <input type="text" v-model="orderModal.user.email" />
          </div>
          <div class="modal-footer">
            <button type="button" class="main-btn" data-dismiss="modal">
              關閉
            </button>
            <button type="button" class="main-btn">完成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'backOrder',
  data () {
    return {
      orderModal: []
    }
  },
  methods: {
    ...mapActions('backOrder', ['getOrder']),
    openModal (item) {
      console.log(item)
      this.orderModal = item
      $('#backOrder').modal('show')
    },
    editOrder (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/order/${id}`
    }
  },
  computed: {
    ...mapGetters('backOrder', ['orderData']),
    ...mapGetters(['isLoading'])
  },
  created () {
    this.getOrder()
  }
}
</script>
