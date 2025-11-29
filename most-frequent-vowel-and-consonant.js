const isVowel = c => {
    switch (c.toLowerCase()) {
        case 'a':
        case 'i':
        case 'u':
        case 'e':
        case 'o':
            return true
        default: 
            return false
    }
}

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const charMap = new Map()
    let maxVowel = 0
    let maxConsonant = 0

    for (let i = 0; i < s.length; i++) {
        charMap.set(
            s[i],
            ((charMap.get(s[i]) + 1) || 1)
        )
        if (isVowel(s[i])) {
            maxVowel = Math.max(maxVowel, charMap.get(s[i]))
        } else {
            maxConsonant = Math.max(maxConsonant, charMap.get(s[i]))
        }
    }

    return maxVowel + maxConsonant
};