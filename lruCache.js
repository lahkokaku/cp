class LRUCache {
  constructor (capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get (key) {
    if (!this.cache.has(key)) {
      return -1
    }
    const cachedValue = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, cachedValue)
    return cachedValue
  }

  put (key, value) {
    this.cache.delete(key)
    if (this.cache.size === this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
    }

    this.cache.set(key, value)
  }
}

const lru = new LRUCache(2)
console.log(
  lru.put(1,1),
  lru.put(2,2),
  lru.get(1),
  lru.put(3,3),
  lru.get(2),
  lru.put(4,4),
  lru.get(1),
  lru.get(3),
  lru.get(4)
)