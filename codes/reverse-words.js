/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // return s.replace(/\s+/g, ' ').trim().split(' ').reverse().join(' ')

    const words = []
    let isInWord = false
    let wordStart = 0
    for (let i = 0; i < s.length; i++) {
        if (/[a-zA-Z0-9]/.test(s[i])) {
            if (!isInWord) {
                isInWord = true
                wordStart = i
            }
        }
        if (isInWord) {
            if (!/[a-zA-Z0-9]/.test(s[i])) {
                isInWord = false
                words.push(s.substring(wordStart, i))
            } else if (i === s.length - 1) {
                words.push(s.substring(wordStart, s.length))
            }
        }
    }

    return words.reverse().join(' ')
};