<template>
  <div class="main-container">
    <h1>home</h1>
    <p>{{msg}}</p>
    <button v-on:click="reverseMessage">按钮</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '我是home 组件'
    }
  },
  methods: {
    reverseMessage: function () {
      alert(this.msg)
    }
  }
}
</script>
