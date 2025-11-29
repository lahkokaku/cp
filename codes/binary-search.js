/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let res = -1
    const binarySearch = (left, right) => {
        if (left > right) {
            return
        }
        const mid = parseInt((left + right) / 2)
        if (nums[mid] === target) {
            res = mid
            return
        }
        if (nums[mid] < target) {
            binarySearch(mid + 1, right)
        } else {
            binarySearch(left, mid - 1)
        }
    }
    binarySearch(0, nums.length)
    return res
};