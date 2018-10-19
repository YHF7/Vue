/*
 * @Author: yhf 
 * @Date: 2018-10-19 21:05:08 
 * @Last Modified by: yhf
 * @Last Modified time: 2018-10-19 21:19:42
 */
<template>
  <div>
    <h1>这是app组件，使用 .vue 文件定义出来的</h1>
    <router-link to="account" id="account">Account</router-link>
    <router-link to="goodslist" id="goodslist">GoodsList</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style>
#account,
#goodslist {
  color: pink;
  background-color: yellow;
}
</style>
