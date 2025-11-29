/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let len = digits.length
    let res = new Set()

    for (let i = 0; i < len; i++) {
        if (digits[i] === 0) {
            continue
        }
        for (let j = 0; j < len; j++) {
            if (j === i) {
                continue
            }
            for (let k = 0; k < len; k++) {
                if (k === i || k === j) {
                    continue
                }

                let currNum = parseInt(`${digits[i]}${digits[j]}${digits[k]}`)
                if (currNum % 2 === 0) {
                    res.add(currNum)
                }
            }
        }
    }

    return Array.from(res).sort()
};