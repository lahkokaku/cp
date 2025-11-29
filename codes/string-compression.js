/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0
    let write = 0

    while (read < chars.length) {
        const currChar = chars[read]
        let currCharCount = 0

        while (read < chars.length && chars[read] === currChar) {
            currCharCount++
            read++
        }
        chars[write++] = currChar

        if (currCharCount > 1) {
            for (const digit of currCharCount.toString()) {
                chars[write++] = digit
            }
        }

    }

    return write
};

// /**
//  * @param {character[]} chars
//  * @return {number}
//  */
// var compress = function(chars) {
//     let index = 0
//     while (index < chars.length) {
//         let currCharIndex = index
//         let currChar = chars[index]
//         let currCharCount = 1
//         while (chars[currCharIndex + 1] === currChar) {
//             currCharIndex++
//             currCharCount++
//         }
//         if (currCharCount > 1) {
//             chars.splice(index + 1, currCharCount - 1)
//             const arrCharCount = currCharCount.toString().split('')
//             while (arrCharCount.length > 0) {
//                 chars.splice(++index, 0, arrCharCount.shift())
//             }
//             index++
//         } else {
//             index++
//         }
//         console.log(chars)
//     }

//     return chars.length
// };