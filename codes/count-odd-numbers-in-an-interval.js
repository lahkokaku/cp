// Difficulty: Easy (52.6%)
// Topics: Math
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    // Both low and high are even
    if (
        (low % 2 === 0) && (high % 2 === 0)
    ) {
        return (high - low) / 2
    }
    // Both low and high are odd
    // Low and high are of different parity
    return parseInt((high - low) / 2) + 1

};