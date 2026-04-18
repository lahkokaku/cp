// Easy (61)
// #Array #Sorting #Sliding Window
// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if (k < 2) {
        return 0
    }

    nums.sort((a, b) => a - b)
    let min = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < nums.length - k + 1; i++) {
        min = Math.min(min, nums[i + k - 1] - nums[i])
    }

    return min
};