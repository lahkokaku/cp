/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let indexA = a.length - 1
    let indexB = b.length - 1
    let carry = 0
    let res = ""

    while (indexA >= 0 || indexB >= 0 || carry > 0) {
        if (indexA >= 0) {
            carry += parseInt(a[indexA])
            indexA--  
        }
        if (indexB >= 0) {
            carry += parseInt(b[indexB])  
            indexB--  
        }
        console.log(carry)
        res = (carry % 2) + res
        carry = Math.floor(carry / 2)
        console.log(carry)
    }

    return res
};
addBinary('11', '11')