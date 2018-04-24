var http = require('http');
//console.log(http)
http.get("http://www.youwu.cc/index.html", (res) => {
	//console.log(res)
	var data = "";
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		console.log(data)
	});
})