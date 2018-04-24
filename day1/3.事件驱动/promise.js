new Promise((success, err) => {
	setTimeout(() => {
		console.log("买披萨")
		success()
	}, 100)
}).then(() => {
	return new Promise((success, err) => {
		setTimeout(() => {
			console.log("拿披萨")
			success()
		}, 500)
	})
}).then(() => {
	setTimeout(() => {
		console.log("泡妞")
	}, 200)
})


fs.readFile("./1.txt",()=>{
	
})

fs.readFile("./2.txt",()=>{
	
})

fs.readFile("./3.txt",()=>{
	
})
