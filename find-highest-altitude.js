/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const altitude = [0]
    let max = 0
    for (let i = 0; i < gain.length; i++) {
        altitude.push(altitude[altitude.length - 1] + gain[i])
        max = Math.max(altitude[altitude.length - 1], max)
    }

    return max
};