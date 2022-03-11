/*
 * @Author: mazhao
 * @Date: 2022-03-10 15:24:28
 * @LastEditTime: 2022-03-10 15:45:26
 * @LastEditors: mazhao
 * @Description: https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 * @FilePath: \learn-front\JavaScript\codePractice\code\二进制中1的个数.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/

// 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。

// 方法1：循环检查给定整数二进制位的每一位是否为1
// 具体实现：当检查第i位时，让n与pow(2,i)进行与运算（当且仅当n的第i位为1时，运算结果不为0） 

function hammingWeight_1(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        if (n & (1 << i)) { //1<<i  1左移i位
            ++ret;
        }
    }
    return ret;
}


//方法2：方法1的优化
// n&(n-1),把n的二进制中最低位的1变为0之后的结果
// 例如：(6)=(110) (6-1)=(011)  6&5=(110)&(011)=01
// 不断让当前的n与n-1n做与运算，直到n变为0即可
// 因为每次运算会使得n的最低位的1被翻转，因此运算次数就等于n的二进制位中1的个数
function hammingWeight_2(n) {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ++ret;
    }
    return ret;
}


console.log(hammingWeight_1(11111111111111111111111111111101));
console.log(hammingWeight_2(11111111111111111111111111111101));