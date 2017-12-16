import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import goodsDetail from '@/pages/goodsDetail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/bid/detail/:id',
    name: 'goodsDetail',
    component: goodsDetail
  },
  {
    path: '/bid',
    name: 'home',
    component: home
  },
  {
    path: '/account',
    name: 'home',
    component: home
  }
  ]
})
