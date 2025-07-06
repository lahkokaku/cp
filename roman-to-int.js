const getRomanDigitValue = romanDigit => {
    switch (romanDigit) {
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000
    }
}

/**
* @param {string} s
* @return {number}
*/
var romanToInt = function (s) {
    let res = 0
    let len = s.length
    //   Old
    //   let flag = null
    //   const toBeSubstractedSingletEnums = {
    //       I: ['V', 'X'],
    //       X: ['L', 'C'],
    //       C: ['D', 'M']
    //   }
    //   for (let i = 0; i < len; i++) {
    //       res += getRomanDigitValue(s[i])
    //       if (flag) {
    //           if (toBeSubstractedSingletEnums[flag].includes(s[i])) {
    //               res -= getRomanDigitValue(flag) * 2
    //               flag = null
    //               continue
    //           }
    //       }
    //       if (Object.keys(toBeSubstractedSingletEnums).includes(s[i])) {
    //           flag = s[i]
    //       }
    //   }
    //   return num

    for (let i = 0; i < len - 1; i++) {
        if (getRomanDigitValue(s[i]) < getRomanDigitValue(s[i + 1])) {
            res -= getRomanDigitValue(s[i])
        } else {
            res += getRomanDigitValue(s[i])
        }
    }

    return res + getRomanDigitValue(s[len - 1])
}

console.log(romanToInt('MCMXCIV'))
// console.log(romanToInt('MDCCCLXXXIV'))