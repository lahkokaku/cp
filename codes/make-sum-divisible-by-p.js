// Difficulty: Medium
// Topis: Array, Hash Table, Prefix Sum
// https://leetcode.com/problems/make-sum-divisible-by-p

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    const n = nums.length
    let sum = 0

    for (let i = 0; i < n; i++) {
        sum = (sum + nums[i]) % p 
    }

    const target = sum % p
    if (target === 0) {
        return 0
    }

    const map = new Map()
    map.set(0, -1)
    let currSum = 0
    let minLen = n

    for (let i = 0; i < n; i++) {
        currSum = (currSum + nums[i]) % p
        const needed = (currSum - target + p) % p

        if (map.has(needed)) {
            minLen = Math.min(minLen, i - map.get(needed))
        }

        map.set(currSum, i)
    }

    return minLen === n ? -1 : minLen
};