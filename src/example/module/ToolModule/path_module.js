/**path 模块提供了一些用于处理文件路径的小工具
 * Created by admin on 2017/1/5.
 */
var path = require("path");
var util = require('util');

//平台的文件路径分隔符，'\\' 或 '/'。
console.log('path.sep : ' + util.inspect(path.sep));

//平台的分隔符, ; or ':'.
console.log('path.delimiter : ' + util.inspect(path.delimiter));

//提供上述 path 的方法，不过总是以 posix 兼容的方式交互
console.log('path.posix : ' + util.inspect(path.posix));

//提供上述 path 的方法，不过总是以 win32 兼容的方式交互。
console.log('path.win32 : ' + util.inspect(path.win32));





// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('main.js'));


//判断参数 path 是否是绝对路径
console.log('isAbsolute : ' + path.isAbsolute('/test/test1//2slashes/1slash/tab/'));
console.log('isAbsolute : ' + path.isAbsolute('D:/Workspaces/idea/NodeLearning/src/example/module/ToolModule/main.js'));
console.log('isAbsolute : ' + path.isAbsolute('../test/'));


//返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。
var p = 'D:/Workspaces/idea/NodeLearning/src/example/module/ToolModule/main.js';
console.log('dirname(' + p + ') : \n' + path.dirname(p));


//返回路径中的最后一部分。同 Unix 命令 bashname 类似。
console.log('basename(' + p + ') : \n' + path.basename(p));


/*返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。
 如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字符，则此命令返回空字符串。
 */
console.log('extname(' + p + ') : \n' + path.extname(p));


//返回路径字符串的对象信息。
console.log('parse(' + p + ') : \n' + util.inspect(path.parse(p)));



//从对象中返回路径字符串，和 path.parse 相反。
var pathObject = path.parse(p);
console.log('format(' + p + ') : \n' + path.format(pathObject));










