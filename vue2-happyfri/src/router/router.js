// 实现路由

import App from '../App'

export default [{
  path: '/',
  component: App,
  children: [{ //子路由
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home') // 主页面
  }, {
    path: '/item',
    component: r => require.ensure([], () => r(require('../page/item')), 'item') // 做题
  }, {
    path: '/score',
    component: r => require.ensure([], () => r(require('../page/score')), 'score') // 得分页
  }]
}]
