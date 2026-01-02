// Hard (49)
// #Array, #Hash Table, #Sorting, #Heap
// https://leetcode.com/problems/meeting-rooms-iii

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
    meetings.sort((a, b) => a[0] - b[0])

    const count = Array(n).fill(0)
    const timer = Array(n).fill(0)

    for (let i = 0; i < meetings.length; i++) {
        const start = meetings[i][0]
        const end = meetings[i][1]
        const duration = end - start

        let room = -1
        let earliestRoom = -1
        let earliestTime = Number.MAX_SAFE_INTEGER

        for (let j = 0; j < n; j++) {
            if (timer[j] <= start) {
                room = j
                break
            }
            if (timer[j] < earliestTime) {
                earliestTime = timer[j]
                earliestRoom = j
            }
        }

        if (room !== -1) {
            timer[room] = end
            count[room]++
        } else {
            timer[earliestRoom] += duration
            count[earliestRoom]++
        }
    }

    let max = 0
    let res = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < count.length; i++) {
        if (max < count[i]) {
            res = i
            max = count[i]
        }
    }

    return res
};