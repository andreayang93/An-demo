var express = require('express');
var app = express();
var fs = require("fs");
// 跨域引用path
var path = require('path');
var bodyParser = require('body-parser')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});

app.use(bodyParser.json());
app.get('/item', function (req, res) {
    // path两个参数 一个是（__dirname），另一个是你的文件名
    var data = require(path.join(__dirname, 'item.json'));
    console.log(data);
    // data 得到的现在是对象处理为json
    res.json(data);
  })

  app.post('/newitem', function (req, res) {
    var data = require(path.join(__dirname, 'item.json'));
    data.push(req.body);
    fs.writeFile(path.join(__dirname, 'item.json'), JSON.stringify(data), 'utf-8')
    res.statusCode = 201;
    res.end();
  })

  app.delete('/deleteitem', function (req, res) {
    var data = require(path.join(__dirname, 'item.json'));
    data.slice(indexof(req.body));
    fs.writeFile(path.join(__dirname, 'item.json'), JSON.stringify(data), 'utf-8')
    res.statusCode = 201;
    res.end();
  })



  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
  
    console.log("访问地址为 http://%s:%s", host, port)
  })