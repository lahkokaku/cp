// Difficulty: Hard
// https://leetcode.com/problems/swim-in-rising-water

class CustomMinHeap {
    constructor () {
        this.heap = []
    }

    isEmpty () {
        return this.heap.length === 0
    }

    enqueue (value) {
        if (this.isEmpty()) {
            this.heap.unshift(value)
        }

        const len = this.heap.length

        const { elevation, ...other } = value

        for (let i = 0; i < len; i++) {
            if (elevation < this.heap[i].elevation) {
                this.heap.splice(i, 0, value)
                return value
            }
        }

        this.heap.push(value)

        return value
    }

    dequeue () {
        if (this.isEmpty()) {
            return null
        }
        return this.heap.shift()
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    let res = 0
    const visited = new Set()
    const pq = new CustomMinHeap()

    pq.enqueue({
        elevation: grid[0][0],
        x: 0,
        y: 0
    })

    while (!pq.isEmpty()) {
        const {
            elevation,
            x,
            y
        } = pq.dequeue()

        visited.add([x, y].toString())

        res = Math.max(res, elevation)

        if (x === grid.length - 1 && y === grid.length - 1) {
            break
        }

        for (let i = 0; i < directions.length; i++) {
            const nextX = parseInt(x + directions[i][0])
            const nextY = parseInt(y + directions[i][1])
            if (
                !(nextX < 0 ||
                nextY < 0 ||
                nextX > grid.length - 1 ||
                nextY > grid.length - 1 ||
                visited.has([nextX, nextY].toString()))
            ) {
                pq.enqueue({
                    elevation: grid[nextX][nextY],
                    x: nextX,
                    y: nextY
                })
            }
        }
    }

    return res
};