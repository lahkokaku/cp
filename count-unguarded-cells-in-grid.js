// Difficulty: Medium
// https://leetcode.com/problems/count-unguarded-cells-in-the-grid

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    const cells = Array(m).fill().map(() => Array(n).fill(0))

    for (let i = 0; i < walls.length; i++) {
        const [x, y] = walls[i]
        cells[x][y] = 1
    }
    for (let i = 0; i < guards.length; i++) {
        const [x, y] = guards[i]
        cells[x][y] = 1
    }
    
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    for (let i = 0; i < guards.length; i++) {
        const [x, y] = guards[i]
        for (let j = 0; j < dirs.length; j++) {
            let tx = x
            let ty = y
            const [dx, dy] = dirs[j]
            while (true) {
                tx += dx
                ty += dy

                if (tx >= m || tx < 0 || ty >= n || ty < 0 || cells[tx][ty] === 1) {
                    break
                }

                cells[tx][ty] = 2
            }
        }
        // let left = false
        // let right = false
        // let top = false
        // let bottom = false
        // for (let j = 1; j < maxDist; j++) {
        //     if (x - j > -1 && !top) {
        //         if (cells[x - j][y] === 1) {
        //             top = true
        //         } else {
        //             cells[x - j][y] = 2
        //         }
        //     } else {
        //         top = true
        //     }

        //     if (x + j < m && !bottom) {
        //         if (cells[x + j][y] === 1) {
        //             bottom = true
        //         } else {
        //             cells[x + j][y] = 2
        //         }
        //     } else {
        //         bottom = true
        //     }

        //     if (y - j > -1 && !left) {
        //         if (cells[x][y - j] === 1) {
        //             left = true
        //         } else {
        //             cells[x][y - j] = 2
        //         }
        //     } else {
        //         left = true
        //     }

        //     if (y + j < n && !right) {
        //         if (cells[x][y + j] === 1) {
        //             right = true
        //         } else {
        //             cells[x][y + j] = 2
        //         }
        //     } else {
        //         right = true
        //     }

        //     if (
        //         (left && right && top && bottom)
        //     ) {
        //         break
        //     }
        // }
    }


    let res = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (cells[i][j] === 0) {
                res += 1
            }
        }
    }

    return res
};