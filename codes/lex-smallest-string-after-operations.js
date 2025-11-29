// Difficulty: Medium
// https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function(s, a, b) {
    let res = s
    
    const visited = new Set([s])
    const queue = [s]

    while (queue.length) {
        const curr = queue.shift()

        if (curr < res) {
            res = curr
        }

        const next = curr.split('')

        for (let i = 1; i < next.length; i += 2) {
            next[i] = ((parseInt(next[i]) + a) % 10).toString()
        }
        const added = next.join('')
        if (!visited.has(added)) {
            visited.add(added)
            queue.push(added)
        }

        const rotated = curr.slice(-b) + curr.slice(0, -b)
        if (!visited.has(rotated)) {
            visited.add(rotated)
            queue.push(rotated)
        }
    }

    return res
};