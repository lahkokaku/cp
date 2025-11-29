/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    let maxNum = num.toString()
    let minNum = num.toString()
    const len = maxNum.length
    for (let i = 0; i < len; i++) {
        if (maxNum[i] !== '9') {
            maxNum = maxNum.replaceAll(maxNum[i], '9')
            break
        }
    }

    for (let i = 0; i < len; i++) {
        if (i === 0 && minNum[i] !== '1') {
            minNum = minNum.replaceAll(minNum[i], '1')
            break
        } else if (i !== 0 && minNum[i] !== minNum[0] && minNum[i] !== '0') {
            minNum = minNum.replaceAll(minNum[i], '0')
            break
        }
    }

    return parseInt(maxNum) - parseInt(minNum)
};