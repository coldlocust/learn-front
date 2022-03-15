/*
 * @Author: mazhao
 * @Date: 2022-03-15 16:21:56
 * @LastEditTime: 2022-03-15 16:41:48
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\NativeJavaScript\DesignPatterns\constructorPattern.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/** 自定义构造函数：以函数的方式为自己的对象定义属性和方法
 * --与工厂模式下相比，可以确保实例被标识为特定类型
 * --备注：构造函数和普通函数的区别在于调用方式的不同，通过new调用的都是构造函数
 * 函数名Person大写(构造函数首字母大写)
 * 没有显示的创建对象
 * 属性和方法直接赋值给了this
 * 没人return
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.introduce = function() {
        console.log(`name:${this.name} age:${this.age}  job:${this.age}`)
    }
}

/** 构造函数模式创建Person实例：使用new操作符
 * 以new操作符调用构造函数会执行如下操作
 * 1）在内存中创建一个新对象
 * 2）这个新对象内部的[[prototype]]特性被赋值为构造函数的prototype属性
 * 3）构造函数内部的this被赋值位这个新对象（即this指向新对象）
 * 4）执行构造函数内部的代码（给新对象增加属性)
 * 5）如果构造函数返回非空对象，则返回该对象；否则返回刚创建的新对象
 * 下面的例子中Person()构造函数代替了 createPerson()工厂函数。
 * 实际上，Person()内部的代码跟 createPerson()基本是一样的，区别如下
 * 1）没有显式的创建对象
 * 2）属性和方法直接赋值给了this
 * 3）没有return
 */
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");

person1.introduce(); //name:Nicholas age:29  job:29
person2.introduce(); //name:Greg age:27  job:27

//person1和person2都有一个constructor属性指向Person
console.log(person1.constructor == Person) //true
console.log(person2.constructor == Person) //truee

// 每个对象都是 Object 的实例，同时也是 Person 的实例，如下面调用
// instanceof 操作符的结果所示：
console.log(person1 instanceof Object); // true 
console.log(person1 instanceof Person); // true 
console.log(person2 instanceof Object); // true 
console.log(person2 instanceof Person); // true