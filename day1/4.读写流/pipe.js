var fs = require("fs");
const zlib = require('zlib');
const gzip = zlib.createGzip();
// 创建一个可读流
var readerStream = fs.createReadStream('./input/1.wmv');

// 创建一个可写流
var writerStream = fs.createWriteStream('./output/22222.wmv.gz');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(gzip).pipe(writerStream);

console.log("程序执行完毕");