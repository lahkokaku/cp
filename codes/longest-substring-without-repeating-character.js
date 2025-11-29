/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = 0

    for (let i = 0; i < s.length; i++) {
        let curr = ""
        for (let j = i; j < s.length; j++) {
            if (!curr.includes(s[j])) {
                curr += s[j]
            } else {
                break
            }
        }
        count = Math.max(curr.length, count)
    }

    return count
};