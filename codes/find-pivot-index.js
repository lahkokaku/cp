/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const n = nums.length
    const leftPrefix = Array(n).fill(0)
    const rightPrefix = Array(n).fill(0)

    for (let i = 1; i < n; i++) {
        leftPrefix[i] = leftPrefix[i - 1] + nums[i - 1]
        rightPrefix[n - i - 1] = rightPrefix[n - i ] + nums[n - i ]
    }

    for (let i = 0; i < n; i++) {
        if (leftPrefix[i] === rightPrefix[i]) {
            return i
        }
    } 

    return -1
};