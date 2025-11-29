/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    let cleanedNumber = number.replaceAll('-', '').replaceAll(' ', '').split('')
    let res = []

    while (cleanedNumber.length > 0) {
        if (cleanedNumber.length > 4) {
            res.push(cleanedNumber.splice(0, 3).join(''))
            continue
        }
        if (cleanedNumber.length === 4) {
            res.push(cleanedNumber.splice(0, 2).join(''))
            res.push(cleanedNumber.splice(0, 2).join(''))
            continue
        }
        if (cleanedNumber.length > 0) {
            res.push(cleanedNumber.splice(0, cleanedNumber.length).join(''))
            continue
        }
    }    

    return res.join('-')
};