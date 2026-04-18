// Medium (59)
// #Array #Sorting
// https://leetcode.com/problems/maximize-area-of-square-hole-in-grid

/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a, b) => a - b) 
    vBars.sort((a, b) => a - b)

    let hCurr = 1
    let vCurr = 1
    let hMax = 1
    let vMax = 1

    for (let i = 1; i < hBars.length; i++) {
        if (hBars[i] === hBars[i - 1] + 1) {
            hCurr++
        } else {
            hCurr = 1
        }
        hMax = Math.max(hMax, hCurr)
    }
    for (let i = 1; i < vBars.length; i++) {
        if (vBars[i] === vBars[i - 1] + 1) {
            vCurr++
        } else {
            vCurr = 1
        }
        vMax = Math.max(vMax, vCurr)
    }

    const side = Math.min(vMax, hMax) + 1
    return side * side
};