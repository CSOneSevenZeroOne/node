var http = require('http');
//console.log(http)
http.request({
	hostname: "localhost",
	port: "88",
	path: "/cs1701/nodejs/day2/login.php",
	method: "POST",
	form: {
		username: "ly",
		password: "123"
	}
}, (res) => {
	//console.log(res)
	var data = "";
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		console.log(data)
	});
}).end()
