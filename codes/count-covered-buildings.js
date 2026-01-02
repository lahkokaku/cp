// Difficulty: Medium (58.6%)
// Topics: Array, Hash Table, Sorting
// https://leetcode.com/problems/count-covered-buildings

/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function(n, buildings) {
    const MIN = Number.MIN_SAFE_INTEGER
    const MAX = Number.MAX_SAFE_INTEGER

    let count = 0
    const minX = new Map()
    const maxX = new Map()
    const minY = new Map()
    const maxY = new Map()

    for (const [x, y] of buildings) {
        minX.set(y, Math.min(x, minX.get(y) || MAX))
        minY.set(x, Math.min(y, minY.get(x) || MAX))
        maxX.set(y, Math.max(x, maxX.get(y) || MIN))
        maxY.set(x, Math.max(y, maxY.get(x) || MIN))
    }

    for (const [x, y] of buildings) {
        if (!minX.has(y)) {
            continue
        }
        if (!minY.has(x)) {
            continue
        }
        if (!maxX.has(y)) {
            continue
        }
        if (!maxY.has(x)) {
            continue
        }
        if (
            x > minX.get(y) &&
            x < maxX.get(y) &&
            y > minY.get(x) &&
            y < maxY.get(x)
        ) {
            count++
        }
    }

    return count
};