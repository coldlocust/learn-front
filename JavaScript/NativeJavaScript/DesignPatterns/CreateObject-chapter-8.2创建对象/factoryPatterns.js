/*
 * @Author: mazhao
 * @Date: 2022-03-15 10:57:23
 * @LastEditTime: 2022-03-15 11:08:46
 * @LastEditors: mazhao
 * @Description: 工厂模式
 * @FilePath: \learn-front\JavaScript\codePractice\code\DesignPatterns\factoryPatterns.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/* 工厂模式：用于抽象创建特定对象的过程
 *   新创建多个对象，这些对象并不相同（占有独立的内存空间）
 */

function createPerson(name, age, job) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.job = job;
    return obj;
}

const person1 = createPerson('Matt', 17, "--");
const person2 = createPerson("Mary", 19, "---");
console.log(person1 === person2) //false
console.log(person1); //{ name: 'Matt', age: 17, job: '--' }
console.log(person2); //{ name: 'Mary', age: 19, job: '---' }