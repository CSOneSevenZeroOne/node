var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');

http.request({
	hostname: 'www.shuaia.net',
	path: '/',
	method: 'GET',
}, (res) => {
	var data = "";
	res.on('data', (chunk) => {
		data += chunk;
	});
	res.on('end', () => {
		//console.log(data)
		/*fs.writeFile("./test.html", data, (err, data) => {
			console.log("下载网页成功")
		})*/
		const $ = cheerio.load(data)
		$("img").each((index, ele) => {
			console.log("第", index + 1, "张", $(ele).attr("src"))
			var imgSrc = $(ele).attr("src");
			if(index!=0){
				download(imgSrc, index)
			}
		})
	});
}).end()

function download(imgSrc, index) {
	request(imgSrc).pipe(fs.createWriteStream(`${index}.jpg`))
}