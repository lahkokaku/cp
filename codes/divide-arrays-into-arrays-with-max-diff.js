/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    let res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i+=3) {
        if (
            nums[i + 1] - nums[i] <= k &&
            nums[i + 2] - nums[i] <= k &&
            nums[i + 2] - Wnums[i + 1] <= k
        ) {
            res.push([nums[i], nums[i+1], nums[i+2]])
        } else {
            res = []
            break
        }
    }

    return res
};

console.log(divideArray([4,2,9,8,2,12,7,12,10,5,8,5,5,7,9,2,5,11]))
console.log(divideArray([2,4,2,2,5,2]))