/**
 * Created by shichp on 2017/1/4.
 */

//Node.js 自带的 http 模块，并且把它赋值给 http 变量
var http = require('http');

// 函数传递
//http 模块提供的函数： createServer 函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
http.createServer(function (request, response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('hello world , 8888\n');
}).listen(8888);

console.log('server running at http://127.0.0.1:8888/');



function onRequest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World , 9999");
    response.end();
}

http.createServer(onRequest).listen(9999);
console.log('server running at http://127.0.0.1:9999/');