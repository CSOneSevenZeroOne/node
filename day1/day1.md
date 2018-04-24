# 介绍

## 什么是nodejs

> Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 
Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。 
Node.js 的包管理器 npm，是全球最大的开源库生态系统。

## npm包管理中心

安装的方法
```js
npm install xxx
cnpm install xxx
```
卸载的方法
```js
npm uninstall xxx
```
全局安装就是加上这个参数`-g`,多xxx的cmd命令
```js
npm install xxx -g
```
node程序的描述文件，里面包括程序名，作者信息，依赖关系
```js
npm init
```

## 下载nodejs环境

[Latest LTS Version: 8.10.0 (includes npm 5.6.0)](https://nodejs.org/en/download/)


## 客户端VS服务端

|环境|端|语言|运行方法||
|-|-|-|-|
|客户端|浏览器 Chome 全部|JS|利用HTML引入JS文件用浏览器执行|前端 展示渲染|
|服务端|服务器 Chome V8引擎|NodeJS|在命令行执行`node xxx.js`文件执行|后端 数据处理|
|服务端|服务器 Apache|PHP||后端|


## Node端引入JS文件


```js
var xx = require("xx.js")
```

用node环境执行js文件的时候

```js
node xxx
node xxx.js
```

# 模块

## 自定义模块

自己写的JS文件
```js
var xx = require("./xxx/xx.js")
```

## 第三方模块

npm包管理中心下载的模块
[第三模块查找中心](https://www.npmjs.com/)
```js
var xx = require("xx")
```

## 内置模块

你不需要从npm下载，也不需要自己写的模块，就是内置模块
[内置模块文档](http://nodejs.cn/api)
```
var fs = require("fs")
```

# 异步

我要去买披萨，去到披萨店，老板告诉我，披萨要等30分钟才做好

同步：在原地，白白等30分钟，在拿再去泡妞
异步：留下一个电话(回调函数)，先去泡妞，等30分钟后，电话打来，再去拿披萨

|异步|同步|
|-|-|
|非阻塞|阻塞|
|async|sync|
|高效|相对低效|
|不稳定，编写过于复杂|稳定，编写相对简单|


# event内置模块

定义一个事件驱动的对象
```
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
```
监听事件
```js
eventEmitter.on('xxx', ()=>{
	//event
});
```
触发事件
```js
eventEmitter.emit('xxx');
```

# 