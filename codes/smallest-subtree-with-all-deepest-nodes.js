// Medium (75)
// #Hash Table #DFS #BFS #Tree
// https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes

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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    const childToParent = new Map()
    const levelToNodes = new Map()
    let lowestLevel = 0

    const dfs = (node, level) => {
        lowestLevel = Math.max(level, lowestLevel)
        const currLevel = levelToNodes.get(level) || new Set()
        currLevel.add(node)
        levelToNodes.set(level, currLevel)

        if (node.left) {
            childToParent.set(node.left.val, node)
            dfs(node.left, level + 1)
        }
        if (node.right) {
            childToParent.set(node.right.val, node)
            dfs(node.right, level + 1)
        }
    }

    dfs(root, 0)

    let nodesOnLowestLevel = levelToNodes.get(lowestLevel)
    while (nodesOnLowestLevel.size > 1) {
        const ancestors = new Set()
        for (const node of nodesOnLowestLevel) {
            ancestors.add(childToParent.get(node.val))
        }
        nodesOnLowestLevel = ancestors
    }

    return nodesOnLowestLevel.values().next().value
};