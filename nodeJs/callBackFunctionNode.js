/*  阻塞代码实例
*   实例在文件读取完后才执行程序
*/
var fs1=require('fs')
var data1=fs1.readFileSync('input.txt')
console.log(data1.toString())
console.log('等待文件读取结束')
console.log('阻塞代码实例执行结束')
console.log('')

/*  非阻塞代码实例
*   实例不需要等待文件读取结束就可以执行
*   在读取文件内容的同时执行后面的代码，提高程序性能
*   在使用回调函数时注意其他函数在回调函数等待的过程中执行是否会影响执行结果
*/

var fs2=require('fs')
fs2.readFile('input.txt',function(err,data2){
    if(err)return console.error(err)
    console.log(data2.toString())
})
console.log('不用等待文件读取结束就可执行')
