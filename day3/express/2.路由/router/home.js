var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
	//sql
	console.log("操作数据库")
	next()
}, (req, res, next) => {
	//读写问价
	console.log("读写文件")
	next()
}, (req, res, next) => {
	console.log(req.query)
	res.append('Set-Cookie', 'name=ly; Path=/; HttpOnly');
	res.append("Access-Control-Allow-Origin", "*");
	//res.send('发送数据到前端');
	res.jsonp({
		name: "ly",
		skill: "css"
	})
});
module.exports = router;