/*
 * @Author: yhf 
 * @Date: 2018-10-27 16:16:38 
 * @Last Modified by: yhf
 * @Last Modified time: 2018-11-03 21:07:57
 */
const express = require('express')

const router = express.Router()
// 导入业务逻辑模块
const ctrl = require('./controller.js')

router
  .get('/', (req, res) => {
    res.send('欢迎访问 Node 服务器数据 API 接口！')
  })
  .get('/api/getlunbo', ctrl.getlunbo) // 获取轮播图
  .get('/api/getnewslist', ctrl.getnewslist) // 获取新闻资讯
  .get('/api/getnew/:newid', ctrl.getnew) // 获取新闻详情
  .get('/api/getcomments/:artid', ctrl.getcomments) // 获取评论信息
  .post('/api/postcomment/:artid', ctrl.postcomment) // 添加提交评论信息
  .get('/api/getimgcategory', ctrl.getimgcategory) // 获取图片分析分类数据
  .get('/api/getimages/:imgid', ctrl.getimages) // 获取图片分享列表数据
  .get('/api/getimageInfo/:imgid', ctrl.getimageInfo) // 获取图片分析列表的图片详情
  .get('/api/getthumimages/:imgid', ctrl.getthumimages) // 获取图片详情缩略图和商品购物轮播图api
  .get('/api/getgoods', ctrl.getgoods) // 获取商品列表数据
  .get('/api/getsplbt/:imgid', ctrl.getsplbt) // 获取商品轮播图
  .get('/api/goods/getinfo/:id', ctrl.goodsgetinfo) // 获取商品参数区和价格，标题等数据
  .get('/api/goods/getdesc/:id', ctrl.goodsgetdesc) // 获取商品参数的图文介绍
  .get('/api/goods/getshopcarlist/:ids',ctrl.goodsgetshopcarlist)  // 获取购物车列表

module.exports = router