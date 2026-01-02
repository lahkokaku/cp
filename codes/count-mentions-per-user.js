// Difficulty: Medium (45.9%)
// Topics: Array, Math, Sorting, Simulation
// https://leetcode.com/problems/count-mentions-per-user

/**
 * @param {number} numberOfUsers
 * @param {string[][]} events
 * @return {number[]}
 */
var countMentions = function (numberOfUsers, events) {
  events.sort((a, b) => {
    const timeA = parseInt(a[1])
    const timeB = parseInt(b[1])
    if (timeA !== timeB) {
      return timeA - timeB
    }
    return (b[0] === 'MESSAGE' ? 0 : 1) - (a[0] === 'MESSAGE' ? 0 : 1)
  })

  const count = new Array(numberOfUsers).fill(0)
  const nextOnlineTime = new Array(numberOfUsers).fill(0)

  for (const event of events) {
    const curTime = parseInt(event[1])
    const type = event[0]

    if (type === 'MESSAGE') {
      const target = event[2]
      if (target === 'ALL') {
        for (let i = 0; i < numberOfUsers; i++) {
          count[i]++
        }
      } else if (target === 'HERE') {
        for (let i = 0; i < numberOfUsers; i++) {
          if (nextOnlineTime[i] <= curTime) {
            count[i]++
          }
        }
      } else {
        const users = target.split(' ')
        for (const user of users) {
          const idx = parseInt(user.substring(2))
          count[idx]++
        }
      }
    } else {
      const idx = parseInt(event[2])
      nextOnlineTime[idx] = curTime + 60
    }
  }

  return count
}

// /**
//  * @param {number} numberOfUsers
//  * @param {string[][]} events
//  * @return {number[]}
//  */
// var countMentions = function(numberOfUsers, events) {
//     const mentions = new Array(numberOfUsers).fill(0)
//     const timestampToEvents = new Map()

//     const offline = new Set()
//     const willBeOnline = new Map()

//     let allMentionCount = 0

//     events.sort((a, b) => {
//         const timeA = parseInt(a[1])
//         const timeB = parseInt(b[1])
//         return timeA - timeB
//     })
//     for (let i = 0; i < events.length; i++) {
//         const timestamp = parseInt(events[i][1])
//         const curr = timestampToEvents.get(timestamp) ?? []
//         curr.push(events[i])
//         timestampToEvents.set(timestamp, curr)
//     }

//     for (let i = 1; i <= 100000; i++) {
//         if (!timestampToEvents.has(i)) {
//             continue
//         }
//         const eventsInTimestamp = timestampToEvents.get(i)

//         for (let e = 0; e < eventsInTimestamp.length; e++) {

//             const [event, timestamp, message] = eventsInTimestamp[e]

//             const online = willBeOnline.get(i)
//             if (online !== undefined) {
//                 offline.delete(online)
//                 willBeOnline.delete(i)
//             }

//             if (event === 'OFFLINE') {
//                 offline.add(parseInt(message))
//                 willBeOnline.set(i + 60, parseInt(message))
//                 continue
//             }

//             if (message === 'ALL') {
//                 allMentionCount++
//             } else if (message === 'HERE') {
//                 for (let j = 0; j < mentions.length; j++) {
//                     if (!offline.has(j)) {
//                         mentions[j]++
//                     }
//                 }
//             } else {
//                 const ids = message.split(' ')
//                 for (let j = 0; j < ids.length; j++) {
//                     const id = parseInt(ids[j].slice(2))
//                     if (!offline.has(id)) {
//                         mentions[id]++
//                     }
//                 }
//             }
//         }
//     }

//     for (let i = 0; i < mentions.length; i++) {
//         mentions[i] += allMentionCount
//     }

//     return mentions
// };
