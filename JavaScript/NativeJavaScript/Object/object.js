/*
 * @Author: mazhao
 * @Date: 2022-03-15 10:01:52
 * @LastEditTime: 2022-03-15 10:54:17
 * @LastEditors: mazhao
 * @Description:
 * @FilePath: \learn-front\JavaScript\codePractice\code\Object\object.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// 合并对象（源对象的所有本地属性一起混入到目标对象上--mixin）
// 目标对象通过混入源对象，其自身的属性得到了增强
// 方法：Object.assigin()

//简单复制
const easySingleCopy = () => {
    let dest = {},
        src,
        result;
    src = { id: "src" };
    result = Object.assign(dest, src); //Object.assign修改目标对象，也会返回修改后的目标对象
    console.log(result === dest); //true
    console.log(src !== dest); //true
    console.log(dest); //{id:'src'}
};

//多个源对象复制
const multiObjectCopy = () => {
    dest = {};
    result = Object.assign(src, { a: "foo" }, { b: "boo" });
    console.log(result); // { id: 'src', a: 'foo', b: 'boo' }

    //覆盖属性
    dest = { id: "dest" };
    result = Object.assign(
        dest, { id: "src1", a: "foo" }, { id: "src2", b: "bar" }
    );
    // Object.assign 会覆盖重复的属性
    console.log(result); // { id: src2, a: foo, b: bar }
    // 可以通过目标对象上的设置函数观察到覆盖的过程：
    dest = {
        set id(x) {
            console.log(x);
        },
    };
    Object.assign(dest, { id: "first" }, { id: "second" }, { id: "third" });
    // first
    // second
    // third

    // 对象引用
    dest = {};
    src = { a: {} };
    Object.assign(dest, src);
    // 浅复制意味着只会复制对象的引用
    console.log(dest); // { a :{} }
    console.log(dest.a === src.a); // true
}

// 可计算属性，就可以在对象字面量中完成动态属性赋值
// 中括号包围的对象属性键告诉运行时将其作为 JavaScript 表达式而不是字符串来求值：
const computedObjectProperty = () => {
    const nameKey = "name";
    const ageKey = "age";
    const jobKey = "job";
    let person = {
        [nameKey]: "Matt",
        [ageKey]: 27,
        [jobKey]: "Software engineer",
    };
    console.log(person); // { name: 'Matt', age: 27, job: 'Software engineer' }

    // 因为被当作 JavaScript 表达式求值，所以可计算属性本身可以是复杂的表达式，在实例化时再求值：
    let uniqueToken = 0;

    function getUniqueKey(key) {
        return `${key}_${uniqueToken++}`;
    }
    let anotherPerson = {
        [getUniqueKey(nameKey)]: "Matt",
        [getUniqueKey(ageKey)]: 27,
        [getUniqueKey(jobKey)]: "Software engineer",
    };
    console.log(anotherPerson); // { name_0: 'Matt', age_1: 27, job_2: 'Software engineer' }
}

const parseAssignment = () => {
    const parseAssignment = () => {
        // 解构赋值不一定与对象的属性匹配。赋值的时候可以忽略某些属性，而如果引用的属性不存在，则
        // 该变量的值就是 undefined：
        let person = {
            name: "Matt",
            age: 27,
        };
        let { name, job } = person;
        console.log(name); // Matt
        console.log(job); // undefined
    }
    const defineDefaultValue = () => {
        // 也可以在解构赋值的同时定义默认值，这适用于前面刚提到的引用的属性不存在于源对象中的
        // 情况：
        let anotherPerson = {
            anotherName: "Matt",
            anotherAge: 27,
        };
        let { anotherName, anotherJob = "Software engineer" } = anotherPerson;
        console.log(anotherName); // Matt
        console.log(anotherJob); // Software engineer
    }
    const nestParse = () => {
        //嵌套解析
        let person = {
            name: "Matt",
            age: 27,
            job: {
                title: "Software engineer"
            }
        }
        let personCopy = {};
        ({
            name: personCopy.name,
            age: personCopy.age,
            job: personCopy.job
        } = person);
        person.job.title = "Hacker";
        console.log(person); //{ name: 'Matt', age: 27, job: { title: 'Hacker' } }
        console.log(personCopy); //{ name: 'Matt', age: 27, job: { title: 'Hacker' } }
    }
    nestParse();
}

parseAssignment()