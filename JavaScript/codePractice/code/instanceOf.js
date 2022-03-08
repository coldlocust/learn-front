/*
 * @Author: mazhao
 * @Date: 2022-03-08 09:28:16
 * @LastEditTime: 2022-03-08 11:24:48
 * @LastEditors: mazhao
 * @Description: js面试题
 * @FilePath: \learn-front\JavaScript\JavaScript高级程序设计-实践-笔记\codePractice\instanceOf.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


/**
 * @description: 
 * @param {leftvalue:左侧对象}
 * @param {rightvalue:右侧对象}
 * @return {Boolean:string}
 */
function newInstanceOf(leftvalue, rightvalue) {
    let rightProto = rightvalue.prototype;
    let leftProto = leftvalue.__proto__;
    while (true) {
        if (leftvalue == null) {
            return false;
        }
        if (leftvalue === rightProto) {
            return true;
        }
        leftvalue = left.__proto__;
    }
}



export {
    newInstanceOf,
}