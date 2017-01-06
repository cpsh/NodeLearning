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

app.get('/request/:reqId/info', function (req, response) {
    printReqInfo(req,response);

});

//all -- 所有的router method
app.all('/request/:reqId/info', function (req, response) {
    printReqInfo(req,response);
});

function printReqInfo(req,response) {
    response.send(util.inspect(req.hostname) + '\r' + util.inspect(req.query)+ '\r' + util.inspect(req.query.name));
    //res.send(util.inspect(req));
    //当callback为外部文件时，用req.app访问express的实例
    console.log('req.app -----------\n ' + util.inspect(req.app));
    //获得「请求主体」
    console.log('req.body -----------\n ' + util.inspect(req.body));
    //req.fresh / req.stale：判断请求是否还「新鲜
    console.log('req.fresh -----------\n ' + util.inspect(req.fresh));
    //req.hostname / req.ip：获取主机名和IP地址
    console.log('req.hostname -----------\n ' + util.inspect(req.hostname));
    //获取原始请求URL
    console.log('req.originalUrl -----------\n ' + util.inspect(req.originalUrl));
    //获取路由的parameters
    console.log('req.params -----------\n ' + util.inspect(req.params));
    //获取请求路径 -- 不带查询参数串req.query (?后面参数没有)
    console.log('req.path -----------\n ' + util.inspect(req.path));
    //获取协议类型
    console.log('req.protocol -----------\n ' + util.inspect(req.protocol));
    //获取URL的查询参数串
    console.log('req.query -----------\n ' + util.inspect(req.query));
    //req.route：获取当前匹配的路由
    console.log('req.route -----------\n ' + util.inspect(req.route));
    console.log('req.route.path -----------\n ' + util.inspect(req.route.path));
    //req.subdomains：获取子域名
    console.log('req.subdomains -----------\n ' + util.inspect(req.subdomains));
}


var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})