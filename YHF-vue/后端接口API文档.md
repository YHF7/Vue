# 图片分享区域

注意：所有 api 的域名为：http://127.0.0.1:5000 如果后面文档中，有的域名地址和这里不一样，以这里的为主；

# 首页

## 主页面

### 获取轮播图的接口

    接口地址：  /api/getlunbo
    作用：      获取页面轮播图数据
    提交类型：   GET
    传入api参数：  无
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    url: '链接',（图片跳转地址）
                    img: '链接' （图片链接）
                }
            ]
        }

## 新闻咨询

### 获取新闻资讯列表的接口

    接口地址：  /api/getnewslist
    作用：      主要用来获取点击首页上的“新闻资讯”后进入到的图文列表页面的数据，大家在做的时候可以使用ajax请求这个地址获取json数据后展示到页面上
    提交类型：   GET
    传入api参数：  无
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 1 , （资讯id）
                    title: “买房还是炒股....”, （标题）
                    add_time:"2017-04-16T04:05:34.000Z", （添加时间）
                    click:"2", （点击数）
                    img_url:"http://127.0.0.1:5000/public/images/d.jpeg" （图片路径）
                },
                {
                    id: 2 , （资讯id）
                    title: “买房还是炒股....”, （标题）
                    add_time:"2017-04-16T04:05:34.000Z", （添加时间）
                    click:"2", （点击数）
                    img_url:"http://127.0.0.1:5000/public/images/d.jpeg" （图片路径）
                }
            ]
        }

### 获取新闻图文资讯详情的接口

    接口地址：  /api/getnew/:newid
    作用：      根据资讯newid,获取期详细描述信息
    提交类型：   GET
    传入api参数：  newid:资讯id， 传入url写法： /api/getnew/43
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 1 , （资讯id）
                    title: “买房还是炒股....”, （标题）
                    add_time:"2017-04-16T04:05:34.000Z", （添加时间）
                    click:"2", （点击数）
                    content: 资讯详情内容，带html标签
                }
            ]
        }

### 获取评论信息的接口

    接口地址：  /api/getcomments/:artid?pageindex=1
    作用：      根据资讯id获取它的评论的分页信息
    提交类型：   GET
    传入api参数：  artid: 资讯id，pageindex: 分页的页码，表示当前第几页 ，传入url写法： /api/getcomments/43?pageindex=1
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    user_name: "匿名用户“,
                    add_time: "2017-04-16T04:05:34.000Z", （添加时间）
                    content: "我来评论一下"
                }
            ]
        }

### 提交评论信息的接口

    接口地址：  /api/postcomment/:artid
    作用：      给某条资讯进行评论
    提交类型：   POST
    传入api参数：  artid: 资讯id，content: 评论的内容 传入url写法：/api/postcomment/43 请求报文体Body格式: content=评论内容
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: "评论提交成功"
        }

## 图片分享

### 图片分享分类的接口

    接口地址：  /api/getimgcategory
    作用：      用于获取图片列表页面上面的分类信息获取
    提交类型：   GET
    传入api参数：  无
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 1, (分类id)
                    title: "家居生活"  (分类名称)
                },
                {
                    id: 2, (分类id)
                    title: "摄影设计"  (分类名称)
                }
            ]
        }
    备注: 注意：从后台接口中返回的分类数据，不包含“全部”分类，需要前端程序员向 message 数组中，使用 unshift 方法手动添加对象： { title:”全部”, id:0 }

### 图片列表数据的接口

    接口地址：  /api/getimages/:cateid
    作用：      用于获取点击首页上的“图片分享”后进入到的列表数据
    提交类型：   GET
    传入api参数：  cateid: 图片的类别id，传入url写法： /api/getimages/23
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 1, (图片id)
                    title: "家居精装",  (图片标题)
                    img_url: "链接", （图片路径）
                    zhaiyao: "更多美好家居", (摘要)
                    px: 1 (排序/与图文详情id关联)
                },
                {
                    id: 1, (图片id)
                    title: "家居精装",  (图片标题)
                    img_url: "链接", （图片路径）
                    zhaiyao: "更多美好家居", (摘要)
                    px: 2 (排序/与图文详情id关联)
                }
            ]
        }

### 图片列表数据详情的接口

    接口地址：  /api/getimageInfo/:imgid
    作用：      用于获取图片详情页面中的详细描述信息
    提交类型：   GET
    传入api参数：  imgid: 图片id(id为图片列表反馈的px，作为id传过来) ，传入url写法： /api/getimageInfo/43
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 1, (图片id)
                    title: "家居精装",  (图片标题)
                    click: 3, （点击数）
                    add_time: "1540698128585", （时间字符串）
                    content: 带html标签的详情
                },
                {
                    id: 2, (图片id)
                    title: "家居精装",  (图片标题)
                    click: 2, （点击数）
                    add_time: "1540698128585", （时间字符串）
                    content: 带html标签的详情
                }
            ]
        }

### 获取图片详情缩略图的接口

    接口地址：  /api/getthumimages/:imgid
    作用：      用于获取图片详情页面上部的图片列表数据
    提交类型：   GET
    传入api参数：  imgid: 图片id，传入url写法： /api/getthumimages/43
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    src: "图片地址"
                },
                {
                    src: "图片地址"
                }
            ]
        }

## 商品购买

### 获取商品列表数据

    接口地址：  /api/getgoods?pageindex=number
    作用：      获取商品列表展示页面中的所有数据
    提交类型：   GET
    传入api参数：  pageindex: 页码  获取第一页数据写法：/api/getgoods?pageindex=1
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 1, （id）
                    title: "小米（Mi）小米Note 16G双网通版", （标题）
                    add_time: "1540698128585", （时间）
                    zhaiyao: "小米（Mi）小米Note 16G双网通版", （摘要）
                    click: 0, （点赞）
                    img_url: "http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg", （图片地址）
                    sell_price: "899", （现价）
                    market_price: "999", （原价）
                    stock_quantity: "100" （剩余数量）
                },
                {
                    id: 2, （id）
                    title: "小米（Mi）小米Note 16G双网通版", （标题）
                    add_time: "1540698128585", （时间）
                    zhaiyao: "小米（Mi）小米Note 16G双网通版", （摘要）
                    click: 0, （点赞）
                    img_url: "http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg", （图片地址）
                    sell_price: 899, （现价）
                    market_price: 999, （原价）
                    stock_quantity: 100 （剩余数量）
                }
            ]
        }

### 获取商品轮播图接口

    接口地址：  /api/getsplbt/:imgid
    作用：      用于获取图片详情页面上部的图片列表数据
    提交类型：   GET
    传入api参数：  imgid: 图片id，传入url写法： /api/getsplbt/43
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    src: "图片地址",
                    src: "图片地址",
                    src: "图片地址"
                },
                {
                    src: "图片地址",
                    src: "图片地址",
                    src: "图片地址"
                }
            ]
        }

### 获取商品参数区和价格，标题等数据接口

    接口地址：  /api/goods/getinfo/:id
    作用：      获取商品参数区和价格，标题等数据
    提交类型：   GET
    传入api参数：  Id:商品主键值  /api/goods/getinfo/100
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 2, （id）
                    title: "小米（Mi）小米Note 16G双网通版", （标题）
                    add_time: "1540698128585", （时间）
                    goods_no: "SD3973042344", （商品编号）
                    sell_price: 899, （现价）
                    market_price: 999, （原价）
                    stock_quantity: 100 （剩余数量）
                },
                {
                    id: 3, （id）
                    title: "小米（Mi）小米Note 16G双网通版", （标题）
                    add_time: "1540698128585", （时间）
                    goods_no: "SD3973042344", （商品编号）
                    sell_price: 899, （现价）
                    market_price: 999, （原价）
                    stock_quantity: 100 （剩余数量）
                }
            ]
        }

### 获取购物车页面数据接口

    接口地址：  /api/goods/goodsgetshopcarlist/:ids
    作用：      获取购物车列表数据
    提交类型：   GET
    传入api参数：  Ids：商品id 字符串，多个id之间用逗号分隔  Url ： /api/goods/getshopcarlist/87,88,89
    返回格式：  JSON
    返回数据模板：
        {
            status:0/1, (状态标记，0:成功 ，1:失败)
            message: [
                {
                    id: 2, （id）
                    title: "小米（Mi）小米Note 16G双网通版", （标题）
                    sell_price: 899, （现价）
                    img_url: "链接" (商品图片)
                },
                {
                    id: 3, （id）
                    title: "小米（Mi）小米Note 16G双网通版", （标题）
                    sell_price: 899, （现价）
                    img_url: "链接" (商品图片)
                }
            ]
        }
