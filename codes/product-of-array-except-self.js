/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = Array(nums.length).fill(1)

    // Three Loop
    // const leftProduct = Array(nums.length).fill(1)
    // const rightProduct = Array(nums.length).fill(1)
    // for (let i = 1; i < nums.length; i++) {
    //     leftProduct[i] = nums[i - 1] * leftProduct[i - 1]
    // }
    // for (let i = nums.length - 2; i > -1; i--) {
    //     rightProduct[i] = nums[i + 1] * rightProduct[i + 1]
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     res.push(leftProduct[i] * rightProduct[i])
    // }
    
    // Two Loop
    for (let i = 1; i < res.length; i++) {
        res[i] = res[i - 1] * nums[i - 1]
    }

    let right = nums[nums.length - 1]
    for (let i = res.length - 2; i > -1; i--) {
        res[i] *= right
        right *= nums[i]
    }

    return res
};