var message: string = 'hello world'
console.log(message)

function sayHello(name: string) {
    console.log('hello ' + name)
}
const anotherName:string='typeScript' //此处不能将变量命名为name
sayHello(anotherName)
