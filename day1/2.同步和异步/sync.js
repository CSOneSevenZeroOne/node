var fs = require("fs");
console.log("去买披萨")
var pisa = fs.readFileSync("./test.txt")
console.log(pisa.toString())
console.log("泡妞")