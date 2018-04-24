var fs = require("fs");
console.log("去买披萨")
fs.readFile("./test.txt",(err,data)=>{
	//buffer
	console.log(data.toString())
})
console.log("泡妞")