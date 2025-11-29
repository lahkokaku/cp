const isValidPair = (opening, closing) => {
    switch (closing) {
        case '}':
            return opening === '{'
        case ')':
            return opening === '('
        case ']':
            return opening === '['
    }
    return false
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let n = s.length
    for (let i = 0; i < n; i++) {
        const curr = s.charAt(i)
        if (curr === '(' || curr === '{' || curr === '[') {
            stack.push(curr)
            continue
        }
        if (isValidPair(stack[stack.length - 1], curr)) {
            stack.pop()
        } else {
            return false
        }
    }
    if (stack.length) {
        return false
    }
    return true
};

console.log(isValid('()[][{()}]'))