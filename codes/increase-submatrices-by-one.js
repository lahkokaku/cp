// https://leetcode.com/problems/increment-submatrices-by-one
// Difficulty: Medium

/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function(n, queries) {
    const diff = Array(n + 1).fill().map(() => Array(n + 1).fill(0))
    const matrix = Array(n).fill().map(() => Array(n).fill(0))

    let len = queries.length

    for (let i = 0; i < queries.length; i++) {
        const [r1, c1, r2, c2] = queries[i]
        diff[r1][c1] += 1
        diff[r2 + 1][c1] -= 1
        diff[r1][c2 + 1] -= 1
        diff[r2 + 1][c2 + 1] += 1
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const left = matrix?.[i - 1]?.[j] ?? 0
            const above = matrix?.[i]?.[j - 1] ?? 0
            const diag = matrix?.[i - 1]?.[j - 1] ?? 0
            matrix[i][j] = diff[i][j] + left + above - diag
        }
    }

    return matrix
};