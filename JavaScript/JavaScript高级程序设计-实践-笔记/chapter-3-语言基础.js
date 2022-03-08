/*
 * @Description:
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-04 19:27:18
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-07 19:30:27
 */

test();

function test() {
    // var变量提升
    // variablePromotion();

    // let变量声明
    // letStatement();

    // const声明
    // constStatement();

    // 字符串插值
    // interpolationString();

    // symbol 类型
    symbolType();
}

// var声明变量提升
// 把所有变量声明都拉到函数作用域的顶部
function variablePromotion() {
    console.log(age); // undefined
    var age = 22;
    console.log(age); // 22
}

// let 声明的范围是块作用域(函数作用域的子集，作用域仅限制于函数作用域内部)
// let 声明的变量不会在作用域中被提升
// 而 var 声明的范围是函数作用域。
function letStatement() {
    if (true) {
        let age = 22;
        console.log(age); //22
    }
    if (false) {
        // let 声明的范围是块作用域(函数作用域的子集，作用域仅限制于函数作用域内部)
        console.log(age); //ReferenceError: age is not defined
    }

    if (false) {
        // let 声明的变量不会在作用域中被提升
        console.log(names); //ReferenceError: names is not defined
        names = 2;
    }

    // for循环中var和let的声明
    const N = 3;
    for (var i = 0; i < N; i++) {
        // 使用var声明迭代变量,迭代变量会渗透到循环体外部
        // 退出循环时,迭代变量保存的是导致退出循环的值:N(5)
        // 之后再执行超时逻辑,所有的i都是同一个变量,因而输出的都是同一个值
        setTimeout(() => {
            console.log(i);
        }); // 3 3 3
    }
    console.log(i); //3
    for (let j = 0; j < N; j++) {
        // 使用let声明迭代变量,迭代变量的作用域仅限制于函数作用域内部
        // js引擎会在后台为每个迭代循环声明一个新的迭代变量
        // 每个settimeout引用的都是不同的变量实例
        // 这种每次迭代声明一个独立变量实例的行为适用于所有风格的 for 循环，包括 for-in 和 for-of循环。
        setTimeout(() => {
            console.log(j);
        }); //1 2 3
    }
}

//const 声明的规则和let大致相同
//const 声明的不同之处在于,声明变量时必须初始化变量,且尝试修改const声明的变量会导致运行时候的错误,不允许重复声明
//const 声明的限制只适用于它指向变量的引用（如果const变量引用的是一个对象，那么修改这个对象内部属性并不影响const的限制）
function constStatement() {
    if (false) {
        //const 声明的不同之处在于,声明变量时必须初始化变量,且尝试修改const声明的变量会导致运行时候的错误,不允许重复声明
        const age = 88;
        age = 22; //TypeError: Assignment to constant variable.
    }

    if (true) {
        //const 声明的限制只适用于它指向变量的引用（如果const变量引用的是一个对象，那么修改这个对象内部属性并不影响const的限制）
        const person = {};
        person.name = "bo";
        console.log(person); //{ name: 'bo' }
    }

    if (true) {
        //用 const 声明一个不会被修改的 for 循环变量，每次迭代只是创建一个新变量。 for-of 和 for-in 循环
        const person = { name: "bo", age: 20, sex: "man" };
        let keys = []
        let values = []
        for (const key in person) {
            keys.push(key); //[ 'name', 'age', 'sex' ]
        }
        console.log(keys)
        for (const key of keys) {
            console.log(key); //name age sex
        }
        for (const key in keys) {
            console.log(key); //0 1 2
        }
        for (const key in person) {
            values.push(person[key]); //[ 'bo', 20, 'man' ]
        }
        console.log(values);
    }
}

// 字符串插值
// 模板字面量在定义时立即求值并转换为字符串实例，任何插入的变量也会从它们最接近的作用域中取值
function interpolationString() {
    let value = 5;
    let name = "star";
    let interpolationStr = `name:${name} value:${value}`
    console.log(interpolationStr);
    // 通过标签函数的第一个参数，即字符串数组的.raw 属性取得每个字符串的原始内容：
    let printRaw = (strings) => {
        console.log('Actual characters:');
        for (const str of strings) {
            console.log(str);
        }
        console.log('Escaped characters:');
        // 字符串数组的.raw 属性取得每个字符串的原始内容：
        // for (const rawstr of strings.raw) {
        //     console.log(rawstr);
        // }
    }

    printRaw(`\u00A9${ 'and' }\n`);
}

// TODO cann't understand how to use
// Symbol 类型
// Symbol 是原始值，且Symbol实例是唯一不变的
// Symbol 的用途是确保对象属性使用唯一标识符，不会发生属性冲突
function symbolType() {
    let sym = Symbol();
    console.log(typeof sym); //symbol

    // 调用 Symbol()函数时，也可以传入一个字符串参数作为对符号的描述（description），将来可以通
    // 过这个字符串来调试代码。但是，这个字符串参数与符号定义或标识完全无关：
    let symA = Symbol('A');
    let symB = Symbol('A');
    console.log(symA === symB); //false 

    if (false) {
        //Symbol()函数不能与 new 关键字一起作为构造函数使用。这样做是为了避免创建符号包装对象
        let mySymbol = new Symbol();
        console.log(mySymbol); //Symbol is not a constructor
    }

    //如果确实有用符号包装对象的必要，借用Object()函数
    if (true) {
        let mySymbol = Symbol();
        let myWrappedSymbol = Object(mySymbol);
        console.log(myWrappedSymbol) //[Symbol: Symbol()]
        console.log(typeof myWrappedSymbol) //object
    }
}