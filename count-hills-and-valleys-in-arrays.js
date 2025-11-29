/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    const validateHillOrValley = (left, middle, right) => {
        return (middle > left && middle > right) || (middle < left && middle < right)
    }

    let count = 0

    const uniqueNums = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        uniqueNums.push(nums[i])
    }

    for (let i = 1; i < uniqueNums.length - 1; i++) {
        if (validateHillOrValley(uniqueNums[i - 1], uniqueNums[i], uniqueNums[i + 1])) {
            count++
        }
    }

    return count
};