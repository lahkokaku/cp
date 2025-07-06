/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    const snailSize = rowsCount * colsCount
    const len = this.length
    if (snailSize !== len) {
        return []
    }

    const res = Array(rowsCount).fill().map(() => Array(colsCount).fill())

    let currRow = 0
    let currCol = 0
    for (let i = 0; i < len && i <= snailSize; i++) {
        res[currRow][currCol] = this[i]
        if (currCol % 2 === 0) {
            if (currRow === rowsCount - 1) {
                currCol++
            } else {
                currRow++
            }
        } else {
             if (currRow === 0) {
                currCol++
            } else {
                currRow--
            }
        }
    }

    return res
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */