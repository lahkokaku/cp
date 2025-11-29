const isVowel = char => {
    switch (char.toLowerCase()) {
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
 * @return {string}
 */
var reverseVowels = function(s) {
    let left = 0
    let right = s.length - 1
    const arr = s.split('')

    while (left < right) {
        if (!isVowel(arr[left])) {
            left++
        }
        if (!isVowel(arr[right])) {
            right--
        }
        if (isVowel(arr[left]) && isVowel(arr[right])) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }

    return arr.join('')
};