/**
 * Created by shichp on 2017/1/5.
 */
var fs = require("fs");
var util = require('util');
/*
 异步和同步
 Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，
 读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
 */
// 异步读取
/*

console.log("-------------读取文件----------------");
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: \n" + data.toString());
    console.log("异步读取程序执行完毕。");
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: \n" + data.toString());
console.log("同步读取程序执行完毕。");

console.log('\n');
*/

/*console.log("-------------打开文件----------------");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input_file.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error('文件打开失败 : \n' + err);
    }
    console.log("文件打开成功！");
});

console.log('\n');*/
/*

console.log("-------------获取文件信息----------------");

console.log("准备打开文件获取文件信息.......");
fs.stat('input.txt', function (err, stats) {
    if (err) {
        return console.error('读取文件信息失败 : \n' + err);
    }
//    console.log('文件信息 : \n' + JSON.stringify(stats));
    console.log('文件信息 : \n' + util.inspect(stats));
    console.log("读取文件信息成功！");

    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
    console.log("是否是 块设备(isBlockDevice) ? " + stats.isBlockDevice());
    console.log("是否是字符设备(isCharacterDevice) ? " + stats.isCharacterDevice());
    console.log("是否是软链接(isSymbolicLink) ? " + stats.isSymbolicLink());
    console.log("是否是FIFO(isFIFO) ? " + stats.isFIFO());
    console.log("是否是Socket (isSocket) ? " + stats.isSocket());
});
console.log('\n');

*/

/*
 writeFile异步模式下写入文件
 */
/*

console.log("-------------写入文件----------------");
console.log("准备写入文件");
fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
    if (err) {
        return console.error('写入文件失败 ！ \n' + err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error('异步读取文件失败 :\n' +err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});
console.log('\n');
*/

/*

console.log("-------------关闭文件----------------");
var buf = new Buffer(1024);

console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件！");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }

        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }

        // 关闭文件
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    });
});

console.log('\n');
*/


/*
//fs.unlink(path, callback)
console.log("-------------删除文件----------------");
console.log("准备删除文件！");
fs.unlink('input.txt', function(err) {
    if (err) {
        return console.error('删除文件失败  ： \n' + err);
    }
    console.log("文件删除成功！");
});

console.log('\n');
*/


//fs.mkdir(path[, mode], callback) mode - 设置目录权限，默认为 0777。
console.log("-------------创建目录----------------");
console.log("创建目录 ./tmp/test/");
fs.mkdir("./tmp/test/",function(err){
    if (err) {
        return console.error('目录创建出错 :\n' + err);
    }
    console.log("目录创建成功 : ");
});


console.log('\n');








