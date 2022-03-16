/*
 * @Author: mazhao
 * @Date: 2022-03-16 11:25:43
 * @LastEditTime: 2022-03-16 11:34:00
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\手写Js原生(语法糖，函数)\this-(call,apply,bind).js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// this,call,apply,bind相关介绍文章
// https://juejin.cn/post/6844903496253177863

var name = "windowsName";

var a = {
    name: "Cherry",

    func1: function() {
        console.log(this.name)
    },

    func2: function() {
        setTimeout(function() {
            this.func1()
        }, 100);
    }

};

a.func2() // this.func1 is not a function