/**
 * Created by shichp on 2017/1/4.
 */
var fs = require("fs");
var data = '简单的nodejs例子\n另起一行写入数据\n';
/*

// 创建一个可以写入的流，写入到文件 output.txt 中
var writerStream = fs.createWriteStream('stream_output.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");
*/


console.log("------------往文件末尾追加内容------------");
fs.appendFile("stream_output.txt",data,'UTF8',function (err) {
    if(err)
    {
        console.log(err);
    }
    console.log("追加完毕");
})