/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const complement = new Map()
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        const diff = k - nums[i]
        if (complement.has(diff)) {
            count++
            if (complement.get(diff) === 1) {
                complement.delete(diff)
            } else {
                complement.set(diff, complement.get(diff) - 1)
            }
        } else {
            complement.set(nums[i], (complement.get(nums[i]) || 0) + 1)
        }
    }

    return count
};