/**
 * Created by shichp on 2017/1/4.
 */

/**
 把一个对象封装到模块中

 module.exports = function() {
  // ...
}

 */
//通过 exports 对象把 world 作为模块的访问接口
exports.world = function() {
    console.log('Hello World');
}

exports.say = function (args) {
    console.log("say : " + args)
}


function abc(args) {
    console.log("abc : " +  args);
}
module.exports.abc = abc;


function sss(args) {
    console.log("sss : " +  args);
}
exports.sss  = sss;