// Backtrack Unoptimized
// /**
//  * @param {number} n
//  * @param {number} limit
//  * @return {number}
//  */
// var distributeCandies = function(n, limit) {
//     let res = new Set()

//     const distribute = (candiesLeft, distribution) => {
//         if (candiesLeft === 0) {
//             res.add(distribution.toString())
//             return
//         }
//         if (distribution[0] < limit) {
//             let newDistribution = [...distribution]
//             newDistribution[0] += 1 
//             distribute(candiesLeft - 1, newDistribution)
//         }
//         if (distribution[1] < limit) {
//             let newDistribution = [...distribution]
//             newDistribution[1] += 1 
//             distribute(candiesLeft - 1, newDistribution)
//         }
//         if (distribution[2] < limit) {
//             let newDistribution = [...distribution]
//             newDistribution[2] += 1 
//             distribute(candiesLeft - 1, newDistribution)
//         }

//     }

//     distribute(n, [0, 0, 0])

//     return res.size
// };

// Enumeration
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let res = 0

    const maxCandyForFirstKid = Math.min(n, limit)
    for (let i = 0; i <= maxCandyForFirstKid; i++) {
        if (n - i > limit * 2) {
            continue
        }
        res += Math.min(n - i, limit) - Math.max(0, n - i - limit) + 1
    }

    return res
};