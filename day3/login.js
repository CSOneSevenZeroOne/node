//GET
const http = require('http');
const url = require('url');
const querystring = require('querystring');
//用createServer方法创建服务器实例server
const server = http.createServer((request, response) => {
	//响应头 header
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Content-Type", "text/plain;charset=UTF-8");
	//$_GET[""]
	var query = url.parse(request.url).query;
	var params = querystring.parse(query)
	console.log(params)
	if(params.username == "ly" && params.password == "123") {
		//响应体 print_r
		response.end("登录成功");
	} else {
		response.end("登录失败");
	}
});
server.listen(12345); //1~65535
console.log("开启服务器")