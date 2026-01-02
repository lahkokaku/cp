// Easy (78.3)
// #Array, #Greedy, #Sorting
// https://leetcode.com/problems/apple-redistribution-into-boxes

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    capacity.sort((a, b) => b - a)

    let sum = 0
    for (const item of apple) {
        sum += item
    }

    let res = 0
    let currBox = 0
    while (sum > 0) {
        sum -= capacity[currBox]
        currBox++
        res++
    }

    return res
};