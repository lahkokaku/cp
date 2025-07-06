/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = []

    const flatten = (subArr, currLevel) => {
        const len = subArr.length
        for (let i = 0; i < len; i++) {
            if (Array.isArray(subArr[i]) && currLevel < n) {
                flatten(subArr[i], currLevel + 1)
                continue
            }
            res.push(subArr[i])
        }
    }

    flatten(arr, 0)

    return res
};