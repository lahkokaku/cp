// Medium (68)
// #Array #Greedy #Matrix
// https://leetcode.com/problems/maximum-matrix-sum

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    let sum = 0
    let minAbsVal = Number.MAX_SAFE_INTEGER
    let negativeCount = 0

    for (const row of matrix) {
        for (const val of row) {
            const absVal = Math.abs(val)
            sum += Math.abs(absVal)
            if (val < 0) {
                negativeCount++
            }
            minAbsVal = Math.min(minAbsVal, absVal)
        }
    }

    if (negativeCount % 2 !== 0) {
        sum -= 2 * minAbsVal
    }

    return sum
};