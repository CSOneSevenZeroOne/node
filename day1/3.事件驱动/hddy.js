// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

eventEmitter.on('maipisa', () => {
	setTimeout(() => {
		console.log("买披萨")
	}, 100)
});

eventEmitter.on('napisa', () => {
	setTimeout(() => {
		console.log("拿披萨")
	}, 500)
});

eventEmitter.on('paoniu', () => {
	setTimeout(() => {
		console.log("泡妞")
	}, 200)
});

eventEmitter.emit('maipisa');
eventEmitter.emit('napisa');
eventEmitter.emit('paoniu');