/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity

    // Brute Force
    // for (let i = 0; i + k <= nums.length; i++ ) {
    //     let currMax = 0
    //     for (let j = i; j < i + k; j++) {
    //         currMax += nums[j]
    //     }
    //     currMax = currMax / k
    //     max = Math.max(max, currMax)
    // }

    // Optimized -> O(n)
    let curr = 0
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i]
        if (i >= k) {
            curr -= nums[i - k]
        }
        if (i >= k - 1) {
            max = Math.max(max, curr / k)
        }
    }

    return max
};