/*
 * @Author: mazhao
 * @Date: 2022-03-16 11:25:43
 * @LastEditTime: 2022-03-17 10:15:29
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
        fun1: function() {
            console.log(this.name); //undefined
        },
        fun2: function() {
            setTimeout(() => {
                this.fun1();
            }, 100)
        }
    }
    console.log(a.fun2()); //Cherry
}
// changeThisByArrowFunction();


/** 2）在函数内部使用_this=this
 *  先将调用函数的对象保存在变量_this中，然后在这个函数中使用_this
 */
function changeThisBy_this() {
    var a = {

        name: "Cherry",

        func1: function() {
            console.log(this.name) //undefined
        },

        func2: function() {
            var _this = this;
            setTimeout(function() {
                _this.func1()
            }, 100);
        }

    };
    console.log(a.func2()); //cherry
}
changeThisBy_this();