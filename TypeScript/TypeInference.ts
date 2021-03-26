// 类型推断：https://ts.xcatliu.com/basics/type-inference.html
// 类型推断含义：如果没有明确的指定类型，TypeScript会按照类型推断(Type Inference)的规则推断出一个类型



// 类型推断其实是Type Script对类型的一种推断
// 当用如下方式声明一个变量后
// 等价于 let defineVarWithExactValue:string='1'
// TypeScript在没有明确的指定类型(声明变量时)会推测出一个类型，这就是类型推断
let defineVarWithExactValue='1'  

// 如果[定义]的时候并没有赋值，不管在此之后有没有赋值，都会被推断成any类型而不被类型检查
let defineVarWithoutExactValue
defineVarWithoutExactValue='1'
defineVarWithoutExactValue=1
defineVarWithoutExactValue.hello()

