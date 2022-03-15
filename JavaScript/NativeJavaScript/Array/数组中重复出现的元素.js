/*
 * @Author: mazhao
 * @Date: 2022-03-11 15:11:27
 * @LastEditTime: 2022-03-11 15:11:51
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\Array\数组中重复出现的元素.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/**
 * @description: 查找数组中重复出现的元素
 * @param {*}
 * @return {*}
 */
const arr = [1, 2, 4, 4, 3, 3, 1, 5, 3];

function duplicates(arr) {
    const ret = [];
    arr.forEach((ele) => {
        if (arr.indexOf(ele) !== arr.lastIndexOf(ele) && ret.indexOf(ele) == -1) {
            ret.push(ele);
        }
    });
    return ret;
}

console.log(duplicates(arr));