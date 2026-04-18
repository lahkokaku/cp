// Medium (51)
// #Tree #DFS #BFS
// https://leetcode.com/problems/maximum-product-of-splitted-binary-tree

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
var maxProduct = function(root) {
    const MOD = 1e9 + 7
    const dfs = node => {
        if (!node) {
            return 0
        }
        // Update node to be the sum of its value and its childs' value
        node.val += dfs(node.left) + dfs(node.right)
        return node.val
    }
    const total = dfs(root)
    
    const stack = []
    let res = Number.MIN_SAFE_INTEGER
    stack.push(root)
    while (stack.length > 0) {
        const curr = stack.pop()

        // Current node is the node that we cut off with its parent
        const currCount = (total - curr.val) * curr.val
        res = Math.max(currCount, res)
    
        if (curr.left) {
            stack.push(curr.left)
        }
        if (curr.right) {
            stack.push(curr.right)
        }
    }

    return res % MOD
};