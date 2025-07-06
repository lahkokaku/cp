/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
      return []
    }
    const digitToLetters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    const res = []

    const findAllCombination = (index, combination) => {
      if (index === digits.length) {
        res.push(combination)
        return
      }

      const currLetters = digitToLetters[digits.charAt(index)]
      for (let i = 0; i < currLetters.length; i++) {
        findAllCombination(index + 1, combination + currLetters[i])
      } 
    }

    findAllCombination(0, "")

    return res
};

console.log(letterCombinations('23'))