/** create chainable route handlers for a route path by using app.route().
 * Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos.
 *
 * Created by shichp on 2017/1/6.
 */
var express = require('express');
var app = new express();

app.route('/book').get(function (req,res) {
    res.send('router exapmle : get request - Get a random book !');
}).post(function (req,res) {
    res.send('router exapmle : post request - Add a book !');
}).put(function () {
    res.send('router exapmle : put request - Update the book !');
});


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});