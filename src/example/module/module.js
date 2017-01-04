/**模块是Node.js 应用程序的基本组成部分，文件和模块是一一对应的。
 * 换言之，一个 Node.js 文件就是一个模块，这个文件可能是JavaScript 代码、JSON 或者编译过的C/C++ 扩展。
 * Created by shichp on 2017/1/4.
 */

/*
 require('./hello') 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）。

 Node.js 提供了exports 和 require 两个对象，
 其中 exports 是模块公开的接口，
 require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

 通过require('./hello') 加载这个模块，然后就可以直接访 问 hello.js 中 exports 对象的成员函数了
 */
var hello = require('./hello');
hello.world();
hello.say("shichp");
hello.abc("xxxx");
hello.sss("sss");



