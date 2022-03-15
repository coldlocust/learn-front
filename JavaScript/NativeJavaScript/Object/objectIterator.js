/*
 * @Author: mazhao
 * @Date: 2022-03-15 19:57:37
 * @LastEditTime: 2022-03-15 20:10:40
 * @LastEditors: mazhao
 * @Description: 对象迭代
 * @FilePath: \learn-front\JavaScript\NativeJavaScript\Object\objectIterator.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/** ECMAScript 2017 新增了两个静态方法，用于将对象内容转换为序列化的——更重要的是可迭代的——格式。
 *  这两个静态方法Object.values()和 Object.entries()接收一个对象，返回它们内容的数组。
 *  Object.values()返回对象值的数组，
 *  Object.entries()返回键/值对的数组。
 */

function objectValues() {
    const o = {
        foo: 'bar',
        baz: 1,
        qux: {}
    }
    console.log(Object.values(o)); //[ 'bar', 1, {} ]
}
objectValues();

function objectEntries() {
    const o = {
        foo: 'bar',
        baz: 1,
        qux: {}
    }
    console.log(Object.entries(o));
}
objectEntries(); //[ [ 'foo', 'bar' ], [ 'baz', 1 ], [ 'qux', {} ] ]

function objectOtherAttribute() {
    const o = {
        qux: {}
    };
    console.log(Object.values(o)[0] === o.qux);
    // true 
    console.log(Object.entries(o)[0][1] === o.qux);
    // true 
    // 符号属性会被忽略：
    const sym = Symbol();
    const obj = {
        [sym]: 'foo'
    };
    console.log(Object.values(obj));
    // [] 
    console.log(Object.entries((obj)));
    // []
}
objectOtherAttribute();