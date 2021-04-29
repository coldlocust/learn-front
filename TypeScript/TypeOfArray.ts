// 数组的类型：https://ts.xcatliu.com/basics/type-of-array.html
// 含义：在数组中有很多中方法可以定义数组



// [类型+方括号]表示法
let fibonacci: number[] = [1, 1, 2, 3, 5]

// let fibonacci2:number[]=[1,'1',2,3,5]  //不能将类型“string”分配给类型“number”

// fibonacci.push('8')   //类型“string”的参数不能赋给类型“number”的参数



/* 数组泛型（Array Generic） 
 * Array<elemType> 来表示数组
 * 
 */