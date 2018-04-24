var a = 1;
var b = 7;

//自定义模块
var tool = require("./tool.js")
//npm包管理中心下载
var gulp = require("gulp")
//第三方模块
var gulp = require("./node_modules/gulp/index.js")
console.log("nodejs")
//console.log(plus(a,b))
console.log(tool)
console.log(tool.plus(6,7))
console.log(tool.reduce(6,7))
