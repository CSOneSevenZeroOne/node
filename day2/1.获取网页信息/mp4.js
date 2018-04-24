var http = require('http');
var fs = require('fs');
//console.log(http)
http.get("http://qiniuuwmp3.changba.com/1036791155.mp4", (res) => {
	//console.log(res)
	var writerStream = fs.createWriteStream('test.mp4');
	res.pipe(writerStream)
	writerStream.on('finish', function() {
		console.log("下载完成");
	});
})