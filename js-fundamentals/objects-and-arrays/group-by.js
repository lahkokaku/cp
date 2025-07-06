/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const len = this.length
    const res = {}

    for (let i = 0; i < len; i++) {
        const curr = fn(this[i])

        if (curr in res) {
            res[curr].push(this[i])
        } else {
            res[curr] = [this[i]]
        }
    }

    return res
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */