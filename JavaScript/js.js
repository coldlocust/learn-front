/*
 * @Author: mazhao
 * @Date: 2022-03-15 11:30:04
 * @LastEditTime: 2022-03-21 17:36:09
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\js.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

const debouce=function(func,delay){
    let time=null;
    return function(...args){
        clearTimeout(time);
        time=setTimeout(()=>{
            func.apply(this,args);
        },delay)
    }
}

function fun(){
    console.log("延迟执行");
}

debouce(fun,1000);