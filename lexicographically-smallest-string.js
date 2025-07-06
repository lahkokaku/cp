/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    const len = s1.length
    const aAscii = "a".charCodeAt(0)

    const mapping = Array(26).fill().map((_, i) => String.fromCharCode(i + aAscii))

    const find = (char) => {
        const currCharIndex = char.charCodeAt(0) - aAscii
        if (mapping[currCharIndex] !== char) {
            mapping[currCharIndex] = find(mapping[currCharIndex])
        }
        return mapping[currCharIndex]
    }
    const union = (char1, char2) => {
        let res1 = find(char1)
        let res2 = find(char2)

        if (res1 !== res2) {
            if (res1 < res2) {
                mapping[res2.charCodeAt(0) - aAscii] = res1
            } else {
                mapping[res1.charCodeAt(0) - aAscii] = res2
            }
        }
    }

    for (let i = 0; i < len; i++) {
        union(s1[i], s2[i])
    }

    let res = ""
    for (let i = 0; i < baseStr.length; i++) {
        res += find(baseStr[i])
    }

    return res
};