/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const lossRecord = new Map()
    const len = matches.length
    for (let i = 0; i < len; i++) {
        const [winner, loser] = matches[i]
        if (!lossRecord.has(winner)) {
            lossRecord.set(winner, 0)
        }
        if (!lossRecord.has(loser)) {
            lossRecord.set(loser, 1)
        } else if (lossRecord.has(loser)) {
            lossRecord.set(loser, lossRecord.get(loser) + 1)
        }
    }
    const lostNoMatch = []
    const lostOneMatch = []

    for (const record of lossRecord.entries()) {
        const [player, loss] = record
        if (loss === 0) {
            lostNoMatch.push(player)
            continue
        }
        if (loss === 1) {
            lostOneMatch.push(player)
            continue
        }
    }

    return [
        lostNoMatch.toSorted((a, b) => a - b),
        lostOneMatch.toSorted((a, b) => a - b)
    ]
};

console.log(findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]))