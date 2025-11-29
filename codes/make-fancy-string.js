/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let newStr = ""
    let currChar = null
    let currCharCount = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== currChar) {
            currChar = s[i]
            currCharCount = 1
            newStr += s[i]
        } else {
            currCharCount++
            if (!(currCharCount >= 3)) {
                newStr += s[i]
            }
        }
    }

    return newStr
};