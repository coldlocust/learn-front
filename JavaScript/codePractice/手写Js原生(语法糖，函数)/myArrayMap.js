/*
 * @Author: mazhao
 * @Date: 2022-03-15 20:38:48
 * @LastEditTime: 2022-03-15 20:43:51
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\手写Js原生(语法糖，函数)\myArrayMap.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
/**
 * @description: 实现数组的map方法
 * @param {*} fn
 * @param {*} thisValue
 * @return {*} newArray
 */

Array.prototype.myMap = (fn, thisValue) => {
    let res = [];
    thisValue = thisValue || [];
    Array.prototype.reduce((pre, cur, index, arr) => {
        return res.push(fn.call(thisValue, cur, index, arr));
    }, [])
    return res;
}

const arr = [1, 2, 3];
arr.myMap((item, index, arr) => {
    console.log(item, index, arr);
})