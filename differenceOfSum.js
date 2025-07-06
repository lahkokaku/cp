/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let divisibleSum = 0
    let nonDivisibleSum = 0

    for (let i = 0; i <= n; i++) {
        if (i % m === 0) {
            divisibleSum += i
            continue
        }
        nonDivisibleSum += i
    }

    return nonDivisibleSum - divisibleSum
};

console.log(differenceOfSums(8, 2))