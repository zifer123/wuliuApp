import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import OrderSearch from '../pages/OrderSearch.vue'
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/orderSearch',
      name: 'OrderSearch',
      component: OrderSearch
    },
  ]
})
