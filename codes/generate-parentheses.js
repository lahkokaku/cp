const generate = (res, curr, left, right, n) => {
    if (curr.length === n * 2) {
        res.push(curr)
        return
    }
    if (left < n) {
        generate(res, curr + "(", left + 1, right, n)
    }
    if (right < left) {
        generate(res, curr + ")", left, right + 1, n)
    }
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = []
    generate(res, "", 0, 0, n)
    return res
};