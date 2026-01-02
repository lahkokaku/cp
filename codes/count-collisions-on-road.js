// Difficulty: Medium (55.5%)
// Topics: Stack, String, Simulation
// https://leetcode.com/problems/count-collisions-on-a-road

/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
    let flag = -1
    let collisions = 0
    for (let i = 0; i < directions.length; i++) {
        const curr = directions[i]

        if (curr === 'L') {
            if (flag >= 0) {
                collisions += flag + 1
                flag = 0
            }
        } else if (curr === 'S') {
            if (flag > 0) {
                collisions += flag
            }
            flag = 0
        } else {
            if (flag > 0) {
                flag++
            } else {
                flag = 1
            }
        }
    }

    return collisions
};