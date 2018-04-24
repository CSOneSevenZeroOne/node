var express = require('express');
var router = express.Router();
//实例化第一个express的应用
var app = express();

//加载home路由模块
//var home = require('./router/home.js');
app.use('/home', require('./router/home.js'));
//加载home路由模块
var index = require('./router/index.js');
app.set('jsonp callback name', 'JSON_CALLBACK');
app.use('/index', index);
app.listen(8888);