import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Mine from '@/pages/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
