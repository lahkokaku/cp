// Easy (48)
// #Array, #Math
// https://leetcode.com/problems/plus-one

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carryOver = 1
    let idx = digits.length - 1

    while (carryOver && idx > -1) {
        const next = digits[idx] + 1
        if (next > 9) {
            carryOver = 1
            digits[idx] = 0
            idx--
        } else {
            carryOver = 0
            digits[idx] = next
        }
    }
    if (carryOver) {
        digits.unshift(1)
    }

    return digits
};