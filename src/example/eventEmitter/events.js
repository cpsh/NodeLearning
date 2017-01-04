/**EventEmitter 的核心就是事件触发与事件监听器功能的封装
 * EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件
 *
 * 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。
 * 包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
 * 1.首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
   2.其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系
 *
 * Created by shichp on 2017/1/4.
 */
console.log("开始启动connection程序执行。。。。。\n");


// 引入 events 模块
var events = require('events');
//创建eventEmit对象
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('开始链接','连接成功！');
    // 触发 data_received 事件
    eventEmitter.emit("data_receive",'开始清理数据','数据清理成功');
}

//------- 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递。

// 使用匿名函数绑定 data_receive 事件
eventEmitter.on('data_receive',function (arg1,arg2) {
    console.log('数据接收成功!',arg1,arg2);
});

eventEmitter.addListener('data_receive',function () {
    console.log('准备断开连接.....');
});

eventEmitter.on('data_receive',function () {
    console.log('断开数据连接成功!!!');
});

//绑定connection事件处理程序
eventEmitter.on("connection",connectHandler);

var eventListenerCount = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log("connection 事件 : " + eventListenerCount + " 个监听器监听连接事件。");


//触发connection事件
eventEmitter.emit("connection");

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', connectHandler);
console.log("connectHandler 不再受监听。");

eventListenerCount = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log("connection 事件 : " + eventListenerCount + " 个监听器监听连接事件。");

console.log("\n")
console.log("整个connection程序执行完毕。。。。。\n");

//eventEmitter.emit('error');
