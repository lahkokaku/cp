// Unoptimized
// function climbingLeaderboard(ranked, player) {
//     // Write your code here
//     let res = []
//     let denseRank = new Set(ranked)
//     const playerLen = player.length
    
//     for (let i = 0; i < playerLen; i++) {
//         const denseRankLen = denseRank.size
//         for (let j = 0; j < denseRankLen; j++) {
//             let newDenseRank = [...denseRank]
//             if (player[i] >= newDenseRank[j]) {
//                 newDenseRank.splice(j, 0, player[i])
//                 denseRank = new Set(newDenseRank)
//                 res.push(j + 1)
//                 break
//             }
            
//             if (j === denseRankLen - 1) {
//                 newDenseRank.push(player[i])
//                 denseRank = new Set(newDenseRank)
//                 res.push(j + 2)
//             }
//         }
//     }
    
//     return res
// }

// Optimized
function climbingLeaderboard(ranked, player) {
    // Write your code here
    let res = []
    let denseRank = [...new Set(ranked)]
    const playerLen = player.length
    
    let currPos = denseRank.length - 1
    for (let i = 0; i < playerLen; i++) {
        while (currPos > -1 && player[i] >= denseRank[currPos]) {
            currPos--
        }
        
        res.push(currPos + 2)
    }
    
    return res
}