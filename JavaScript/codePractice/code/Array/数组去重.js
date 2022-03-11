/*
 * @Author: mazhao
 * @Date: 2022-03-10 21:29:07
 * @LastEditTime: 2022-03-10 21:29:08
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\数组去重.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


/**
 * @description: 数组去重
 * @param {Array} 数组
 * @return {Array} 数组
 */
const array = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

// 方法1：通过reduce方法去重
const reduceArray = array.reduce((accArray, cur) => {
    if (accArray.indexOf(cur) === -1) {
        accArray.push(cur);
    }
    return accArray;
}, [])
console.log(reduceArray);