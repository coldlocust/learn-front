/*
 * @Description:  https://juejin.cn/post/6844904200917221389#heading-4
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-22 14:41:08
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-22 14:43:57
 */

/** instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。
 *  可以看出直接的字面量值判断数据类型，instanceof可以精准判断引用数据类型（Array，Function，Object），
 *  而基本数据类型不能被instanceof精准判断。
 *  -instanceof 在MDN中的解释：instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
 *  其意思就是判断对象是否是某一数据类型（如Array）的实例，
 *  请重点关注一下是判断一个对象是否是数据类型的实例。在这里字面量值，2， true ，'str'不是实例，所以判断值为false。
 */
 console.log(2 instanceof Number);                    // false
 console.log(true instanceof Boolean);                // false 
 console.log('str' instanceof String);                // false  
 console.log([] instanceof Array);                    // true
 console.log(function(){} instanceof Function);       // true
 console.log({} instanceof Object);                   // true    
 // console.log(undefined instanceof Undefined);
 // console.log(null instanceof Null);
 
//  这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了
 console.log((2).constructor === Number); // true
 console.log((true).constructor === Boolean); // true
 console.log(('str').constructor === String); // true
 console.log(([]).constructor === Array); // true
 console.log((function() {}).constructor === Function); // true
 console.log(({}).constructor === Object); // true
 