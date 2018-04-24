var request = require("request");
var password = 0;

request.post({
	url: 'http://stu.1000phone.net/student.php/Public/login',
	formData: {
		Account: "620121199507200516",
		PassWord: 200516
	}
}, function optionalCallback(err, httpResponse, body) {
	console.log(httpResponse.headers)
	if(err) {
		return console.error('upload failed:', err);
	}
	console.log('Upload successful!  Server responded with:', body);
});