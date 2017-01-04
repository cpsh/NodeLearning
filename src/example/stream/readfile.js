/**
 * Created by shichp on 2017/1/4.
 */
var fs = require("fs");

console.log("-------阻塞读取文件方式 ： readFileSync------")
var data = fs.readFileSync("input.txt");

console.log("文件内容为:\n");
console.log(data.toString() +"\n");
console.log("文件读取完毕，程序执行结束\n");

console.log("-------非阻塞读取文件方式 ： readFile + 回调函数------")

fs.readFile('input1.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("文件内容为:\n");
    console.log(data.toString() +"\n");
});
console.log("非阻塞读取程序执行结束!\n");