// Easy (80)
// #Array, #Greedy, #Counting Sort
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // Initialize count array
    let max = 0
    for (const num of nums) {
        max = Math.max(max, num)
    }

    const count = Array(max + 1).fill(0)
    for (let num of nums) {
        count[num]++
    }

    // Construct prefix sum for count array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1]
    }

    const res = Array(nums.length).fill(0)
    for (let i = 0; i < nums.length; i++) {
      // Take the count of number that is smaller than current number
      if (nums[i] !== 0) {
            res[i] = count[nums[i] - 1]
        }
    }

    return res
};