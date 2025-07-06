type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cache = new Map<string, number>()

    return function(...args) {
        const key: string = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        }

        const result: number = fn(...args)
        cache.set(key, result)
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */