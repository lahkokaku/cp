// Medium (53)
// #Array, #Hash Table, #Math
// https://leetcode.com/problems/magic-squares-in-grid

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const isMagicSquare = (row, col) => {
        const seen = new Set()

        // Check numbers are 1 - 9 and unique
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[row + i][col + j] > 9 || grid[row + i][col + j] < 1) {
                    return false
                }
                if (seen.has(grid[row + i][col + j])) {
                    return false
                }
                seen.add(grid[row + i][col + j])
            }
        }

        // Check diagonals
        const diagonalRight = grid[row][col] + grid[row + 1][col + 1] + grid[row + 2][col + 2]
        const diagonalLeft = grid[row][col + 2] + grid[row + 1][col + 1] + grid[row + 2][col]
        if (diagonalRight !== diagonalLeft) {
            return false
        }

        // Check rows
        for (let i = 0; i < 3; i++) {
            const sum = grid[row + i][col] + grid[row + i][col + 1] + grid[row + i][col + 2]
            if (sum !== diagonalRight) {
                return false
            }
        }

        // Check columns
        for (let i = 0; i < 3; i++) {
            const sum = grid[row][col + i] + grid[row + 1][col + i] + grid[row + 2][col + i]
            if (sum !== diagonalRight) {
                return false
            }
        }


        return true
    }


    let res = 0

    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            if (isMagicSquare(i, j)) {
                res++
            }
        }
    }

    return res
};