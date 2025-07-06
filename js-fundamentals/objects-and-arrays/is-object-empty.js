/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (!Object.keys(obj).length) {
        return true
    }
    return false
};