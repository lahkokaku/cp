/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let zeroCount = 0
    let maxLength = 0

    let left = 0
    for (let right = 0; right < nums.length; right++) {
        zeroCount += (nums[right] === 0)

        while (zeroCount > 1) {
            zeroCount -= (nums[left] === 0)
            left++
        }

        maxLength = Math.max(maxLength, right - left)
    }

    return maxLength
};

// Longer Code
/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestSubarray = function(nums) {
//     let zeroCount = 0
//     let maxLength = 0

//     let left = nums.indexOf(1) - 1
//     if (left < -1) {
//         return 0
//     } else if (left === -1) {
//         left = 0
//     }
//     let right = left
//     for (; right < nums.length; right++) {
//         if (nums[right] === 0) {
//             zeroCount++
//         }
//         if (zeroCount > 1) {
//             maxLength = Math.max(maxLength, right - left - 1)
//             while (nums[left] === 1) {
//                 left++
//             }
//             left++
//             zeroCount--
//         }
//     }

//     maxLength = Math.max(maxLength, right - left - 1)

//     return maxLength
// };