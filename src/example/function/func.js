/**
 * Created by shichp on 2017/1/4.
 */

//一个函数可以作为另一个函数接收一个参数。我们可以先定义一个函数，然后传递，也可以在传递参数的地方直接定义函数。

function execute(func,value) {
    func(value);
}

function say(word) {
    console.log(word);
}
execute(say,'hello');


/*------匿名函数------------*/
execute(function (value) {
    console.log(value);
},'anonymous func : hello world!');