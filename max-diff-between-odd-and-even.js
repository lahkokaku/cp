/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    const count = Array(26).fill(0)
    let maxOdd = 0
    let minEven = Number.MAX_SAFE_INTEGER
    for (const char of s) {
        count[char.charCodeAt(0) - "a".charCodeAt(0)]++
        const currCount = count[char.charCodeAt(0) - "a".charCodeAt(0)]
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] === 0) {
            continue
        }
        if (count[i] % 2 === 0 && count[i] < minEven) {
            minEven = count[i]
        }
        if (count[i] % 2 !== 0 && count[i] > maxOdd) {
            maxOdd = count[i]
        }
    }

    return maxOdd - minEven
};