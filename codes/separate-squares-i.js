// Medium (52)
// #Array #Binary Search #Line Sweep
// https://leetcode.com/problems/separate-squares-i

/**
 * @param {number[][]} squares
 * @return {number}
 */
var separateSquares = function(squares) {
    let minY = Number.MAX_SAFE_INTEGER
    let maxY = Number.MIN_SAFE_INTEGER
    let totalArea = 0

    for (const [x, y, l] of squares) {
        minY = Math.min(minY, y)
        maxY = Math.max(maxY, y + l)
        totalArea += l * l
    }

    const validate = limitY => {
        let area = 0
        for (const [x, y, l] of squares) {
            if (y < limitY) {
                area += l * Math.min(limitY - y, l)
            }
        }

        return area >= (totalArea / 2)
    }

    let low = minY
    let high = maxY
    const EPSILON = 1e-5
    while (Math.abs(high - low) > EPSILON) {
        const mid = (high + low) / 2
        if (validate(mid)) {
            high = mid
        } else {
            low = mid
        }
    }

    return high
};