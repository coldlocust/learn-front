/*
 * @Author: your name
 * @Date: 2022-03-19 22:05:44
 * @LastEditTime: 2022-03-19 22:52:29
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \learn-front\JavaScript\codePractice\solution\Function-解析url.js
 */
// 小红书一面
// 编码：
// 解析url为：
// {
//     "protocol": "http",
//         "hoshostname": "www.domain.com",
//             "path": "order",
//                 "query": {
//         "user": "anonymous",
//             "id": "456",
//                 "city": "北京",
//                     "enabled": true
//     }
// }

// 需要解析的链接：
const url = 'http://www.domain.com/order?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
const url2 = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=vscode%20%E6%8F%92%E4%BB%B6%20gitlen&oq=vscode%2520%25E6%258F%2592%25E4%25BB%25B6%2520gitlen&rsv_pq=8eb6fa8e0014f987&rsv_t=07507A%2FusPCJXM5UsCS0gHyP72gysCQMioSsS7rAQ08WBcbx6f9nHWfBh9I&rqlang=cn&rsv_dl=tb&rsv_enter=1&rsv_btype=t&inputT=3&rsv_sug3=33&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&rsv_sug4=1795&rsv_sug=1"
parse(url)


function parse(url) {
    const protocolArr = url.split('://')
    const protocol = protocolArr[0]
    const hostnameArr = protocolArr[1].split('/')
    const hoshostname = hostnameArr[0]
    const pathArr = hostnameArr[1].split('?')
    const path = pathArr[0]
    const queryArr = pathArr[1].split('&')
    const query = {}
    queryArr.forEach((item) => {
        // 未指定值得 key 约定为 true
        if (item.indexOf('=') === -1) {
            query[item] = true
            return
        }
        const itemArr = item.split('=')
        const key = itemArr[0]
            // 解析中文参数
        const value = decodeURI(itemArr[1])
            // 重复出现的 key 要组装成数组
        if (query[key] !== undefined) {
            if (!Array.isArray(query[key])) {
                query[key] = [query[key]]
            }
            query[key].push(value)
        } else {
            query[key] = value
        }
    })
    return {
        protocol,
        hoshostname,
        path,
        query,
    }
}

console.log(parse(url2));
console.log(parse(url2));