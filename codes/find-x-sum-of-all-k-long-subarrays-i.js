// Difficulty: Easy 73.6%
// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const res = []

    for (let i = 0; i < nums.length - k + 1; i++) {
        const map = new Map()
        for (let j = 0; j < k; j++) {
            map.set(nums[i + j], (map.get(nums[i + j]) || 0) + 1)
        }
        let subRes = 0
        const sorted = Array.from(map).sort((a, b) => {
            if (b[1] === a[1]) {
                return b[0] - a[0]
            }
            return b[1] - a[1]
        })
        const maxLen = Math.min(x, sorted.length)
        for (let j = 0; j < maxLen; j++) {
            subRes += parseInt(sorted[j][0] * sorted[j][1])
        }

        res.push(subRes)
    }

    return res
};