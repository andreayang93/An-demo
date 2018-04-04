var express = require('express');
var app = express();
var fs = require("fs");
// 跨域引用path
var path = require('path');
var bodyParser = require('body-parser')

app.get('/item', function (req, res) {
    // path两个参数 一个是（__dirname），另一个是你的文件名
    var data = require(path.join(__dirname, 'item.json'));
    console.log(data);
    // data 得到的现在是对象处理为json
    res.json(data);
  })

  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
  
    console.log("访问地址为 http://%s:%s", host, port)
  })