var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
//实例化第一个express的应用
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))
//创建连接对象
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cs1701'
});

//执行连接
connection.connect();

// parse application/json
app.use(bodyParser.json())
app.post('/savehtml', function(req, res) {
	console.log(req.body.html)
	//执行sql语句查询
	connection.query('INSERT INTO `html` SET ?', {
		template: req.body.html
	}, function(error, results, fields) {
		//执行关闭
		//connection.end();
		res.send('插入html成功');
	});

});
app.get("/showhtml", function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	console.log(req.body.html)
	//执行sql语句查询
	connection.query('SELECT * FROM `html`', function(error, results, fields) {
		//执行关闭
		//connection.end();
		res.json({
			results
		});
	});

})
app.listen(8888);