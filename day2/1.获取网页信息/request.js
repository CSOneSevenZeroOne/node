var request = require('request');
var fs = require('fs');
request('http://originoo-1.b0.upaiyun.com/dev/freepic/pic/1.jpg').pipe(fs.createWriteStream('1.jpg'))