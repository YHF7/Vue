const express = require('express');
// 创建服务
const app = express();
// 引入url
const urlModule = require('url');

// 判断路由
app.get('/index', function (req, res) {

    // 获取url数据
    const {
        query
    } = urlModule.parse(req.url, true)

    // 定义一个对象
    var data = {
        name: 'yhf',
        age: 18,
        gender: '男孩子'
    }

    // 数据模板拼接数据字符串
    var scriptStr = `${query.abc}(${JSON.stringify(data)})`


    // res.end 发送给 客户端， 客户端去把 这个 字符串，当作JS代码去解析执行
    res.end(scriptStr)
})


// 开启服务
app.listen('3000', function (err) {
    if (err) {
        throw err;
    }
    console.log('http://localhost:3000');
})