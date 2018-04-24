const http = require('http');
//用createServer方法创建服务器实例server
const server = http.createServer((request, response) => {
	console.log(request.headers)
	//响应头
	response.setHeader("Access-Control-Allow-Origin", "*");
	//响应体
	response.end("hello world");
});
server.listen(12345); //1~65535
console.log("开启服务器")