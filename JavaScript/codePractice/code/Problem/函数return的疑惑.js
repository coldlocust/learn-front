/*
 * @Author: mazhao
 * @Date: 2022-03-11 14:32:11
 * @LastEditTime: 2022-03-11 14:52:57
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\Problem\函数return的疑惑.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

const arr = [1, 2, 3, 4];
const item = 'z';
const index = 2;

function insert(arr, item, index) {
    const newArr = [...arr];

    //输出 [ 1, 2, 'z', 3, 4 ]
    newArr.splice(index, 0, item);
    return newArr;

    //输出[]
    return newArr.splice(index, 0, item);
}

console.log(insert(arr, item, index));