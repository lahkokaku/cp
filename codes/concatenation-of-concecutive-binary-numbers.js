/**
 * @param {number} n
 * @return {number}
 */
var concatenatedBinary = function(n) {
    const MOD = BigInt(1e9 + 7)
    let res = 0n
    let bits = 0n

    for (let i = 1n; i <= BigInt(n); i++) {
        if ((i & (i - 1n)) === 0n) {
            bits++
        }
        res = ((res << bits) | i) % MOD
    }

    return Number(res)
};

// TLE
// var concatenatedBinary = function(n) {
//     const MOD = BigInt(1e9 + 7)
//     let res = 0n
//     let pow = 1n
//     while (n > 0) {
//         const currBinary = n.toString(2)
//         for (let i = 0; i < currBinary.length; i++) {
//             res += (BigInt(parseInt(currBinary[currBinary.length - 1 - i])) * (pow % MOD)) % MOD
//             res = res % MOD
//             pow *= 2n
//         }
//         n--
//     }

//     return Number(res)
// };