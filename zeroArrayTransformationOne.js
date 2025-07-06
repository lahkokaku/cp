/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const len = nums.length
    const diffArray = new Array(len + 1).fill(0)

    const queryLen = queries.length
    for (let i = 0; i < queryLen; i++) {
        diffArray[queries[i][0]] += 1
        diffArray[queries[i][1] + 1] -= 1
    }

    // Constructing new array
    // const counts = []
    // let currCount = 0
    // const diffArrayLen = diffArray.length
    // for (let i = 0; i < diffArrayLen; i++) {
    //     currCount += diffArray[i]
    //     counts.push(currCount)
    // } 

    // for (let i = 0; i < len; i++) {
    //     if (counts[i] < nums[i]) {
    //         return false
    //     }
    // }

    // return true

    // Without constructing new array
    let currCount = 0
    const diffArrayLen = diffArray.length
    for (let i = 0; i < len; i++) {
        currCount += diffArray[i]
        if (currCount < nums[i]) {
            return false
        }
    } 
    return true
};

console.log(isZeroArray([2,2], [
  [0,1],
  [0,1]
]))