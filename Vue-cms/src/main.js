/*
 * @Author: yhf 
 * @Date: 2018-10-21 10:04:42 
 * @Last Modified by: yhf
 * @Last Modified time: 2018-10-21 10:30:18
 */

//  main.js 入口文件


// 导入 vue
import Vue from 'vue';

// 导入 Mui 样式
import './lib/mui/css/mui.min.css';

// 按需导入 Mint-UI 中的组件
import {
    Header
} from 'mint-ui';
Vue.component(Header.name, Header);

// 导入 app 根组件
import app from './App.vue'

let vm = new Vue({
    el: '#app',
    render: c => c(app)
})