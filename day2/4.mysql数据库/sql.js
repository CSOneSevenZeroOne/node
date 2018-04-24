var mysql = require('mysql');

//创建连接对象
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cs1701'
});

//执行连接
connection.connect();

//执行sql语句查询
connection.query('SELECT * FROM `student` WHERE 1', function(error, results, fields) {
	if(error) throw error;
	console.log('The solution is: ', results);
});

//执行关闭
connection.end();