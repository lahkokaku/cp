// Optimized
// var lastSubstring = function (s) {
//     let i = 0,
//         j = 1,
//         n = s.length;
//     while (j < n) {
//         let k = 0;
//         while (j + k < n && s[i + k] === s[j + k]) {
//             k++;
//         }
//         if (j + k < n && s[i + k] < s[j + k]) {
//             let t = i;
//             i = j;
//             j = Math.max(j + 1, t + k + 1);
//         } else {
//             j = j + k + 1;
//         }
//     }
//     return s.substring(i, n);
// };

// var answerString = function (word, numFriends) {
//     if (numFriends === 1) {
//         return word;
//     }
//     let last = lastSubstring(word);
//     let n = word.length,
//         m = last.length;
//     return last.substring(0, Math.min(m, n - numFriends + 1));
// };

/**
 * @param {string} word
 * @param {number} numFriends
 * @return {string}
 */
var answerString = function(word, numFriends) {
    if (numFriends === 1) {
        return word
    }
    let n = word.length
    let res = ""

    for (let i = 0; i < n; i++) {
        let s = word.substring(i, Math.min(i + n - numFriends + 1, n))
        if (s > res) {
            res = s
        }
    }
    return res
};