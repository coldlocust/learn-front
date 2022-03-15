/*
 * @Author: mazhao
 * @Date: 2022-03-15 21:06:42
 * @LastEditTime: 2022-03-15 21:17:21
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\NativeJavaScript\Function\arrowFunction.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/** 箭头函数：arrowFunction
 * 箭头函数实例化的函数对象与正式的函数表达式创建的函数对象行为是相同的
 * 任何可以使用函数表达式的地方，都可以使用箭头函数
 * 箭头函数虽然语法简洁，但也有很多场合不适用
 * --箭头函数不能使用 arguments、super和new.target
 * --不能用作构造函数
 * --箭头函数也没有 prototype 属性。
 */

function arrowFunction() {
    let double = (x) => { return 2 * x; };
    let triple = x => { return 3 * x; };
    // 没有参数需要括号
    let getRandom = () => { return Math.random(); };
    // 多个参数需要括号
    let sum = (a, b) => { return a + b; };
    console.log(double(1)); //2
    console.log(triple(3)); //9
    console.log(sum(1, 2)); //3
}
// arrowFunction();

// 箭头函数的写法
function arrowFunction_1() {
    // 箭头函数也可以不用大括号，但这样会改变函数的行为。
    // 使用大括号就说明包含“函数体”，可以在一个函数中包含多条语句，跟常规的函数一样。
    // 如果不使用大括号，那么箭头后面就只能有一行代码，
    // 比如一个赋值操作，或者一个表达式。而且，省略大括号会隐式返回这行代码的值：
    let double = (x) => { return 2 * x; };
    let triple = (x) => 3 * x;
    let value = {};
    let setName = (x) => x.name = "Matt";
    setName(value);
    console.log(double(1)); //2
    console.log(triple(3)); //9
    console.log(value.name); // "Matt"
}
arrowFunction_1();