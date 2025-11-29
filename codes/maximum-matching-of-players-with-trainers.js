/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function(players, trainers) {
    let count = 0
    players.sort((a, b) => a - b)
    trainers.sort((a, b) => a - b)

    let i = players.length - 1
    let j = trainers.length - 1

    while (i >= 0 && j >= 0) {
        if (players[i] > trainers[j]) {
            i--
            continue
        }
        count++
        i--
        j--
    }

    return count
};

// O(n log(n))
// Where
// n = Math.max(players.length, trainers.length)