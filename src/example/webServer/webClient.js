/**
 * Created by shichp on 2017/1/6.
 */
var http = require('http');

var options = {
    host:'127.0.0.1',
    port:'8081',
    path:'/index.html'
}

var callback = function (response) {
    var body = '';

    //数据接收更新
    response.on('data',function (data) {
        body += data;
    });

    //数据接受完成
    response.on('end',function () {
        console.log(body);
    });
}

var req = http.request(options,callback);
req.end();