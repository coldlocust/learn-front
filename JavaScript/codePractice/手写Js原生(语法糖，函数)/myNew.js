/*
 * @Description: 手写new操作符
 * @Version: 2.0
 * @Autor: mazhao
 * @Date: 2022-03-21 13:48:34
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-21 14:09:21
 */

/**
 * @description:实现new操作符
 * new操作符完成的事情：
 * 1-创建了一个全新的对象
 * 2-它会被执行[[prototype]](也就是__proto__)链接
 * 3-它会使this指向新创建的对象
 * 4-通过new创建的每个对象将最终被[[prototype]]链接到这个函数的prototype对象上
 * 5-如果函数没有返回对象类型Object（包括Function,Array,Date,RegExp,Error）
 *   那么new表达式中的函数调用将返回该对象的调用
 * @param {*}
 * @return {*}
 * @author: mazhao
 */

function myNew(func) {
    var res = {};
    if (func.__proto__ !== null) {
        res.__proto__ = func.prototype;
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "Function") && ret !== null) {
        return ret;
    }
    return res;
}


var _obj = myNew(A, 1, 2);

var obj = new A(1, 2);

console.log(_obj === obj);