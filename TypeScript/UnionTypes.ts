// 联合类型：https://ts.xcatliu.com/basics/union-types.html
// 联合类型(Union Types):取值可以为多个类型中的一种



let unionTypesVar:string|number  // 声明一个联合类型
unionTypesVar=1
unionTypesVar='1'
// 当TypeScript不确定一个联合类型的变量到底是哪个类型的时候；
// 访问此联合类型的属性或方法[实际上是访问此联合类型中所有类型所共有的属性或方法]
// function getLength(something:number|string):number{
//     return something.length  //提示报错，number没有属性length
// }

// 如果是联合类型中所有类型所共有的方法，则可以这样访问
function getString(something:number|string):string{
    return something.toString()
}

// 联合类型的变量在赋值的时候，会根据类型推断的规则推断出一个类型
let anotherUnionTypesVar:string|number
anotherUnionTypesVar='seven' // anotherUnionTypesVar被推断成了string类型的对象
console.log(anotherUnionTypesVar.length)  // 5
anotherUnionTypesVar=7  // anotherUnionTypeVar被推断成了number
// console.log(anotherUnionTypesVar.length)  // 编译时出错


