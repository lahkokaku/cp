// Difficulty: Medium
// https://leetcode.com/problems/fruit-into-baskets

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let res = 0
    const fruitTypes = new Map()
    let i = 0
    let j = 0

    while ((i < fruits.length) && (j < fruits.length)) {
        fruitTypes.set(fruits[j], (fruitTypes.get(fruits[j]) || 0) + 1)
        while (fruitTypes.size > 2) {
            fruitTypes.set(fruits[i], fruitTypes.get(fruits[i]) - 1)
            if (fruitTypes.get(fruits[i]) === 0) {
                fruitTypes.delete(fruits[i])
            }
            i++
        }
        j++
        res = Math.max(res, j - i)
    }

    return res
};