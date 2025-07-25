/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let res = -1
    let min = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            res = Math.max(res, nums[i] - min)
        } else {
            min = nums[i]
        }
    }

    return res
};