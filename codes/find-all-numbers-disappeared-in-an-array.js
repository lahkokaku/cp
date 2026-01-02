// Easy (63)
// #Array, #Hash Table
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // Mark the number of the missing number index to negative
    for (let i = 0; i < nums.length; i++) {
        // Handle case where number is already marked as negative
        const idx = Math.abs(nums[i]) - 1
        if (nums[idx] > 0) {
            nums[idx] = -nums[idx]
        }
    }

    const res = []
    for (let i = 0; i < nums.length; i++) {
        // If number on index is positive then the (index + 1) number is missing
        if (nums[i] > 0) {
            res.push(i + 1)
        }
    }

    return res
};