// Easy (78)
// #Array #Hash Table
// https://leetcode.com/problems/n-repeated-element-in-size-2n-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const n = nums.length / 2
    const count = {}
    
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1
        if (count[nums[i]] === n) {
            return nums[i]
        }
    }

    return -1
};