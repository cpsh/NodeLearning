/**
 * Created by admin on 2017/1/6.
 */
//express_demo.js 文件
var express = require('express');
var util = require('util');
var app = express();

app.get('/', function (request, response) {
    response.send('express demo ');
})

app.get('/requestinfo', function (req, response) {
    response.send(util.inspect(req.hostname) + '\r' + util.inspect(req.query)+ '\r' + util.inspect(req.query.name));
  //  res.send(util.inspect(req));
    /*res.send(util.inspect(req.app));
    res.send(util.inspect(req.baseUrl));
    res.send(util.inspect(req.body));
    res.send(util.inspect(req.fresh));
    res.send(util.inspect(req.hostname));
    res.send(util.inspect(req.originalUrl));
    res.send(util.inspect(req.params));
    res.send(util.inspect(req.path));
    res.send(util.inspect(req.protocol));
    res.send(util.inspect(req.query));*/


})

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})