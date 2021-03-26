// 对象的类型--接口：https://ts.xcatliu.com/basics/type-of-object-interfaces.html
// 在TypeScript中使用接口来定义对象的类型(非常灵活)
// the interface of TypeScript：除了可用于对类的一部分行为进行抽象以外，也常用于对[对象的形状(Shape)]进行描述



// 定义了一个接口Person
// 接口一般首字母大写
interface Person {
    name: string,
    age: number
}

// 定义了一个变量Tom，它的类型是Person，
// 约束变量Tom的形状必须和接口Person一致 
// 赋值的时候，变量的形状必须和接口的形状保持一致
let Tom: Person = {
    name: 'Tom',
    age: 19
}
console.log(Tom)



// 可选属性
// 接口中的可选属性表示：该属性可以存在，可以不存在
interface Job {
    name: string,
    address?: string
}
let Job1: Job = {
    name: '不用上班还能挣钱'
}
let Job2: Job = {
    name: '要上班幸苦挣钱',
    address: '办公室'
}
console.log(Job1, '\n', Job2)



// 任意属性
// 接口中一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的子类型的子集
interface Song {
    name: string,
    // time?: number,  //报错->类型“number”的属性“time”不能赋给字符串索引类型“string”
    time: string,
    [type: string]: string,
    // [type2: string]: string, //报错->字符串索引签名重复
}

let Closer: Song = {
    name: 'Closer',
    // time: 4,  //报错->不能将类型“number”分配给类型“string”
    time: '4minute10s',
    type: 'pop'
}



// 任意属性中使用联合类型


