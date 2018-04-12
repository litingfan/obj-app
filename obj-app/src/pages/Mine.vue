<template>
  <div class="main-container">
    <h1>个人中心</h1>
    <p>{{ userinfo && userinfo.username }}</p>
    <button v-on:click="reverseMessage">按钮</button>
  </div>
</template>
<script>
import request from '../request'
export default {
  data () {
    return {
      userinfo: null
    }
  },
  methods: {
    reverseMessage: function () {
      alert(this.userinfo.username)
    },
    getUserInfo: function () {
      request.get('/api/users/getUser/1')
        .then((response) => {
          this.userinfo = response.data
        })
    }
  },
  beforeMount () {
    this.getUserInfo()
  }
}
</script>
