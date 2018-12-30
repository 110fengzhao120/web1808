var express = require("express");
var router = express.Router();
var homehot = require("./home/homehot.js");
var homehot2 = require("./home/homehot2.js");
var searchData = require("./search");
var detailDate = require("./detail");
var commentData = require("./detail/comment");
var shopData = require("./shop");
var shopCarData = require("./shopcar");
var url = require("url");

router.get("/homehot",function(req,res){
  var query = url.parse(req.url,true).query;
  console.log("city:"+query.city);
  res.send(homehot)
})


router.get("/homehot2",function(req,res){
  res.send(homehot2)
})

// 搜索页面
router.get("/search",function(req,res){
  var query = url.parse(req.url,true).query;
  console.log("keyword:"+query.keyword);
  console.log("city:"+query.city);
  res.send(searchData)
})

// 详情页 
router.get("/detail",function(req,res){
  // 接受数据 
  // id
  var query = url.parse(req.url,true).query;
  console.log("id:"+query.id);
  res.send(detailDate)
})

// 评价
router.get("/comment",function(req,res){
  var query = url.parse(req.url,true).query;
  console.log("id:"+query.id);
  res.send(commentData);
})

// 商城
router.get("/shop",function(req,res){
  var query = url.parse(req.url,true).query;
  console.log("city:"+query.city);
  res.send(shopData);
})

// 购物车
router.get("/shopcar",function(req,res){
  res.send(shopCarData)
})

// 评价信息
router.post("/comment",function(req,res){
  var comment = req.param("comment");
  console.log(comment);
  if(comment){
    res.send({
      msg:'success'
    })
  }else{
    res.send({
      msg:'error'
    })
  }
})

module.exports = router;
