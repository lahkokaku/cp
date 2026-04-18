// Medium (51)
// #Array #Math
// https://leetcode.com/problems/four-divisors

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    const isPrime = num => {
        if (num < 2) {
            return false
        }
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    const fourDivisorsRes = num => {
        // Case 1: Num has factor x that is prime and x^3 === num 
        const x = parseInt(Math.cbrt(num))
        if (x * x * x === num && isPrime(x)) {
            // Factors are 1, x, x^2, x^3 (num)
            return 1 + x + x * x + num
        }

        // Case 2: Num has to factor a and b, where both are primes
        for (let a = 2; a * a <= num; a++) {
            if (num % a === 0) {
                const b = num / a
                if (a !== b && isPrime(a) && isPrime(b)) {
                    // Factors are 1, a, b, num
                    return 1 + a + b + num
                }
                return -1
            }
        }
        return -1
    }

    let res = 0

    for (const num of nums) {
        const sum = fourDivisorsRes(num)
        if (sum > -1) {
            res += sum
        }
    }

    return res
};