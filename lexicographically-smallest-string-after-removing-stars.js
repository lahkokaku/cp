/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    const count = new Array(26).fill().map(() => [])
    let res = s.split('')

    for (let i = 0; i < res.length; i++) {
        if (res[i] !== '*') {
            count[`${res[i]}`.charCodeAt(0) - 'a'.charCodeAt(0)].push(i)
            continue
        }
        for (let j = 0; j < 26; j++) {
            if (count[j].length > 0) {
                res[count[j].pop()] = '*'
                break
            }
        }
    }
    return res.filter(char => char !== '*').join('')
};

console.log(clearStars('aaba*'))