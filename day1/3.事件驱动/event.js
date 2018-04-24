// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('maipisa', ()=>{
	console.log("买披萨")
	eventEmitter.emit('napisa');
});

eventEmitter.on('napisa', ()=>{
	setTimeout(()=>{
		console.log("拿披萨")
		eventEmitter.emit('paoniu');
	},1000)
});

eventEmitter.on('paoniu', ()=>{
	console.log("泡妞")
});


// 触发事件
eventEmitter.emit('maipisa');
