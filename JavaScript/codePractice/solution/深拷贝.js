/*
 * @Description: 深拷贝的几种方法
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-23 17:25:45
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-23 18:19:15
 */

/** 1. 深拷贝-JSON.stringify和JSON.parse()
 *  不足：不可以拷贝undefined，function，RegExp等等类型的
 */

function deepCloneByJSON() {
  let obj = {
    num: 1,
    undef: undefined,
    fun: function () {},
    regExp: /[bc]at/i,
    date: new Date(),
  };
  let objStr = JSON.stringify(obj);
  let obj2 = JSON.parse(objStr);
  obj2.num = 3;
  obj2.name = "name";
  // {
  //     num: 1,
  //     undef: undefined,
  //     fun: [Function: fun],
  //     regExp: /[bc]at/i,
  //     date: 2022-03-23T09:40:27.815Z
  //   }
  console.log(obj);
  //{ num: 3, regExp: {}, date: '2022-03-23T09:44:25.448Z', name: 'name' }
  console.log(obj2);
}
// deepCloneByJSON()

/** 2. 深拷贝-Object.assign(target,source)
 *  不足：只能拷贝一层对象
 */
function deepCloneByObjectClone() {
  let obj = {
    num: 1,
    undef: undefined,
    fun: () => {
      console.log("拷贝函数");
    }, //Cannot convert undefined or null to object
    regExp: /[bc]at/i,
    date: new Date(),
    arr: [1, 2, 3, 4],
    level_1_obj: {
      __num: 1,
      level_2_obj: {
        ____arr: [{ a: "a", b: "b", c: undefined }, "a", 3],
        level_3_obj: 4,
      },
    },
  };
  let obj2 = Object.assign({}, obj);
  obj2.num = 3;
  obj2.name = "name";
//   {
//     num: 1,
//     undef: undefined,
//     fun: [Function: fun],
//     regExp: /[bc]at/i,
//     date: 2022-03-23T10:16:23.243Z,
//     arr: [ 1, 2, 3, 4 ],
//     level_1_obj: { __num: 1, level_2_obj: { ____arr: [Array], level_3_obj: 4 } }
//   }
  console.log(obj);
//   {
//     num: 3,
//     undef: undefined,
//     fun: [Function: fun],
//     regExp: /[bc]at/i,
//     date: 2022-03-23T10:16:23.243Z,
//     arr: [ 1, 2, 3, 4 ],
//     level_1_obj: { __num: 1, level_2_obj: { ____arr: [Array], level_3_obj: 4 } },
//     name: 'name'
//   }
  console.log(obj2);
  obj2.fun(); //拷贝函数
  console.log(obj2.level_1_obj.level_2_obj.level_3_obj); //4
}
// deepCloneByObjectClone();

/** 3. 深拷贝-递归拷贝
 *  优势：null、undefinde、function、RegExp等特殊的值也全部拷贝成功了，而且我们修改里边的值也不会有任何问题的
 */
function deepCloneByRecursiveCopy() {
  let obj = {
    num: 1,
    undef: undefined,
    fun: () => {
      console.log("拷贝函数");
    }, //Cannot convert undefined or null to object
    regExp: /[bc]at/i,
    date: new Date(),
    arr: [1, 2, 3, 4],
    level_1_obj: {
      __num: 1,
      level_2_obj: {
        ____arr: [{ a: "a", b: "b", c: undefined }, "a", 3],
        level_3_obj: 4,
      },
    },
  };
  let deepClone = (target) => {
    //  定义接受克隆后实体对象
    let result;
    if (typeof target === "object") {
      if (Array.isArray(target)) {
        result = []; //将result赋值为一个数组，并执行遍历
        for (let i in target) {
          // 递归克隆数组中的每一项
          result.push(deepClone(target[i]));
        }
      }
      // 判断如果当前的值是null的话，直接赋值为null
      else if (target === null) {
        result = null;
      }
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
      else if (target.constructor === RegExp) {
        result = target;
      }
      // 否则是普通对象，直接for in 循环，递归赋值对象的所有值
      else {
        result = {};
        for (let i in target) {
          result[i] = deepClone(target[i]);
        }
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
    else {
      result = target;
    }
    return result;
  };
  let obj2 = deepClone(obj);
  //   {
  //     num: 1,
  //     undef: undefined,
  //     fun: [Function: fun],
  //     regExp: /[bc]at/i,
  //     date: {},
  //     arr: [ 1, 2, 3, 4 ],
  //     level_1_obj: { __num: 1, level_2_obj: { ____arr: [Array], level_3_obj: 4 } }
  //   }
  console.log(obj2);
  obj2.fun(); //拷贝函数
  console.log(obj2.level_1_obj.level_2_obj.level_3_obj); //4
}
// deepCloneByRecursiveCopy();
