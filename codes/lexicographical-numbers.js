const generateLexicographicalNumbers = (currNum, limit, res) => {
    if (currNum > limit) {
        return
    }
    res.push(currNum)
    for (let i = 0; i <= 9; i++) {
        const nextNum = (currNum * 10) + i
        if (nextNum > limit) {
            break
        } else {
            generateLexicographicalNumbers(nextNum, limit, res)
        }
    }

}

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    const res = []
    for (let i = 1; i <= 9; i++) {
        generateLexicographicalNumbers(i, n, res)
    }

    return res
};