/*
 * @Author: mazhao
 * @Date: 2022-03-13 10:24:21
 * @LastEditTime: 2022-03-13 10:35:27
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\Math\math.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// 自然对数E
console.log(Math.E);

// 圆周率π
console.log(Math.PI);

// 最大值最小值
const arr = [1, 3, 2, 3, 5, 6, 7, 8];
console.log(Math.min(...arr)); //1
console.log(Math.max(...arr)); //8

// 把小数值舍入为整数的四个方法
// Math.ceil() 始终向上舍入为最接近的整数
// Math.floor() 始终向下舍入为最接近的整数
// Math.round() 四舍五入舍入
// Math.fround() 返回数值最为接近的单精度（32位）浮点值表示
console.log(Math.ceil(25.9)); // 26 
console.log(Math.ceil(25.5)); // 26 
console.log(Math.ceil(25.1)); // 26 

console.log(Math.round(25.9)); // 26 
console.log(Math.round(25.5)); // 26 
console.log(Math.round(25.1)); // 25 

console.log(Math.fround(0.4)); // 0.4000000059604645 
console.log(Math.fround(0.5)); // 0.5 
console.log(Math.fround(25.9)); // 25.899999618530273 

console.log(Math.floor(25.9)); // 25 
console.log(Math.floor(25.5)); // 25 
console.log(Math.floor(25.1)); // 25