// Difficulty: Medium
// https://leetcode.com/problems/number-of-substrings-with-only-1s

/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const MOD = 10**9 + 7
    const len = s.length
    let res = 0

    let curr = 0
    for (let i = 0; i < len; i++) {
        if (s[i] === '1') {
            curr++
        } else {
            if (curr > 0) {
                res += ((curr + 1) * curr / 2) % MOD
            }
            curr = 0
        }
    }

    if (curr > 0) {
        res += ((curr + 1) * curr / 2) % MOD
    }

    return res
};