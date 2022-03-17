/*
 * @Author: mazhao
 * @Date: 2022-03-16 21:11:26
 * @LastEditTime: 2022-03-16 21:22:30
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\NativeJavaScript\Function\闭包.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/** 闭包：引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的
 *  因为闭包会保留它们包含函数的作用域，所以比其他函数更占用内存。
 *  过度使用闭包可能导致内存过度占用，因此建议仅在十分必要时使用
 */

function createComparisonFunction(propertyName) {
    return function(obj1, obj2) {
        let val1 = obj1[propertyName];
        let val2 = obj2[propertyName];
        if (val1 < val2) {
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    }
}