var express = require('express');
var router = express.Router();
var createConnection = require("../sql.js")
router.post('/login', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	console.log(req.body)
	//sql
	console.log("操作数据库")
	createConnection().query('SELECT * FROM `student` WHERE ?', {
		name: req.body.username
	}, function(error, results, fields) {
		if(error) throw error;
		console.log('The solution is: ', results);
		if(results.length > 0) {
			if(results[0].password === req.body.password) {
				results[0].password = "";
				res.append('Set-Cookie', 'token=asdasdasdasdasd');
				res.json({
					code: 1,
					status: "success",
					user: results[0]
				})
				next()
			} else {
				res.json({
					code: 0,
					status: "fail"
				})
			}
		} else {
			res.json({
				code: 0,
				status: "fail"
			})
		}
	});
}, (req, res, next) => {
	next()
});
module.exports = router;