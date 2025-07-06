/**
 * @param {string} s
 * @return {string}
 */
var robotWithString = function(s) {
    const count = new Array(26).fill(0)
    const len = s.length
    for (let i = 0; i < len; i++) {
        count[s.charCodeAt(i) - "a".charCodeAt(0)]++
    }

    let stack = []
    let res = ""
    let minChar = "a"
    for (let i = 0; i < len; i++) {
        stack.push(s.charAt(i))
        count[s.charCodeAt(i) - "a".charCodeAt(0)]--

        while (
            minChar !== "z" && count[minChar.charCodeAt(0) - "a".charCodeAt(0)] === 0
        ) {
            minChar = String.fromCharCode(minChar.charCodeAt(0) + 1)
        }

        while (stack.length > 0 && stack[stack.length - 1] <= minChar) {
            res += stack.pop()
        }
    }

    return res
};