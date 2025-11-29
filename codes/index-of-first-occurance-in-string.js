/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack === needle) {
        return 0
    }

    const haystackLen = haystack.length
    const needleLen = needle.length

    for (let i = 0; i <= haystackLen - needleLen; i++) {
        if (haystack.substring(i, i + needleLen) === needle) {
            return i
        }
    }

    return -1
};