// Medium (70)
// String, Prefix Sum
// https://leetcode.com/problems/minimum-penalty-for-a-shop

/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    const prefix = Array(customers.length + 1).fill(0)

    for (let i = 0; i < customers.length; i++) {
        prefix[i + 1] = prefix[i] + (customers[i] === 'Y' ? 1 : -1)
    }

    let res = 0
    let best = 0
    for (let i = 0; i < prefix.length; i++) {
        if (prefix[i] > best) {
            best = prefix[i]
            res = i
        }
    }

    return res
};