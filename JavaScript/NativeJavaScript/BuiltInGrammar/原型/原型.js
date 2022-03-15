/*
 * @Author: mazhao
 * @Date: 2022-03-15 18:59:12
 * @LastEditTime: 2022-03-15 19:23:15
 * @LastEditors: mazhao
 * @Description:
 * @FilePath: \learn-front\JavaScript\NativeJavaScript\BuiltInGrammar\原型.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/** 原型-JavaScript高级教程（第四版）-8.2创建对象-原型模式-理解原型
 *  1）创建一个函数->按照特定的规则为这个函数创建一个prototype属性（指向原型对象）
 *  2）默认情况下，所有原型对象自动获得一个名为constructor的属性，指回相关联的构造函数
 *      Person.prototype.constructor===Person
 *      参考//JavaScript\NativeJavaScript\DesignPatterns\CreateObject-chapter-8.2创建对象\constructorPattern.js
 *  3）自定义构造函数时，原型对象只会获得constructor属性，其他所有的属性继承自Object
 *  4）每次调用构造函数创建一个新实例，这个实例的内部[[prototype]]指针会被赋值为构造函数的原型对象
 *  5）没有访问[[prototype]]的标准方式，在Firefox，chrome浏览器中会在每个对象上暴露__proto__属性，这个属性可以访问对象的原型
 *  6）总而言之：实例与构造函数原型有直接的联系，但实例与构造函数之间没有
 */

/**
 * 构造函数可以是函数表达式
 * 也可以是函数声明，因此以下两种形式都可以：
 * function Person() {}
 * let Person = function() {}
 */
function Person() {}

/**
 * 声明之后，构造函数就有了一个
 * 与之关联的原型对象：
 */
console.log(typeof Person.prototype); //object
console.log(Person.prototype); //Person {}

/**
 * 如前所述，构造函数有一个 prototype 属性
 * 引用其原型对象，而这个原型对象也有一个
 * constructor 属性，引用这个构造函数
 * 换句话说，两者循环引用：
 */
console.log(Person.prototype.constructor === Person); // true

/**
 * 正常的原型链都会终止于 Object 的原型对象
 * Object 原型的原型是 null
 */
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.prototype.__proto__.constructor === Object); // true
console.log(Person.prototype.__proto__.__proto__ === null); // true

console.log(Person.prototype.__proto__);
// {
// constructor: f Object(),
// toString: ...
// hasOwnProperty: ...
// isPrototypeOf: ...
// ...
// }
let person1 = new Person(),
    person2 = new Person();

/**
 * 构造函数、原型对象和实例
 * 是 3 个完全不同的对象：
 */
console.log(person1 !== Person); // true
console.log(person1 !== Person.prototype); // true
console.log(Person.prototype !== Person); // true
/**
 * 实例通过__proto__链接到原型对象，
 * 它实际上指向隐藏特性[[Prototype]]
 *
 * 构造函数通过 prototype 属性链接到原型对象
 *
 * 实例与构造函数没有直接联系，与原型对象有直接联系
 */
console.log(person1.__proto__ === Person.prototype); // true
conosle.log(person1.__proto__.constructor === Person); // true

/**
 * 同一个构造函数创建的两个实例
 * 共享同一个原型对象：
 */
console.log(person1.__proto__ === person2.__proto__); // true
/**
 * instanceof 检查实例的原型链中
 *  是否包含指定构造函数的原型：
 */
console.log(person1 instanceof Person); // true
console.log(person1 instanceof Object); // true
console.log(Person.prototype instanceof Object); // true