/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const sortedNums = nums.toSorted((a, b) => a - b)

    const res = []

    for (let first = 0; first < sortedNums.length - 3; first++) {
        if (first !== 0 && sortedNums[first] === sortedNums[first - 1]) {
            continue
        }
        for (let second = first + 1; second < sortedNums.length - 2; second++) {
            if (second !== first + 1 && sortedNums[second] === sortedNums[second - 1]) {
                continue
            }

            let third = second + 1
            let fourth = sortedNums.length - 1

            while (third < fourth) {
                const curr = sortedNums[first] + sortedNums[second] + sortedNums[third] + sortedNums[fourth]

                if (curr === target) {
                    res.push([
                        sortedNums[first], 
                        sortedNums[second], 
                        sortedNums[third], 
                        sortedNums[fourth]
                    ])

                    third++
                    fourth--

                    while (third < fourth && sortedNums[third] === sortedNums[third - 1]) {
                        third++
                    }
                    while (third < fourth && sortedNums[fourth] === sortedNums[fourth + 1]) {
                        fourth--
                    }

                } else if (curr < target) {
                    third++
                } else {
                    fourth--
                }
            }
        }

    }

    return res
};

console.log([1,0,-1,0,-2,2], 0)