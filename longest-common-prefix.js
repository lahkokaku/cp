/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let strsLen = strs.length
    if (strsLen === 1) {
        return strs[0]
    }

    let strLen = strs[0].length
    let res = ""

    for (let i = 0; i < strLen; i++) {
        let matching = true
        for (let j = 1; j < strsLen; j++) {
            if (strs[j][i] !== strs[j - 1][i]) {
                matching = false
                break
            }
            if (j === strsLen - 1) {
                res += strs[j][i]
            }
        }

        if (!matching) {
            break
        }
    }

    return res
};