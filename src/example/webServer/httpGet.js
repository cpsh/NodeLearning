/**URL是完整的请求路径，包括了?后面的部分，可以手动解析后面的内容作为GET请求的参数。
 node.js中url模块中的parse函数提供了这个功能

 url.parse 方法来解析 URL 中的参数


 * Created by shichp on 2017/1/5.
 */
var http = require('http');
var util = require('util');

//var logger = require('log4js').getLogger();
var logger = require('../../../logger');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("name：" + params.name);
    res.write("\n");
    res.write("age：" + params.age);

    res.write("\n");
    logger.info('request for url:' + req.url + " GET Return Success");

    res.end(util.inspect(url.parse(req.url, true)));
    res.end();
}).listen(3000);