/*
 * @Author: mazhao
 * @Date: 2022-03-15 20:31:23
 * @LastEditTime: 2022-03-21 13:38:44
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\手写Js原生(语法糖，函数)\myInstanceof.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/**
 * @description: instanceof作用：判断一个实例是否是其父类或者祖先类型的实例，instanceof
 * @description: 在查找过程中会遍历左边变量的原型链，直到找到右边的prototype查找失败，返回false
 * @param {*}target：实例
 * @param {*}origin:父类或者祖先类
 * @return {*}
 */
let myInstanceof = (target, origin) => {
    while (target) {
        if (target.__proto__ === origin.prototype) {
            return true;
        }
        target = target.__proto__;
    }
    return false;
}

let arr = [1, 2, 3];
console.log(myInstanceof(arr, Array)); //true
console.log(myInstanceof(arr, Object)); //true