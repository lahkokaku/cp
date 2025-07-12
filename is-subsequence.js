/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let count = 0
    let index = 0
    
    for (const char of s) {
        while (index < t.length) {
            if (char === t[index]) {
                count++
                index++
                break
            }
            index++
        }
    }

    return count === s.length
};