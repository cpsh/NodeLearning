/**
 * Created by shichp on 2017/1/6.
 */
var express = require('express');
var birds = require('./express.Router')
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(logger('dev'));

//转换request body请求区域
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//中间件 cookie
app.use(cookieParser());


//app will now be able to handle requests to /birds and /birds/*****
app.use('/birds',birds);

module.exports = app;


/*

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})*/
