/**Node.js os 模块提供了一些基本的系统操作函数
 * Created by admin on 2017/1/5.
 */
var os = require("os");
var util = require('util');

//定义了操作系统的行尾符的常量
console.log('os.EOL : ' + util.inspect(os.EOL));

//操作系统的默认临时文件夹
console.log('tempDir : ' + os.tmpdir());

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统hostname
console.log('host : ' + os.hostname());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

//返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"
console.log('arch : ' + os.arch());

//返回操作系统的发行版本
console.log('release : ' + os.release());

//操作系统运行的时间，以秒为单位
console.log('uptime : ' + os.uptime());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");

/*
 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、
 时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）
 */
//console.log('cpus : ' + util.inspect(os.cpus()));


//获得网络接口列表。
//console.log('networkInterfaces : ' + util.inspect(os.networkInterfaces()));

