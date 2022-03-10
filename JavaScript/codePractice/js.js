/*
 * @Description: js常用面试题
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-08 09:22:05
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-10 10:54:22
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
        leftvalue = leftvalue.__proto__;
    }
}


test();

function test() {
    //2.17  手动实现instanceOf
    //  instanceOf 判断一个实例是否属于某种类型
    let person = new Object();
    person.nam = "bob";
    console.log(newInstanceOf("bob", String));
}