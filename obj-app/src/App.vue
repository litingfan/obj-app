<template>
  <div id="app">
    <header>
      <div class="page-top-head">
        <div class="inner">
          <div class="left">欢迎来到材料大全</div>
          <div class="pointer" v-on:click="goMine">个人中心</div>
        </div>
      </div>
      <nav class="page-nav">
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于我们</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goMine: function () {
      this.$router.push({name: 'mine'})
    }
  }
}
</script>
