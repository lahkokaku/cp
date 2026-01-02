// Medium (58)
// Array, Greedy, Sorting
// https://leetcode.com/problems/maximize-happiness-of-selected-children

/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let res = 0
    let recession = 0
    happiness.sort((a, b) => b - a)

    for (let i = 0; i < k; i++) {
        if (happiness[i] - recession < 0) {
            break
        }
        res += happiness[i] - recession
        recession++
    }

    return res
};