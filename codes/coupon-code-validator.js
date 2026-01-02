// Difficulty: Easy (55.5%)
// Topics: Array, Hash Table, String, Sorting
// https://leetcode.com/problems/coupon-code-validator

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    const validCategories = new Set([
        'electronics',
        'grocery',
        'pharmacy',
        'restaurant'
    ])

    const validCodes = []

    for (let i = 0; i < code.length; i++) {
        if (!isActive[i]) {
            continue
        }
        if (!validCategories.has(businessLine[i])) {
            continue
        }
        if (code[i].length < 1) {
            continue
        }
        if (code[i].match(/^[a-z0-9_]+$/i)) {
            validCodes.push({
                code: code[i],
                businessLine: businessLine[i]
            })
        }
    }
    validCodes.sort((a, b) => {
        if (a.businessLine !== b.businessLine) {
            let i = 0
            while (a.businessLine[i] === b.businessLine[i]) {
                i++
            }
            return a.businessLine.charCodeAt(i) - b.businessLine.charCodeAt(i)
        }
        if (a.code !== b.code) {
            let j = 0
            while (a.code[j] === b.code[j]) {
                j++
            }
            return a.code.charCodeAt(j) - b.code.charCodeAt(j)
        }
        return false
    })

    return validCodes.map(validCode => validCode.code)
};