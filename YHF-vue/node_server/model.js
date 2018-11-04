/*
 * @Author: yhf 
 * @Date: 2018-10-27 16:16:35 
 * @Last Modified by: yhf
 * @Last Modified time: 2018-11-03 21:41:29
 */
const mysql = require('mysql')

const conn = mysql.createConnection({
  host: '127.0.0.1',
  database: 'VueUsers',
  user: 'root',
  password: ''
})

module.exports = {
  getlunbo(callback) { // 获取轮播图
    const sql = 'select * from lunbotu';
    conn.query(sql, callback);
  },
  getnewslist(callback) { // 获取新闻资讯
    const sql = 'select * from xwzx';
    conn.query(sql, callback);
  },
  getnew(id, callback) { // 获取新闻详情
    const sql = 'select id,title,click,add_time,content from xwzx where id=?';
    conn.query(sql, [id], callback);
  },
  getcomments(id, pageindex, callback) { // 获取评论信息
    const sql = 'select * from(select * from xwpl where id = ? order by add_time desc) id limit ?, 5';
    conn.query(sql, [id, pageindex], callback);
  },
  postcomment(id, data, callback) { // 添加提交评论信息
    const sql = "insert into `VueUsers`.`xwpl`(`add_time`, `id`, `content`, `user_name`) values(?, ?, ?, ?)";
    conn.query(sql, [data.add_time, id, data.content, data.user_name], callback);
  },
  getimgcategory(callback) { // 获取图片分析分类数据
    const sql = 'select * from imgcategory';
    conn.query(sql, callback);
  },
  getimages(id, callback) { // 获取图片分享列表数据
    if (id == 0) {
      const sql = 'select id,img_url,title,zhaiyao,px from images order by px desc';
      conn.query(sql, callback);
    } else {
      const sql = 'select id,img_url,title,zhaiyao,px from images where id = ? order by px desc';
      conn.query(sql, [id], callback);
    }
  },
  getimageInfo(px, callback) { // 获取图片分析列表的图片详情
    const sql = 'select id,title,click,add_time,content from images where px = ?';
    conn.query(sql, [px], callback);
  },
  getthumimages(px, callback) { // 获取图片详情缩略图和商品购物轮播图api
    const sql = 'select src from sltapi where id = ?';
    conn.query(sql, [px], callback);
  },
  getgoods(pageindex, callback) { // 获取商品列表数据
    // const sql = 'select * from(select * from goods order by add_time desc) id limit ?,10';
    const sql = 'select * from goods id limit ?,10';
    conn.query(sql, [pageindex], callback);
  },
  getsplbt(id, callback) { // 获取商品轮播图
    const sql = 'select src from splbt where id = ?';
    conn.query(sql, [id], callback);
  },
  goodsgetinfo(id, callback) { // 获取商品参数区和价格，标题等数据
    const sql = 'select id,title,add_time,goods_no,stock_quantity,market_price,sell_price from goods where id = ?';
    conn.query(sql, [id], callback);
  },
  goodsgetdesc(id, callback) { // 获取商品参数的图文介绍
    const sql = 'select id,content,title from goods where id = ?';
    conn.query(sql, [id], callback);
  },
  goodsgetshopcarlist(ids, callback) { // 获取购物车列表
    const sql = 'select id,title,sell_price,img_url from goods where id in (' + ids + ')';
    conn.query(sql, callback)
  }
}