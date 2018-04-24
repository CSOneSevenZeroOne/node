var express = require('express');
var createConnection = require('./createConnection.js');
//实例化第一个express的应用
var app = express();
app.get('/', function(req, res) {
	createConnection('select * from student', function(results) {
		console.log(results)
		res.json({
			results
		});
	})
});
app.get('/index', function(req, res) {
	res.send('index页面');
});
app.listen(8888);