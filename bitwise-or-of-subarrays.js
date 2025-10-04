/**
 * @param {number[]} arr
 * @return {number}
 */
var subarrayBitwiseORs = function(arr) {
    const res = new Set()
    let curr = new Set()
    curr.add(0)

    for (let i = 0; i < arr.length; i++) {
        const next = new Set()
        for (const digit of curr) {
            const bit = arr[i] | digit
            next.add(bit)
            res.add(bit)
        }
        next.add(arr[i])
        res.add(arr[i])
        curr = next
    }

    return res.size
};