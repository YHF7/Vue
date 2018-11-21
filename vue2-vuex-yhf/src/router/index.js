import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Item from "@/page/Item"
import Score from '@/page/Score'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: 'home'
  },{
    path: '/home',
    name: 'home',
    component: Home
  },{
    path: '/item',
    name: 'item',
    component: Item
  }, {
    path: '/score',
    name: 'score',
    component: Score
  }]
})
