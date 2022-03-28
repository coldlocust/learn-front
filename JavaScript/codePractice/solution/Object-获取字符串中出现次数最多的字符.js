/*
 * @Description:
 * @Version: 1.0
 * @Autor: mazhao
 * @Date: 2022-03-28 17:49:17
 * @LastEditors: mazhao
 * @LastEditTime: 2022-03-28 18:00:34
 */
const line = "abassggg"

let obj = {}
for (let i = 0; i < line.length; i++) {
  const ch = line[i]
  if (obj[ch]) {
    ++obj[ch]
  } else {
    obj[ch] = 1
  }
}
let maxCh = "#"
let maxVal = 0
for (let key in obj) {
  if (obj[key] > maxVal) {
    maxCh = key
    maxVal = obj[key]
  }
}
console.log(maxCh)
