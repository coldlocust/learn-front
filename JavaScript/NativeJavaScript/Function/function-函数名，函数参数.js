/*
 * @Author: mazhao
 * @Date: 2022-03-15 21:14:30
 * @LastEditTime: 2022-03-16 10:22:41
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\NativeJavaScript\Function\function.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


/** 函数名：指向函数的指针(以它们跟其他包含对象指针的变量具有相同的行为)
 *  所有函数对象都会暴露一个只读的 name 属性，其中包含关于函数的信息
 *  如果函数是一个获取函数、设置函数，或者使用 bind()实例化，那么标识符前面会加上一个前缀：
 */

function funName() {
    const functionNameIsAPointer = () => {
        // 指向函数的指针(以它们跟其他包含对象指针的变量具有相同的行为)
        const sum = function(a, b) {
            return a + b;
        }
        console.log(sum(1, 2)); //3
        const anotherSum = sum;
        console.log(anotherSum(1, 2)) //3
    }
    functionNameIsAPointer();

    const functionNameProperty = () => {
        // ECMAScript 6 的所有函数对象都会暴露一个只读的 name 属性，其中包含关于函数的信息
        // 如果它是使用 Function 构造函数创建的，则会标识成"anonymous"：
        function foo() {}
        let bar = function() {};
        let baz = () => {};
        console.log(foo.name); // foo 
        console.log(bar.name); // bar 
        console.log(baz.name); // baz 
        console.log((() => {}).name); //（空字符串）
        console.log((new Function()).name); // anonymous
    }
    functionNameProperty();

    const functionPrefix = () => {
        // 如果函数是一个获取函数、设置函数，或者使用 bind()实例化，那么标识符前面会加上一个前缀：
        function foo() {}
        console.log(foo.bind(null).name); // bound foo 
        let dog = {
            years: 1,
            get age() {
                return this.years;
            },
            set age(newAge) {
                this.years = newAge;
            }
        }
        let propertyDescriptor = Object.getOwnPropertyDescriptor(dog, 'age');
        console.log(propertyDescriptor.get.name); // get age 
        console.log(propertyDescriptor.set.name); // set age
    }
    functionPrefix();
}
// funName();

/** 函数参数
 *  1）ECMAScript 函数既不关心传入的参数个数，也不关心这些参数的数据类型。
 *      定义函数时要接收两个参数，并不意味着调用时就传两个参数。你可以传一个、三个，甚至一个也不传，解释器都不会报错。
 *  2）为什么1）要这么做？
 *      ECMAScript 函数的参数在内部表现为一个数组
 *      函数被调用时总会接收一个数组，但函数并不关心这个数组中包含什么
 *      在使用 function 关键字定义（非箭头）函数时，可以在函数内部访问 arguments 对象，从中取得传进来的每个参数值。
 *      arguments 对象是一个类数组对象（但不是 Array 的实例），因此可以使用中括号语法访问其中的元素
 */
function funParameters() {
    const funArguments = () => {
        const sayHi = function(name, message) {
            console.log("Hello " + name + ", " + message);
        }
        const __sayHi = function() {
            // 可以通过 arguments 对象的 length 属性检查传入的参数个数
            console.log(arguments.length); //2
            console.log("Hello " + arguments[0] + ", " + arguments[1]);
        }
        sayHi("world", "I hate COVID19") //Hello world, I hate COVID19
        __sayHi("world", "I hate COVID19") //Hello world, I hate COVID19

        const argumentsNumber = function() {
            function howManyArgs() {
                console.log(arguments.length);
            }
            howManyArgs("string", 45); // 2 
            howManyArgs(); // 0 
            howManyArgs(12); // 1
        }
        argumentsNumber();
    }
    funArguments()
}
// funParameters();