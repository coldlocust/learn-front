/*
 * @Author: mazhao
 * @Date: 2022-03-10 16:50:34
 * @LastEditTime: 2022-03-10 16:50:35
 * @LastEditors: mazhao
 * @Description: 
 * @FilePath: \learn-front\JavaScript\codePractice\code\二叉树.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

//定义二叉树结点
function treeNode(val, left = null, right = null) {
    this.val;
    this.left = left;
    this.right = right;
}

/**
 * @description: 创建二叉树
 * 例：[3,9,20,null,null,15,7]，
   3
  / \
  9  20
    /  \
   15   7
 * @param {二叉树数组} arr
 * @return {treeNode}
 */
function createTreeNode(arr) {
    let len = arr.len;
    if (len == 0) {
        return treeNode(-1);
    }
    let root = treeNode(arr[0]);
    for (let i = 1; i < len; i++) {

    }
}