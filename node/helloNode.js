/* 1.引入required模块
*   使用require指令载入http模块
*   将实例化的HTTP赋值给变量http
*/
var http = require("http");

/* 2.创建服务器
*   使用http.createServer() 方法创建服务器
*   通过request,response参数接收和响应数据
*   使用 listen 方法绑定8080端口
*/
http.createServer(function (request,response){
    /* 发送http头部
    *   http状态值：200 ：OK
    *   内容类型：text/plain
    */
    response.writeHead(200,{'Content-Type':'text/plain'})
    //发送响应数据'hello world\n'
    response.end('hello world\n')
}).listen(8080)

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8080/');