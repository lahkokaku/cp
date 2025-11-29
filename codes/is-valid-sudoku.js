/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = Array(9).fill(null).map(() => Array(9).fill(false))
    const cols = Array(9).fill(null).map(() => Array(9).fill(false))
    const subBoxes = Array(9).fill(null).map(() => Array(9).fill(false))

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                const num = parseInt(board[i][j]) - 1
                const currBox = (parseInt(i / 3) * 3) + parseInt(j / 3)

                if (rows[i][num] || cols[j][num] || subBoxes[currBox][num]) {
                    return false
                }
                rows[i][num] = cols[j][num] = subBoxes[currBox][num] = true
            }
        }
    }

    return true
};