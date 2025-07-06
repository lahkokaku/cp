/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    if (turnedOn < 0 || turnedOn > 10) return []
    const result = []

    for (let h = 0; h < 12; h++) {
        const hourBinary = h.toString(2).split('1').length - 1
        for (let m = 0; m < 60; m++) {
            const minuteBinary = m.toString(2).split('1').length - 1
            if ((hourBinary + minuteBinary) === turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`)
            }
        }
    }

    return result
};