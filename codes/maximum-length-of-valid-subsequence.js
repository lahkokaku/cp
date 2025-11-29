/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const allOdd = []
    const allEven = []
    const alternating = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            allEven.push(nums[i])
        } else {
            allOdd.push(nums[i])
        }

        if (
            !alternating ||
            (nums[i] % 2) !== (alternating[alternating.length - 1] % 2)
        ) {
            alternating.push(nums[i])
        }
    }

    return Math.max(allEven.length, allOdd.length, alternating.length)
};