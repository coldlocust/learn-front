/*
 * @Author: mazhao
 * @Date: 2022-03-11 09:50:06
 * @LastEditTime: 2022-03-11 10:07:21
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\扁平化数组-展开无限多层嵌套的数组.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/**
 * @description: 利用reduce,concat和递归展开无限嵌套的数组
 * @description: 数组扁平化其他方法：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @param {*} 多维嵌套数组
 * @return {*} 一维数组
 */

const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, [1, 2, 3, 4, 5, [1, 2]], 4]]];

const flatDeep = (arr, d = 1) => {
    return d > 0 ?
        arr.reduce((acc, cur) => {
            return acc.concat(Array.isArray(cur) ? flatDeep(cur, d - 1) : cur)
        }, []) :
        arr.slice();
};


console.log(flatDeep(arr, Infinity))