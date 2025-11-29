/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.toSorted((a, b) => a - b)
    console.log(sortedNums)

    const len = sortedNums.length
    let res = []

    for (let i = 0; i < len; i++) {
        if (i !== 0 && sortedNums[i] === sortedNums[i - 1]) {
            continue
        }

        let left = i
        let middle = left + 1
        let right = len - 1

        while (middle < right) {
            let sum = sortedNums[left] + sortedNums[middle] + sortedNums[right]
            if (sum === 0) {
                res.push([sortedNums[left], sortedNums[middle], sortedNums[right]])
                middle++
                right--

                while (middle < right && sortedNums[middle] === sortedNums[middle - 1]) {
                    middle++
                }
                while (middle < right && sortedNums[right] === sortedNums[right + 1]) {
                    right--
                }
                continue
            }

            if (sum < 0) {
                middle++
            } else {
                right--
            }
        }
    }

    return res
};

console.log(threeSum([-1,0,1,2,-1,-4]))