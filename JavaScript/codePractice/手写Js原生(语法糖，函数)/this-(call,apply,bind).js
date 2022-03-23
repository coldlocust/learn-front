/*
 * @Author: mazhao
 * @Date: 2022-03-16 11:25:43
 * @LastEditTime: 2022-03-22 22:00:59
 * @LastEditors: mazhao
 * @Description:
 * @FilePath: \learn-front\JavaScript\codePractice\手写Js原生(语法糖，函数)\this-(call,apply,bind).js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// this,call,apply,bind相关介绍文章
// https://juejin.cn/post/6844903496253177863

/** this的指向：this永远指向最后调用它的那个对象
 *  怎么改变this的指向？
 *      1）使用ES6的箭头函数
 *      2）在函数内部使用_this=this
 *      3）使用apply，call，bind
 *      4）new一个实例化对象
 */

/** 1)使用箭头函数
 *  箭头函数的this始终指向定义时的this，而非运行时
 *  箭头函数没有this，必须通过查找作用域链来确定其值
 *  如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，否则，this为undefined
 *
 */
const name = "windowsName";

function changeThisByArrowFunction() {
  const a = {
    name: "Cherry",
    fun1: function () {
      console.log(this.name); //undefined
    },
    fun2: function () {
      setTimeout(() => {
        this.fun1();
      }, 100);
    },
  };
  console.log(a.fun2()); //Cherry
}
// changeThisByArrowFunction();

/** 2）在函数内部使用_this=this
 *  先将调用函数的对象保存在变量_this中，然后在这个函数中使用_this
 */
function changeThisBy_this() {
  var a = {
    name: "Cherry",

    func1: function () {
      console.log(this.name); //undefined
    },

    func2: function () {
      var _this = this;
      setTimeout(function () {
        _this.func1();
      }, 100);
    },
  };
  console.log(a.func2()); //cherry
}
// changeThisBy_this();

// 在函数原型上实现myCall方法
/** 实现myCall方法思路
 *  ·通过对象属性的方法调用函数，这个函数里面的this指向这个对象
 *  ·每次调用新增一个Symbol属性，调用完毕后删除
 *  ·这个symbol属性就是调用myCall方法的函数
 *  ·函数形参中使用...arg是将多个形参都塞到一个数组里，在函数内部使用arg这个变量时，就是包含所有形参的数组
 *  ·在调用 context[fn](...arg)时候，...arg是为了展开数组，依次传入参数调用函数
 */
Function.prototype.myCall = function (context, ...arg) {
  const fn = Symbol("临时属性");
  context[fn] = this;
  context[fn](...arg);
  delete context[fn];
};

const  obj = {
  name: "zhenzhen",
  age: "18",
};
function printThis() {
  console.log(this);
}
printThis.myCall(obj); 

// 在函数原型上实现myApply方法
/**实现myApply类似于myCall方法思路
 * 同理，只是apply传递的第二个参数是数组，这里我们只需要在调用时，将参数用...把数组展开即可
 */
 const obj2 = {
    a: 1
}
Function.prototype.myApply = function (context, arg) {
  const fn = Symbol("临时属性");
  context[fn] = this;
  context[fn](...arg);
  delete context[fn];
}
printThis.myApply(obj2,[1,2,3])

