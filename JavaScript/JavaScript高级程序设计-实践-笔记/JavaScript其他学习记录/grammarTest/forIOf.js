// for... fof 循环：ES6新增的遍历方式，允许遍历一个有interator接口的数据结构并且返回各项的值
// 具有interator接口的数据结构：Array Map Set String TypedArray(类数组) NodeList对象
// 普通对象并没有interator接口
let testObj = { a: 1, b: 2 }
// for (let key of testObj) {
//     // console.log(key)    //testObj is not iterable
// }
for (let key in testObj) {
    console.log(key, testObj[key])
}

let newArray = new Array(1, 2, -10)
for (let value of newArray) {
    console.log(value)  //1 2 -10
}