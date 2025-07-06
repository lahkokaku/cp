/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let max = `${num}`.split('')
    let min = [...max]
    let toBeReplaced = null
    let index = 0

    while (index < max.length && max[index] === '9') {
        index++
    }
    if (index < max.length) {
        toBeReplaced = max[index]
        for (let i = 0; i < max.length; i++) {
            if (max[i] === toBeReplaced) {
                max[i] = '9'
            }
        }
    }
    toBeReplaced = min[0]
    for (let i = 0; i < min.length; i++) {
        if (min[i] === toBeReplaced) {
            min[i] = '0'
        }
    }

    return parseInt(max.join('')) - parseInt(min.join(''))
};