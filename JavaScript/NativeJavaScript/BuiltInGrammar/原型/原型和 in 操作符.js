/*
 * @Author: mazhao
 * @Date: 2022-03-15 19:40:37
 * @LastEditTime: 2022-03-15 19:55:36
 * @LastEditors: mazhao
 * @Description:
 * @FilePath: \learn-front\JavaScript\NativeJavaScript\BuiltInGrammar\原型\原型和 in 操作符.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/**
 * 有两种方式使用 in 操作符：单独使用和在 for-in 循环中使用
 * 1) 在单独使用时
 *  1.1）in 操作符会在可以通过对象访问指定属性时返回 true，无论该属性是在实例上还是在原型上
 * 2）在 for-in 循环中使用 in 操作符时
 *  2.1）可以通过对象访问且可以被枚举的属性都会返回，包括实例属性和原型属性。
 *  2.2）遮蔽原型中不可枚举（[[Enumerable]]特性被设置为 false）属性的实例属性也会在 for-in 循环中返回
 *  2.3）要获得对象上所有可枚举的实例属性，可以使用 Object.keys()方法。这个方法接收一个对象作
         为参数，返回包含该对象所有可枚举属性名称的字符串数组。
 */
function learnProperty() {
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 24;
    Person.prototype.job = "soft engineer";
    Person.prototype.sayName = () => {
        console.log(this.name);
    };
    let person1 = new Person();
    let person2 = new Person();
    console.log(person1.hasOwnProperty("name")); //true
    console.log("name" in person1); //true

    person1.name = "Greg";
    console.log(person1.name); // "Greg"，来自实例
    console.log(person1.hasOwnProperty("name")); // true
    console.log("name" in person1); // true
    console.log(person2.name); // "Nicholas"，来自原型
    console.log(person2.hasOwnProperty("name")); // false
    console.log("name" in person2); // true
    delete person1.name;
    console.log(person1.name); // "Nicholas"，来自原型
    console.log(person1.hasOwnProperty("name")); // false
    console.log("name" in person1); // true
}
// learnProperty();


function testProperty() {
    // 如果要确定某个属性是否存在于原型上，则可以像下
    // 面这样同时使用 hasOwnProperty()和 in 操作符：
    function hasPrototypeProperty(object, name) {
        return !object.hasOwnProperty(name) && name in object;
    }
    // 只要通过对象可以访问，in 操作符就返回 true，而 hasOwnProperty()只有属性存在于实例上
    // 时才返回 true。因此，只要 in 操作符返回 true 且 hasOwnProperty()返回 false，就说明该属性
    // 是一个原型属性
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";

    Person.prototype.sayName = function() {
        console.log(this.name);
    };
    let person = new Person();
    console.log(hasPrototypeProperty(person, "name")); // true
    person.name = "Greg";
    console.log(hasPrototypeProperty(person, "name")); // false
}
//testProperty()

function getAllEnumableProperty() {
    function Person() {}
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "Software Engineer";
    Person.prototype.sayName = function() {
        console.log(this.name);
    };
    let keys = Object.keys(Person.prototype);
    console.log(keys); // "name,age,job,sayName" 
    let p1 = new Person();
    p1.name = "Rob";
    p1.age = 31;
    let p1keys = Object.keys(p1);
    console.log(p1keys); // "[name,age]"
}
getAllEnumableProperty()