/*
 * @Author: mazhao
 * @Date: 2022-03-15 14:16:04
 * @LastEditTime: 2022-03-15 15:48:11
 * @LastEditors: mazhao
 * @Description: 函数柯里化-https://www.jianshu.com/p/2975c25e4d71
 * @FilePath: \learn-front\JavaScript\codePractice\Function-函数柯里化-curry.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

/* 柯里化，英语：Currying
 *  是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数
 *  并且返回接受余下的参数而且返回结果的新函数的技术。
 *  函数柯里化Currying的好处:
 *      1:参数复用->reuseParameters
 *      2:提前确认->earlyAffirm
 *      3:延迟运行->delayRun
 *  函数柯里化：funCurrying
 */

// example();

function example() {
    // 普通的add函数
    function add(x, y) {
        return x + y;
    }
    // Currying后
    // 将add函数的x,y两个参数变成了一个先用一个函数接受x,再用一个函数去处理y参数
    // 只传递一部分参数来调用，返回一个函数处理剩下的参数
    function curryingAdd(x) {
        return function(y) {
            return x + y;
        };
    }
    console.log(add(1, 2)); //3
    console.log(curryingAdd(1)(2)); //3
}

// 参数复用
// reuseParameters();

function reuseParameters() {
    //正常正则验证字符串 reg.test(text)

    // 函数封装后
    function check(reg, text) {
        return reg.test(text);
    }
    console.log(check(/\d+/g, "test")); //false
    console.log(check(/[a-z]+/g, 'test')); //true
    //Currying后
    function curryingCheck(reg) {
        return function(text) {
            return reg.test(text);
        };
    }
    const hasNumber = curryingCheck(/\d+/g);
    const hasLetter = curryingCheck(/[a-z]+/g);
    console.log(hasNumber("test1")); //true
    console.log(hasNumber(11)); //false
    console.log(hasLetter("test")); //true
}

// 提前确认
function earlyAffirm() {
    var on = function(element, event, handler) {
        if (document.addEventListener) {
            if (element && event && handler) {
                element.addEventListener(event, handler, false);
            }
        } else {
            if (element && event && handler) {
                element.attachEvent('on' + event, handler);
            }
        }
    }

    var on = (function() {
        if (document.addEventListener) {
            return function(element, event, handler) {
                if (element && event && handler) {
                    element.addEventListener(event, handler, false);
                }
            };
        } else {
            return function(element, event, handler) {
                if (element && event && handler) {
                    element.attachEvent('on' + event, handler);
                }
            };
        }
    })();

    //换一种写法可能比较好理解一点，上面就是把isSupport这个参数给先确定下来了
    var on = function(isSupport, element, event, handler) {
        isSupport = isSupport || document.addEventListener;
        if (isSupport) {
            return element.addEventListener(event, handler, false);
        } else {
            return element.attachEvent('on' + event, handler);
        }
    }
}

// 延迟运行
function delayRun() {
    Function.prototype.bind = function(context) {
        var _this = this
        var args = Array.prototype.slice.call(arguments, 1)

        return function() {
            return _this.apply(context, args)
        }
    }
}

/*  函数柯里化方式
 *  通过闭包把参数初步保存下来，然后通过获取剩余的arguments进行拼接，最后执行需要currying的函数
 *  currying(a)(b)(c)这样的 使用递归再进行封装一层。
 *  curry的一些性能问题你只要知道下面四点就差不多了：
 *  curry的性能问题
 *  存取arguments对象通常要比存取命名参数要慢一点
 *  一些老版本的浏览器在arguments.length的实现上是相当慢的
 *  使用fn.apply( … ) 和 fn.call( … )通常比直接调用fn( … ) 稍微慢点
 *  创建大量嵌套作用域和闭包函数会带来花销，无论是在内存还是速度上
 */
function funCurrying(fun, args) {
    const _this = this;
    const len = args.length;
    // const args = args || [];
    return () => {
        const _args = Array.slice.call(arguments)
        Array.push.apply(args, _args);
        //如果参数小于最初的fn.length,则递归调用，继续收集参数
        if (_args.length < len) {
            return funCurrying.call(_this, fun, args);
        }
        //参数收集完毕，执行fun
        return fn.apply(this, _args)
    }
}

/** 面试题：实现一个add方法，使计算结果能满足如下预期
 * add(1)(2)(3) = 6;
 * add(1, 2, 3)(4) = 10;
 * add(1)(2)(3)(4)(5) = 15;
 */
function add() {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    const _args = Array.prototype.slice.call(arguments);

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    const _adder = function() {
        _args.push(...arguments);
        return _adder;
    };

    // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
    _adder.toString = function() {
        return _args.reduce(function(a, b) {
            return a + b;
        });
    }
    return _adder;
}

console.log(add(1)(2)(3).toString()) // 6
console.log(add(1, 2, 3)(4).toString()) // 10
console.log(add(1)(2)(3)(4)(5).toString()) // 15
console.log(add(2, 6)(1).toString()) // 9) // 15
console.log(add(2, 6)(1).toString()) // 9