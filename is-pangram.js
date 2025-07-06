/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const count = new Set()

    const len = sentence.length

    for (let i = 0; i < len; i++) {
        count.add(sentence.charAt(i))
    }

    return count.size === 26
};