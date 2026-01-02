// Medium (56)
// #Array, #Math, #Stack
// https://leetcode.com/problems/evaluate-reverse-polish-notation

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const rpn = []

    for (const token of tokens) {
        let first = null
        let second = null
        switch (token) {
            case '+':
                second = rpn.pop()
                first = rpn.pop()
                rpn.push(first + second)
                break
            case '-':
                second = rpn.pop()
                first = rpn.pop()
                rpn.push(first - second)
                break
            case '*':
                second = rpn.pop()
                first = rpn.pop()
                rpn.push(first * second)
                break
            case '/':
                second = rpn.pop()
                first = rpn.pop()
                rpn.push(parseInt(first / second))
                break
            default:
                rpn.push(parseInt(token))
        }
    }

    return rpn[0]
};
// /**
//  * @param {string[]} tokens
//  * @return {number}
//  */
// var evalRPN = function(tokens) {
//     const operands = new Set(['+', '-', '*', '/'])
//     const rpn = []

//     while (tokens.length || rpn.length > 1) {
//         // Get latest tokens if exist
//         if (tokens.length) {
//             const curr = tokens.pop()
//             if (operands.has(curr)) {
//                 rpn.unshift(curr)
//             } else {
//                 rpn.unshift(parseInt(curr))
//             }
//         }

//         // Clear out rpn stack
//         while (
//             typeof rpn[0] !== 'undefined' &&
//             typeof rpn[1] !== 'undefined' &&
//             !operands.has(rpn[0]) &&
//             !operands.has(rpn[1])
//         ) {
//             const num1 = rpn.shift()
//             const num2 = rpn.shift()
//             const operator = rpn.shift()

//             switch (operator) {
//                 case '+':
//                     rpn.unshift(parseInt(num1 + num2))
//                     break
//                 case '*':
//                     rpn.unshift(parseInt(num1 * num2))
//                     break
//                 case '-':
//                     rpn.unshift(parseInt(num1 - num2))
//                     break
//                 case '/':
//                     rpn.unshift(parseInt(num1 / num2))
//                     break
//             }
//         }
//     }

//     return rpn[0]
// };