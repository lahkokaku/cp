// Difficulty: Medium (64%)
// Topics: Array, Dynamic Programming, Sorting
// https://leetcode.com/problems/two-best-non-overlapping-events

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    const times = []

    for (const event of events) {
        // Start time
        times.push([event[0], 1, event[2]])
        // End time
        times.push([event[1] + 1, 0, event[2]])
    }

    times.sort((a, b) => 
        a[0] === b[0] ?
            a[1] - b[1] :
            a[0] - b[0]
    )

    let res = 0
    let max = 0

    for (const time of times) {
        if (time[1] === 1) {
            res = Math.max(res, time[2] + max)
        } else {
            max = Math.max(max, time[2])
        }
    }

    return res
};