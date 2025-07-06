class TimeLimitedCache {
    private cache: Map<any, {value: any, timerId: any}>
    constructor() {
        this.cache = new Map()
    }
    
    set(key: number, value: number, duration: number): boolean {
        const isExist = this.cache.has(key)
        if (isExist) {
            clearTimeout(this.cache.get(key)?.timerId)
        }
        const timerId = setTimeout(() => {
            this.cache.delete(key)
        }, duration)
        this.cache.set(key, {value, timerId})
        return isExist
    }
    
    get(key: number): number {
        if (!this.cache.has(key)) {
            return -1
        }
        return this.cache.get(key)?.value
    }
    
    count(): number {
        return this.cache.size
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
*/
const timeLimitedCache = new TimeLimitedCache()
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1) // 42
timeLimitedCache.count() // 1
setTimeout(() => console.log(timeLimitedCache.get(1)), 1000) // -1