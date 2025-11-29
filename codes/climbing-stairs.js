/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1
    }

    let prev = 1
    let curr = 1

    for (let i = 2; i <= n; i++) {
        curr += prev
        prev = curr - prev
    }

    return curr
};