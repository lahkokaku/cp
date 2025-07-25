interface Array<T> {
    last(): T | -1;
}

Array.prototype.last = function() {
    if (this.length === 0) {
        return -1
    }

    return this.slice(-1)[0]
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
