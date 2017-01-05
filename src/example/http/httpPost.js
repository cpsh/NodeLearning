/**
 * POST 请求的内容全部的都在请求体中，
 * http.ServerRequest 并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。
 *
 * node.js 默认是不会解析请求体的，需要手动来做。
 * Created by shichp on 2017/1/5.
 */
var http = require('http');
var util = require('util');
var url = require('url');
var querystring = require('querystring');


var postHTML =
    '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    'name： <input name="name"><br>' +
    'age： <input name="age"><br>' +
    'sex： <input name="sex"><br>' +
    '<input type="submit">' +
    '</form>' +
    '</body></html>';


function onRequest(req, res) {
    // 定义了一个body变量，用于暂存请求体的信息
    var body = '';

    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
    req.on('data', function (chunk) {
        body += chunk;
    });

    // 在end事件触发后，通过querystring.parse将body解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        body = querystring.parse(body);
        console.log("data JSON: " + JSON.stringify(body));
        console.log("data inspect: " + util.inspect(body));

        // 设置响应头部信息及编码
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

        if (body.name && body.age && body.sex) { // 输出提交的数据
            res.write("name：" + body.name);
            res.write("<br>");
            res.write("age：" + body.age);
            res.write("<br>");
            res.write("sex：" + body.sex);
        } else { // 输出表单
            res.write(postHTML);
        }
        res.end();
    });
}
http.createServer(onRequest).listen(3000);


