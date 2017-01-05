/**util 是一个Node.js 核心模块，提供常用函数的集合
 * Created by shichp on 2017/1/5.
 */
var util = require('util');

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function (args) {
        console.log("hello : " + args)
    };
}

Base.prototype.showName = function () {
    console.log("It's name : " + this.name);
};

function Sub() {
    this.name = 'Sub';
}

console.log("-----------------inherits----------------------")

/*
 Base 有三个在构造函数 内定义的属性和一个原型中定义的函数,通过util.inherits 实现继承

 Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 属性和 函数都没有被 Sub 继承。
 */
util.inherits(Sub, Base);

var baseObj = new Base();
baseObj.showName();
baseObj.sayHello("It's Base !");
console.log(baseObj);

console.log('\n');


var subObj = new Sub();
subObj.showName();

//subObj.sayHello("it's sub !");
console.log(subObj);//在原型中定义的属性不会被console.log 作 为Sub对象的属性输出

console.log('\n');

console.log("-----------------inspect----------------------")
/*
 inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，至少接受一个参数 object，即要转换的对象
 showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
 util.inspect 并不会简单地直接把对象转换为字符串，即使该对 象定义了toString 方法也不会调用。
 */

function Person() {
    this.name = 'shichp';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

console.log('\n');


console.log("-----------------isArray----------------------");

console.log('util.isArray([]) : ' + util.isArray([]));
// Returns: true
console.log('util.isArray(new Array) : ' + util.isArray(new Array));
// Returns: true
console.log('util.isArray({}) : ' + util.isArray({}));
// Returns: false


console.log('\n');





