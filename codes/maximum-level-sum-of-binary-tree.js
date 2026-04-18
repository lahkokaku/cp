// Medium (69)
// #Tree #DFS #BFS
// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    const levelSum = {}

    const traverse = (node, level) => {
        if (node === null) {
            return
        }
        levelSum[level] = (levelSum[level] || 0) + node.val

        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }

    traverse(root, 1)

    let res = 0
    let max = Number.MIN_SAFE_INTEGER
    const entries = Object.entries(levelSum)
    for (const [key, value] of entries) {
        if (value > max) {
            max = value
            res = key
        }
    }

    return parseInt(res)
};