/*
 * @Author: yhf 
 * @Date: 2018-10-27 16:16:31 
 * @Last Modified by: yhf
 * @Last Modified time: 2018-11-03 21:38:57
 */
const model = require('./model.js')

module.exports = { // 获取轮播图
  getlunbo(req, res) {
    model.getlunbo(function (err, results) {
      fj(req, res, err, results);
    });

  },
  getnewslist(req, res) { // 获取新闻资讯
    model.getnewslist(function (err, results) {
      fj(req, res, err, results);
    });
  },
  getnew(req, res) { // 获取新闻详情
    model.getnew(req.params.newid, function (err, results) {
      fj(req, res, err, results);
    });
  },
  getcomments(req, res) { // 获取评论信息
    model.getcomments(req.params.artid, (req.query.pageindex - 1) * 5, function (err, results) {
      if (results.length === 0 && req.params.pageindex > 1) return res.json({
        status: 2,
        message: '以无更多数据！'
      });
      fj(req, res, err, results);
    });
  },
  postcomment(req, res) { // 添加提交评论信息
    let data = {
      user_name: "匿名用户",
      add_time: Date.now(),
      content: req.body.content
    }
    model.postcomment(req.params.artid, data, function (err, results) {
      fj(req, res, err, "评论提交成功");
    })
  },
  getimgcategory(req, res) { // 获取图片分析分类数据
    model.getimgcategory(function (err, results) {
      fj(req, res, err, results);
    })
  },
  getimages(req, res) { // 获取图片分享列表数据
    model.getimages(req.params.imgid, function (err, results) {
      fj(req, res, err, results);
    })
  },
  getimageInfo(req, res) { // 获取图片分析列表的图片详情
    model.getimageInfo(req.params.imgid, function (err, results) {
      fj(req, res, err, results);
    })
  },
  getthumimages(req, res) { // 获取图片详情缩略图和商品购物轮播图api
    model.getthumimages(req.params.imgid, function (err, results) {
      fj(req, res, err, results);
    })
  },
  getgoods(req, res) { // 获取商品列表数据
    model.getgoods((req.query.pageindex - 1) * 10, function (err, results) {
      zh(results);
      fj(req, res, err, results);
    })
  },
  getsplbt(req, res) { // 获取商品轮播图
    model.getsplbt(req.params.imgid, function (err, results) {
      fj(req, res, err, results);
    })
  },
  goodsgetinfo(req, res) { // 获取商品参数区和价格，标题等数据
    model.goodsgetinfo(req.params.id, function (err, results) {
      zh(results);
      fj(req, res, err, results);
    })
  },
  goodsgetdesc(req, res) { // 获取商品参数的图文介绍
    model.goodsgetdesc(req.params.id, function (err, results) {
      fj(req, res, err, results);
    })
  },
  goodsgetshopcarlist(req, res) { // 获取购物车列表
    model.goodsgetshopcarlist(req.params.ids, function (err, results) {
      fj(req, res, err, results);
    })
  }
}

fj = (req, res, err, results) => { // 回调函数
  if (err) return res.json({
    status: 1,
    message: '服务器错误！'
  });
  res.json({
    status: 0,
    message: results
  });
}

zh = (results) => {
  for (let i = 0; i < results.length; i++) {
    const ele = results[i];
    ele.sell_price = parseInt(ele.sell_price);
    ele.market_price = parseInt(ele.market_price);
    ele.stock_quantity = parseInt(ele.stock_quantity);
    ele.add_time = parseInt(ele.add_time);
  }
}