/*
 * @Description:
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-25 14:49:40
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-28 11:50:05
 */
//  手写call函数
//  参考链接：https://zhuanlan.zhihu.com/p/158634772
Function.prototype.myCall = function (contex, ...args) {
  // this必须是函数
  // if (typeof this !== "Function") {
  //   throw new TypeError("It's must be a function")
  // }
  // 没有context，或者传递的是null undefined，则重置为window
  if (!contex) {
    contex = window
  }
  // 指定唯一属性，防止delete错误
  const fn = Symbol()
  // 将this添加到context属性上
  contex[fn] = this
  // 直接调用context的fn
  const result = contex[fn](...args)
  // 删除掉context的fn属性
  delete contex[fn]
  return result
}
const obj = {
  name: "Call",
}
function sayName() {
  console.log(this.name)
}

sayName() //undefined
sayName.myCall(obj) //Call
