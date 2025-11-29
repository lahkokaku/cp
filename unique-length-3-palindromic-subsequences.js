// Difficulty: Medium
// https://leetcode.com/problems/unique-length-3-palindromic-subsequences
// Topcis: Hash Table, String

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const chars = new Set()
    const n = s.length
    for (let i = 0; i < n; i++) {
        chars.add(s[i])
    }

    let res = 0
    for (const char of chars) {
        let left = -1
        let right = 0
        for (let i = 0; i < n; i++) {
            if (s[i] === char) {
                if (left === -1) {
                    left = i
                }
                right = i
            }
        }

        const temp = new Set()
        for (let i = left + 1; i < right; i++) {
            temp.add(`${s[left]}${s[i]}${s[right]}`)
        }

        res += temp.size
    }
    return res
};