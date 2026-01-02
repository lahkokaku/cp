// Medium (80)
// #Array, #Stack, #Simulation
// https://leetcode.com/problems/build-an-array-with-stack-operations

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const res = []
    let curr = 0

    for (let i = 1; i <= n && i <= target[target.length - 1]; i++) {
        if (i === target[curr]) {
            res.push('Push')
            curr++
        } else {
            res.push('Push', 'Pop')
        }
    }


    return res
};