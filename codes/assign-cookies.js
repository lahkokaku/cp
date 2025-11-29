/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0
    
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let i = g.length - 1
    let j = s.length - 1

    while (i >= 0 && j >= 0) {
        if (g[i] > s[j]) {
            i--
            continue
        }
        count++
        i--
        j--
    }

    return count
};