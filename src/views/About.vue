<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  mounted () {
    console.log($(this))
    $('h1').click(function () {
      console.log('h1')
    })
  },
  created () {
    const vm = this
    const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
    vm.$http.get(url).then(function (res) {
      console.log(res)
    })
  }
}
</script>
