/**
 * Created by shichp on 2017/1/6.
 */

var app = require('./express.app');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', '3000');

/*var server = http.createServer(app);
server.listen(port);*/

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}