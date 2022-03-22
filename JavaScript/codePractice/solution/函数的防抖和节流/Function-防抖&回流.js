/*
 * @Description: 防抖函数
 * @Version: 2.0
 * @Autor: mazhao
 * @Date: 2022-03-21 17:27:05
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-21 22:44:32
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