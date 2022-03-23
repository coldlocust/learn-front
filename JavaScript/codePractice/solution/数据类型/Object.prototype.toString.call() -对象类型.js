/*
 * @Description: 
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-22 14:48:11
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-22 14:50:51
 */

// Object.prototype.toString.call() 使用 Object 对象的原型方法 toString ，
// 使用 call 进行狸猫换太子，借用Object的 toString 方法
let a = Object.prototype.toString;
 
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));

// 可以再调用slice(7,-1)精确判断
console.log(a.call(2).slice(8,-1))  //Number
console.log(a.call(2).slice(8,-1)==="Number")  //true