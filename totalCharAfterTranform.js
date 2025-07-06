// /**
//  * @param {string} s
//  * @param {number} t
//  * @return {number}
//  */
// var lengthAfterTransformations = function(s, t) {
//     let res = s
//     let nextRes = ""
//     let len = res.length
//     for (let i = 0; i < t; i++) {
//         for (let j = 0; j < len; j++) {
//             let asciiCode = res.charCodeAt(j)
//             if (asciiCode === 122) {
//                 nextRes += 'ab'
//                 continue
//             }
//             nextRes += String.fromCharCode(asciiCode + 1)
//         }
//         res = nextRes
//         len = nextRes.length
//         nextRes = ""
//     }

//     return res.length
// };

// Optimized
/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = Math.pow(10, 9) + 7
    let count = new Array(26).fill(0)

    for (const char of s) {
        count[char.charCodeAt(0) - "a".charCodeAt(0)]++
    }
    console.log(count)
    for (let i = 0; i < t; i++) {
        let next = new Array(26).fill(0)

        for (let j = 0; j < 26; j++) {
            if (j === 25 && count[25] > 0) {
                next[0] += count[j]
                next[1] = (count[j] + count[0]) % MOD
                continue
            }
            if (j < 25) {
              next[j + 1] += count[j]
              continue
            }
        }
        count = [...next]
    }

    let res = 0
    for (let i = 0; i < 26; i++) {
        res = (res + count[i]) % MOD
    }

    return res
};

console.log(lengthAfterTransformations('tyuety', 7))