/**
 * node.js之Url & QueryString模块更多信息
 * http://www.jianshu.com/p/aed6a885db61
 *
 * Created by admin on 2017/1/4.
 */
var http = require("http");
var url = require("url");
var queryString  = require("querystring");

function start(router) {
    function onRequest(request,response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");

        router(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("server router start....");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server 8888 has started.");
}

exports.start = start;

function getUserInfo(router) {
    function onRequest(request,response) {
        var requestURL = request.url;

        var pathname = url.parse(requestURL).pathname;
        console.log("Request for " + pathname + " received");

        var result = url.parse(requestURL);
        console.log(result);

        /*var username = queryString(requestURL)["username"];
        var age = query(requestURL)["age"];
        console.log("user info : \n usernmae " + username + "\nage : " + age);*/


        router(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("getUserInfo....");
        response.end();
    }
    http.createServer(onRequest).listen(9999);
    console.log("Server 9999 has started.");
}
exports.getUserInfo = getUserInfo;