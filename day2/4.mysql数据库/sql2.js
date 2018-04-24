var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var mysql = require('mysql');

//创建连接对象
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cs1701'
});
connection.connect();
http.request({
	hostname: 'www.shuaia.net',
	path: '/',
	method: 'GET',
}, (res) => {
	var data = "";
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		const $ = cheerio.load(data)
		$("img").each((index, ele) => {
			console.log("第", index + 1, "张", $(ele).attr("src"))
			var imgSrc = $(ele).attr("src");
			//执行连接
			//执行sql语句查询
			/*connection.query('INSERT INTO `img`(`src`) VALUES ("' + imgSrc + '")', function(error, results, fields) {
				if(error) throw error;
				console.log('The solution is: ', results);
			});*/
			connection.query('INSERT INTO `img` SET ?', {
				src: imgSrc
			}, function(error, results, fields) {
				if(error) throw error;
				console.log('The solution is: ', results);
			});
		})
		//执行关闭
		//connection.end();
	});
}).end()