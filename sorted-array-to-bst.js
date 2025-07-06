/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const constructBst = (left, right) => {
        if (left > right) return null
        
        const mid = Math.floor((right + left) / 2)
        const node = new TreeNode(nums[mid])
        node.left = constructBst(left, mid - 1)
        node.right = constructBst(mid + 1, right)

        return node
    }

    return constructBst(0, nums.length - 1)
};

// [1, 2, 3, 4, 5, 6, 7]