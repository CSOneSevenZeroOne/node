var http = require('http');
var fs = require('fs');
//console.log(http)
http.get({
	hostname: "www.youwu.cc",
	port: 80,
	path: "/uploads/allimg/160807/1-160PGT14C40.jpg",
	headers: {
		'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.9',
		'Cache-Control': 'no-cache',
		'Connection': 'keep-alive',
		'Cookie': 'UM_distinctid=1621cfcc103239-08d45c3db71573-454c092b-fa000-1621cfcc10434; CNZZDATA1256181055=88030673-1520903130-null%7C1520903130; Hm_lvt_ecf0502609cf895cbe057f7979b317bc=1520904760; Hm_lpvt_ecf0502609cf895cbe057f7979b317bc=1520905855',
		'Host': 'www.youwu.cc',
		'Pragma': 'no-cache',
		'Referer': 'http://www.youwu.cc/uploads/allimg/160425/1-1604251ZI3.jpg',
		'Upgrade-Insecure-Requests': 1,
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
	}
}, (res) => {
	// 创建一个可写流
	var writerStream = fs.createWriteStream('test.jpg');
	res.pipe(writerStream)
	writerStream.on('finish', function() {
		console.log("下载完成");
	});
})