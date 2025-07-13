/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a' , 'i', 'u', 'e', 'o'])
    let max = 0
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            count++
        }
        if (i >= k && vowels.has(s[i - k])) {
            count--
        }
        max = Math.max(max, count)
        if (max === k) {
            break
        }
    }

    return max
};