/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let len = s.length;
    let answer = '';

    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            let tempAnswer = '';
            for (let k = 0; k <= j - i; k++) {
                if (s[i + k] === s[j - k]) {
                    tempAnswer += s[i + k];
                } else {
                    tempAnswer = '';
                    break;
                }
            }
            if (tempAnswer.length > answer.length) {
                answer = tempAnswer;
            }
        }
    }

    return answer;
};