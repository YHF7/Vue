/*
 * @Author: yhf 
 * @Date: 2018-10-19 22:00:56 
 * @Last Modified by: yhf
 * @Last Modified time: 2018-10-19 22:02:27
 */
// router.js 路由

// 1. 导入 vue-router 包
import VueRouter from 'vue-router';
// 导入 main 文件夹内定义对组件 account goodslist
import account from './main/Account.vue';
import goodslist from './main/GoodsList.vue';
// 导入 subcom 文件夹内 account 的子组件 login register
import login from './subcom/login.vue';
import register from './subcom/register.vue';

// 3. 创建路由对象
let router = new VueRouter({
    routes: [{
        path: '/account',
        component: account,
        children: [{
            path: 'login',
            component: login
        }, {
            path: 'register',
            component: register
        }]
    }, {
        path: '/goodslist',
        component: goodslist
    }]
})

// 把路由暴露出去
export default router;