class EventEmitter {
    constructor() {
        this.events = new Map()
    }
    
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (this.events.has(eventName)) {
            this.events.get(eventName).push(callback)
        } else {
            this.events.set(eventName, [callback])
        }
        
        return {
            unsubscribe: () => {
                const callbacks = this.events.get(eventName)
                const callbackIndex = callbacks.indexOf(callback) 
                if (callbackIndex > -1) {
                    callbacks.splice(callbackIndex, 1)
                }
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return []
        }
        const res = []
        const callbacks = this.events.get(eventName)
        callbacks.forEach(callback => {
            res.push(callback(...args))
        })

        return res
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */