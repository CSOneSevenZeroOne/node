var express = require('express');
//实例化第一个express的应用
var app = express();
app.get('/', function(req, res) {
	res.send('hello world');
});
app.get('/index', function(req, res) {
	res.send('index页面');
});
app.listen(8888);