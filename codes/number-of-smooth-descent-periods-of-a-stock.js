// Difficulty: Medium (65.9%)
// Topics: Array, Math, Dynamic Programming
// https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    const len = prices.length
    let curr = 1
    let res = 1

    for (let i = 1; i < len; i++) {
        if (prices[i-1] - prices[i] === 1) {
            curr++
        } else {
            curr = 1
        }
        res += curr
    }

    return res
};