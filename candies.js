/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length
    const candies = new Array(len).fill(1)
    let res = 0

    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1
        }
    }
    for (let i = len - 1; i > 0; i--) {
        if (ratings[i - 1] > ratings[i]) {
            candies[i - 1] = Math.max(candies[i] + 1, candies[i - 1])
        }
        res += candies[i - 1]
    }

    return res + candies[len - 1]
};