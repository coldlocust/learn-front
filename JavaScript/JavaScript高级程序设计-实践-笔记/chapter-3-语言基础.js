/*
 * @Description: 
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-04 19:27:18
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-05 20:09:36
 */

variablePromotion();


// var声明变量提升
function variablePromotion() {
    console.log(age);
    var age = 22;
    console.log(age);
}