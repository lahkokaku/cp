/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const diff = (a, b) => Math.abs(a - b)

    const sortedNums = nums.toSorted((a,b) => a - b)

    let res = sortedNums[0] + sortedNums[1] + sortedNums[2]
    
    for(let left = 0; left < nums.length; left++) {
        let middle = left + 1
        let right = nums.length - 1
        while (middle > left && middle < right) {
            let curr = sortedNums[left] + sortedNums[middle] + sortedNums[right]
            if (diff(target, curr) < diff(target, res)) {
              res = curr
            }

            if (curr < target) {
                middle++
                continue
            }
            if (curr > target) {
                right--
                continue
            }
            break
        }
    }

    return res
};

console.log(threeSumClosest([0,3,97,102,200], 300))