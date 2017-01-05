/**使用中间件向 Node.js 服务器发送 cookie 信息，
 * Created by admin on 2017/1/6.
 */
// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')
var util = require('util');
var app = express()
app.use(cookieParser())

app.get('/cookies', function(req, res) {
    console.log("Cookies: ", req.cookies)
    response = {
        Cookies:util.inspect(req.cookies)
    };
    res.end( JSON.stringify( response ) );
})

app.listen(3000)