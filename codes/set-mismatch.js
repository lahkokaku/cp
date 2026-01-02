// Easy (45)
// Array, Hash Table, Bit Manipulation
// https://leetcode.com/problems/set-mismatch

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let max = 0
    const track = new Set()
    const res = []

    for (let i = 0; i < nums.length; i++) {
        if (track.has(nums[i])) {
            res.push(nums[i])
        }
        track.add(nums[i])
        max = Math.max(max, nums[i])
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!track.has(i)) {
            res.push(i)
            break
        }
    }

    return res
};