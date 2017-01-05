/**
 * Created by admin on 2017/1/6.
 */
var express = require('express');
var app = express();
var fs = require("fs");
var util = require('util');

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './tmp/'}).array('image'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})


app.post('/file_upload', function (req, res) {

    var upload_file = req.files[0];
    console.log(upload_file);  // 上传的文件信息

    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                /*response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };*/
                response = {
                    message:'文件上传成功!',
                    fileInfo:util.inspect(upload_file)
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})