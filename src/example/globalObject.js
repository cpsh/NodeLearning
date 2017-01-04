/**全局对象，全局变量
 * global 全局对象最根本的作用是作为全局变量的宿主
 *
 *
 *
 * Created by admin on 2017/1/5.
 */

//__filename 表示当前正在执行的脚本的文件名
console.log('__filename : ' + __filename);

console.log("\n");

//__dirname 表示当前执行脚本所在的目录。
console.log('__dirname : ' + __dirname);

console.log("\n");

/*
 setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
 setTimeout() 只执行一次指定函数。
 返回一个代表定时器的句柄值。
 */
function printTimeoutHello(sec) {
    console.log("printTimeoutHello invoke only once - " + sec + " seconds : Hello, World!");
}
// 两秒后执行以上函数
setTimeout(printTimeoutHello, 2000 , 2);

/*
 clearTimeout( t ) 全局函数用于停止一个之前通过
 setTimeout() 创建的定时器。
 参数 t 是通过 setTimeout() 函数创建的定时器。
 */
// 4秒后执行以上函数
var t = setTimeout(printTimeoutHello, 5000 , 5);

// 清除定时器
clearTimeout(t);

/*
 setInterval(cb, ms) 全局函数在指定的毫秒(ms)数时间间隔执行指定函数(cb)。
 返回一个代表定时器的句柄值。
 可以使用 clearInterval(t) 函数来清除定时器。
 setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
 */

function printIntervalHello(sec) {
    console.log("printIntervalHello every " + sec + " seconds -- Hello, World!");
}
// 两秒后执行以上函数
setInterval(printIntervalHello, 3000 , 3);


/*
 console 用于提供控制台标准输出


 onsole.log 接受若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。
 如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。


 console.time(label):输出时间，表示计时开始。
 console.timeEnd(label):结束时间，表示计时结束


 console.trace()：向标准错误流输出当前的调用栈。
 */
console.log('计时开始 ------');
console.time('10-elements');
for (var i = 0; i < 9; i++) {
    console.log("i : " + i);
}
console.timeEnd('10-elements');
console.log('计时结束 ------');

console.log("\n");

console.log("trace信息 ----------")
console.trace();

console.log("\n");

/*
 process
 是一个全局变量，即 global 对象的属性。用于描述当前Node.js 进程状态的对象，
 提供了一个与操作系统的简单接口。

 1  exit
 当进程准备退出时触发。

 2	beforeExit
 当 node 清空事件循环，并且没有其他安排时触发这个事件。通常来说，当没有进程安排时 node 退出，
 但是 'beforeExit' 的监听器可以异步调用，这样 node 就会继续执行。

 3	uncaughtException
 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，
 默认的操作（打印堆栈跟踪信息并退出）就不会发生。

 4	Signal 事件
 当进程接收到信号时就触发。信号列表详见标准的 POSIX 信号名，如 SIGINT、SIGUSR1 等。


 */

// 输出到终端
process.stdout.write("process stout ! -------- ");

console.log("\n");


console.log("读取参数----------------");
// 通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

console.log("\n");

// 获取执行路径
console.log('执行路径 : ' + process.execPath);
console.log("\n");

// 平台信息
console.log('平台信息 : ' + process.platform);
console.log("\n");

// 输出当前目录
console.log('当前进程的工作目录: ' + process.cwd());
console.log("\n");

// 输出当前版本
console.log('当前版本: ' + process.version);
console.log("\n");

// 输出内存使用情况
console.log('内存使用情况 :' + JSON.stringify(process.memoryUsage()));
console.log("\n");


console.log('Node 已经运行的秒数 : ' + process.uptime());
console.log("\n");