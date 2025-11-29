/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let res = Array(candies.length).fill(false)
    let maxCandies = 0
    for (let i = 0; i < candies.length; i++) {
        maxCandies = Math.max(maxCandies, candies[i])
    }

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            res[i] = true
        }
    }
    
    return res
};