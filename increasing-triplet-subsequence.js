/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const triplet = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= triplet[0]) {
            triplet[0] = nums[i]
        } else if (nums[i] <= triplet[1]) {
            triplet[1] = nums[i]
        } else {
            return true
        }
    }

    return false
};