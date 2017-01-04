/**Node.js中，定义了一个 Buffer 类，该类用来创建一个专门存放二进制数据的缓存区。
 * Created by shichp on 2017/1/4.
 */

var buf = new Buffer(10);

var buf = new Buffer([10,20,30,40]);

var buf = new Buffer("www.xxx.com","utf-8");

console.log("----------------数据写入缓冲区----------------");
buf = new Buffer(5);
//返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
len = buf.write("www.aaaa.com");
console.log("写入字节 : " + len);
console.log("\n");

console.log("----------------从缓冲区读取数据----------------");
buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}
console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // 输出: abcde
console.log( buf.toString('utf8',0,5));    // 输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde
console.log("\n");


console.log("----------------将 Buffer 转换为 JSON 对象----------------");

var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);
console.log(json);
console.log("\n");

console.log("----------------缓冲区合并----------------");
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
console.log("\n");

console.log("----------------拷贝缓冲区----------------");
var buffer1 = new Buffer('ABCDEFGHIJKLMN1233456789');
// 拷贝一个缓冲区
var buffer2 = new Buffer(15);
//buffer1.copy(buffer2,0,0,buffer1.length);
buffer1.copy(buffer2);
console.log("拷贝前的buffer content: " + buffer1.toString());
console.log("拷贝后的buffer content: " + buffer2.toString());







