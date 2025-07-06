const fibonacci = (n) => {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
// console.log(fibonacci(10))

const fibonacciM = (n, memo = {}) => {
  if (memo[n]) {
    return memo[n]
  }
  if (n <= 1) {
    return n
  }
  return memo[n] = fibonacciM(n - 1, memo) + fibonacciM(n - 2, memo)
}
// console.log(fibonacciM(10))

const memoize = fn => {
  const cache = {}
  return (...args) => {
    if (cache[args.toString()]) {
      return cache[args.toString()]
    }
    return cache[args.toString()] = fn(...args)
  }
}
let fibonacciEM = (n) => {
  if (n <= 1) {
    return n
  }
  return fibonacciEM(n - 1) + fibonacciEM(n - 2)
}
fibonacciEM = memoize(fibonacciEM)
// console.log(fibonacciEM(10))

const fibonacciLoop = n => {
  if (n <= 1) {
    return 1
  }
  let prev = 0
  let curr = 1

  for (let i = 0; i < n - 1; i++) {
    curr = prev + curr
    prev = curr - prev
  }
  return curr
}
console.log(fibonacciLoop(10))