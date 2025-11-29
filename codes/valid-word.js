/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    const vowel = new Set(['a', 'i', 'u', 'e', 'o'])
    const isAlphabetic = str => /[a-zA-Z]/.test(str)
    const isNumeric = str => /[0-9]/.test(str)
    const isAlphaNumeric = str => isAlphabetic(str) || isNumeric(str)
    
    if (word.length < 3) {
        return false
    }
    let vowelCount = 0
    let consonantCount = 0
    for (let i = 0; i < word.length; i++) {
        if (!isAlphaNumeric(word[i])) {
            return false
        }
        if (isAlphabetic(word[i])) {
            if (vowel.has(word[i].toLowerCase())) {
                vowelCount++
            } else {
                consonantCount++
            }
        }
    }

    return vowelCount > 0 && consonantCount > 0
};