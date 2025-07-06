const getCoordinates = (val, boardLength) => {
    const rowFromTop = parseInt((val - 1) / boardLength)
    const row = (boardLength - 1) - rowFromTop
    let col = (val - 1) % boardLength

    if (
        (boardLength % 2 === 0 && row % 2 == 0) ||
        (boardLength % 2 === 1 && row % 2 == 1)
    ) {
        col = (boardLength - 1) - col
    }

    return {row, col}
}

/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length
    let queue = []
    let visited = new Array(n).fill(false).map(() => new Array(n).fill(false))
    visited[n - 1][0] = true
    queue.push(1)
    let steps = 0

    while (queue.length) {
        let length = queue.length

        while (length--) {
            let curr = queue.shift()

            if (curr === n * n) {
                return steps
            }

            for (let i = 1; i < 7; i++) {
                const next = curr + i
                if (next > n * n) {
                    break
                }
                const { row, col } = getCoordinates(next, n)
                if (visited[row][col]) {
                    continue
                }
                visited[row][col] = true
                if (board[row][col] === -1) {
                    queue.push(next)
                } else {
                    queue.push(board[row][col])
                }
            }
        }
        steps++
    }
    return -1

};

snakesAndLadders([[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]])