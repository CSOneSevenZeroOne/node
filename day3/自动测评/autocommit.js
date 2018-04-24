//刘卫民
const request = require("request");
request.post({
	url: 'http://stu.1000phone.net/student.php/Public/login',
	formData: {
		"Account": "432524199504108359",
		"PassWord": "108359"
	}
}, function optionalCallback(err, httpResponse, body) {
	if(err) {
		return console.error('upload failed:', err);
	}
	var cookie = httpResponse.headers["set-cookie"];
	var strCookie = "";
	for(var i = 0; i < cookie.length; i++) {
		strCookie += cookie[i].split(";")[0] + ";"
	}
	//cookie
	var strcookie = strCookie.substring((strCookie.length - 1), 1)
	console.log(strcookie);
	request.post({
		url: "http://stu.1000phone.net/student.php/Index/start_evaluate",
		headers: {
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
			'Accept-Encoding': 'gzip, deflate',
			'Accept-Language': 'zh-CN,zh;q=0.9',
			'Cache-Control': 'max-age=0',
			'Connection': 'keep-alive',
			'Cookie': "P" + strcookie,
			'Host': 'stu.1000phone.net',
			'Referer': 'http://stu.1000phone.net/student.php/Index/start_evaluate?k=nJ6VdJNnamqIqd6gnJGhl3ZhZmhckmadh9eax6SiyJKimW5ol2Vmbg==',
			'Upgrade-Insecure-Requests': 1,
			'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'
		},
		formData: {
			'WDgDBw': '1_0_10',
			'zTKCku': '265_0_10',
			'ic10lb': '344_0_10',
			'K2N8Cf': '33_0_10',
			'kKtEEF': '237_0_10',
			'mwrBBf': '241_0_5',
			'4HzU3n': '201_0_5',
			'Lp1pEJ': '269_0_5',
			't2zJ83': '245_0_5',
			'yE7g2w': '249_0_10',
			'SzDgzZ': '340_0_10',
			'Arj3aA': '257_0_5',
			'xPzBtU': '261_0_5',
			'YIUrmG_45_0_0': encodeURIComponent("you are very good"),
			'Nf8QDS_46_0_0': encodeURIComponent("you are very good"),
			'record_id': 15405,
			'type_id': '154',
			'k': 'nJ6VdJNnamqIqd6gnJGhl3ZhZmhckmadh9eax6SiyJKimW5ol2Vmbg%3D%3D'
		}
	}, function optionalCallback(err, httpResponse, body) {
		if(err) {
			return console.error('upload failed:', err);
		}
		// console.log(body);
		console.log("评价成功");
		setTimeout(() => {
			console.log(strcookie)
			request.post({
				url: "http://stu.1000phone.net/student.php/Index/start_evaluate",
				headers: {
					'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
					'Accept-Encoding': 'gzip, deflate',
					'Accept-Language': 'zh-CN,zh;q=0.9',
					'Cache-Control': 'max-age=0',
					'Connection': 'keep-alive',
					'Cookie': "P" + strcookie,
					'Host': 'stu.1000phone.net',
					'Referer': 'http://stu.1000phone.net/student.php/Index/start_evaluate?k=nJ6VdJNnamqIqd6gnJGhl3ZhZmhckmadh9eax6SiyJKimW5ol2Vmbg==',
					'Upgrade-Insecure-Requests': 1,
					'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36'
				},
				formData: {
					'XHLiC0': '348_0_20',
					'3Yrsfz': '352_0_20',
					'ipfbkC': '356_0_20',
					'2lj3l1': '360_0_20',
					'Gn5dNk': '364_0_10',
					'TkbgFN': '368_0_10',
					'phelYW_372_0_0': encodeURIComponent("so good"),
					'record_id': 15405,
					'type_id': 157,
					'k': 'nJ6VdJNnamqIqd6gnJGhl3ZhZmhckmadh9eax6SiyJKimW5ol2Vmbg%3D%3D'
				}
			}, function optionalCallback(err, httpResponse, body) {
				if(err) {
					return console.error('upload failed:', err);
				}
				// console.log(body);
				console.log("评价成功");
			});
		}, 5000);
	})
});