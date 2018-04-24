var mysql = require('mysql');

//创建连接对象
function createConnection() {
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'cs1701'
	});
	connection.connect();
	/*connection.query('INSERT INTO `img`(`src`) VALUES ("' + imgSrc + '")', function(error, results, fields) {
		if(error) throw error;
		console.log('The solution is: ', results);
	});*/
	//connection.end();
	return connection
}

module.exports = createConnection