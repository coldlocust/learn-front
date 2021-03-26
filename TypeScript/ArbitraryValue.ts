// 任意值：https://ts.xcatliu.com/basics/any.html
// 任意值(Any)含义:允许赋值为任意类型



// 定义一个变量为any类型
let defineAnyTypeVar:any='1'
defineAnyTypeVar=1    // 任意值允许被赋值为任意类型
console.log(defineAnyTypeVar.name)    // 任意值上访问任意类型值都是允许的(输出undefined)
console.log(defineAnyTypeVar.notExistFunction())  //任意值可以调用调用任意方法(即使并不存在)



// 未声明类型的变量
// 变量在声明的时候未指定其类型，此变量被识别为任意值类型
let varWithNoDeclaredType
varWithNoDeclaredType='1'
varWithNoDeclaredType=1
varWithNoDeclaredType.hello()
