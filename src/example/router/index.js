/**
 * Created by admin on 2017/1/4.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);

server.getUserInfo(router.route);