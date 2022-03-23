/*
 * @Description: 
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-22 14:39:26
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-22 14:40:42
 */

// typeof 对于原始类型来说，除了 null 都可以显示正确的类型
// typeof 对于对象来说，除了函数都会显示 object，
// 所以说 typeof 并不能准确判断变量到底是什么类型,
// 所以想判断一个对象的正确类型，这时候可以考虑使用 instanceof
console.log(typeof 2);               // number
console.log(typeof true);            // boolean
console.log(typeof 'str');           // string
console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
console.log(typeof function(){});    // function
console.log(typeof {});              // object
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object
