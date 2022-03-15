/*
 * @Author: mazhao
 * @Date: 2022-03-11 15:34:19
 * @LastEditTime: 2022-03-11 15:45:13
 * @LastEditors: mazhao
 * @Description:
 * @FilePath: \learn-front\JavaScript\codePractice\code\Algorithm\将十进制转为二进制--注意细节.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

function convertToBinary(num) {
    let ret = [];
    while (num !== 0) {
        ret.unshift(num % 2);
        num = Number.parseInt(num / 2);
    }

    while (ret.length !== 8) {
        ret.unshift(0);
    }
    console.log(ret.join().split(",").join("")) //将数组元素转为字符串
    return ret;
}

console.log(convertToBinary(10));