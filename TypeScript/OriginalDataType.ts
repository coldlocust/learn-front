// 原始数据类型：https://ts.xcatliu.com/basics/primitive-data-types.html
// js基本数据类型：boolean,string,number,undefined,null
// es6新增数据类型：Symbol,BigInt
// js中没有空值的概念，TypeScript用void表示没有任何返回值的函数


// boolean
let varBool:boolean=false
let createByNewBoolean:Boolean=new Boolean(1)
console.log('varBool',varBool,`\n`,'createByNewBoolean',createByNewBoolean)



// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;

// NaN：表示该数值不是一个合法的数字[NaN是唯一一个不与自身相等的类型]
let notANumber: number = NaN;
// console.log(isNaN('abc')) //在js中会输出true:将'abc'转为数字，转换后的结果为NaN，然后会输出错误的结果true
// 如何判断一个值(假设为value)为NaN
//  ->  typeof(value)==='number'&&isNaN(value)

// Infinity:表示无穷大的概念
let infinityNumber: number = Infinity;



// string
let varString:string='a' 



// void
// 一个变量类型声明为void后，[只能]赋值为undefined和null
let varVoid:void=undefined
let varVoidNull:void=null



// null undefined
// 在TypeScript中可以定义这两个原始数据类型(undefied,null)
// undefined,null是所有类型的子类型[意味着undefined类型的变量可以赋值给number类型的变量]
let varUndefined:undefined=undefined
let varNull:null=null
let varAssignedByUndefiendValue=varUndefined
let varAssignedByNullValue=varNull



