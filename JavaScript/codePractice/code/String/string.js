/*
 * @Author: mazhao
 * @Date: 2022-03-13 10:22:04
 * @LastEditTime: 2022-03-13 10:22:04
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\String\string.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
/**
 * @description: concat 连接字符串：将一个或多个字符串拼接成一个新的字符串
 * @param {String} 可以接受任意多参数
 * @return {*}
 */
const funConcat = function() {
    const strHello = "hello";
    const strWorld = " world";
    console.log(strHello.concat(strWorld)); //hello world

    const strName = " name";
    const strJob = " more moneny,less hard";
    console.log(strHello.concat(strWorld, strName, strJob));
};
funConcat();

/**
 * @description: slice,sbustr,substring 从字符串中提取子字符串,返回的子字符串是个新字符串，并不会改变原字符串
 * @description: slice,sbustr,substring 都返回调用它们的字符串的一个子字符串，而且都接收一或两个参数
 *               第一个参数表示子字符串开始的位置，第二个参数表示子字符串结束的位置
 * @description: substr 第二个参数表示返回的子字符串数量。
 * @description: slice 第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）
 * @description: substring 第二个参数是提取结束的位置（即该位置之前的字符会被提取出来）
 * @param {*}
 * @return {*}
 */
const funSubString = function() {
    const stringValue = "hello world";
    console.log(stringValue.slice(3)); // "lo world"
    console.log(stringValue.substring(3)); // "lo world"
    console.log(stringValue.substr(3)); // "lo world"
    console.log(stringValue.slice(3, 7)); // "lo w"
    console.log(stringValue.substring(3, 7)); // "lo w"
    console.log(stringValue.substr(3, 7)); // "lo worl"
};
funSubString();