/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0
    const stonesCount = new Map()

    for (const stone of stones) {
        stonesCount.set(stone, (stonesCount.get(stone) + 1) || 1 )
    }

    for (const jewel of jewels) {
        if (stonesCount.has(jewel)) {
            count += stonesCount.get(jewel)
        }
    }

    return count
};