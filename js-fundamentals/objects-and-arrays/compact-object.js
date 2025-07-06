/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null) { 
        return
    }
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject)
    }
    if (typeof obj !== 'object') { 
        return obj
    }

    
    const compacted = {}
    for (const key in obj) {
        const value = compactObject(obj[key])
        if (value) {
            compacted[key] = value
        }
    }

    return compacted
};