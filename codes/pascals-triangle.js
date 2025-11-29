/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]]
    }
    const res = [[1], [1, 1]]

    for (let i = 2; i < numRows; i++) {
        res.push([1, 1])
        for (let j = 1; j < i; j++) {
            res[res.length - 1].splice(j, 0, res[res.length - 2][j - 1] + res[res.length - 2][j])
        }
    }

    return res
};