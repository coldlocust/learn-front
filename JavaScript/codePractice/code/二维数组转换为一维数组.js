/*
 * @Author: mazhao
 * @Date: 2022-03-10 21:29:38
 * @LastEditTime: 2022-03-10 21:41:01
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\二维数组转换为一维数组.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/**
 * @description: 二维数组转换为一维数组
 * @param {Array} 数组
 * @return {Array} 数组
 */
const array = [
    [0, 1],
    [2, 3],
    [4, 5]
];


//通过reduce方法将二维数组转换为一维数组
const oneDemissionArray = array.reduce(
    (acc, cur) => { return acc.concat(cur) }, [] //[ 0, 1, 2, 3, 4, 5 ]
);
//另外一种写法
const oneDemissionArray_2 = array.reduce(
    (arr, cur) => arr.concat(cur), [] //[ 0, 1, 2, 3, 4, 5 ]
)



console.log(oneDemissionArray);
console.log(oneDemissionArray_2)