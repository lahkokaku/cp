/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const len = nums.length
    const count = new Array(len + 1).fill(false)


    for (let i = 0; i <= len; i++) {
        count[nums[i]] = true
    }

    for (let i = 0; i <= len; i++) {
        if (!count[i]) {
            return i
        }
    }
};