var request = require("request");

request.post({
	url: 'http://stu.1000phone.net/student.php/Index/index',
	headers: {
		/*Cookie: "StuInfo=think%3A%7B%22StuId%22%3A%2291666%22%2C%22StuNumber%22%3A%22CS170113013%22%2C%22IDcard%22%3A%22620121199507200516%22%2C%22StuName%22%3A%22%25E9%25BB%2584%25E5%25A4%25A9%25E8%25B5%2590%22%2C%22Cid%22%3A%221641%22%7D; PHPSESSID=nu4n8an1du2i991hkorgvt74r3",
		Referer:"http://stu.1000phone.net/student.php/Index/stuvip"*/
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.9',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Cookie': 'StuInfo=think%3A%7B%22StuId%22%3A%2291666%22%2C%22StuNumber%22%3A%22CS170113013%22%2C%22IDcard%22%3A%22620121199507200516%22%2C%22StuName%22%3A%22%25E9%25BB%2584%25E5%25A4%25A9%25E8%25B5%2590%22%2C%22Cid%22%3A%221641%22%7D; PHPSESSID=nu4n8an1du2i991hkorgvt74r3',
		'Host': 'stu.1000phone.net',
		'Pragma': 'no-cache',
		'Referer': 'http://stu.1000phone.net/student.php/Index/stuvip',
		'Upgrade-Insecure-Requests': 1,
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
	},
	/*formData: {
		Account: "620121199507200516",
		PassWord: 200516
	}*/
}, function optionalCallback(err, httpResponse, body) {
	//console.log(httpResponse.headers)
	if(err) {
		return console.error('upload failed:', err);
	}
	console.log('Upload successful!  Server responded with:', body);
});