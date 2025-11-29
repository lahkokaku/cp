const getRomanDigit = (value, power) => {
  switch (value) {
    case 1:
      switch (power) {
        case 1:
          return 'I'
        case 10:
          return 'X'
        case 100:
          return 'C'
        case 1000:
          return 'M'
      }
    case 5:
      switch (power) {
        case 1:
          return 'V'
        case 10:
          return 'L'
        case 100:
          return 'D'
      }
  }
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romanNum = ''
  let power = 1

  while (num > 0) {
    let currDigit = num % 10
    let currRomanDigit = ""

    if (currDigit === 9) {
      currRomanDigit = getRomanDigit(1, power) + getRomanDigit(1, power * 10)
      currDigit = 0
    }
    if (currDigit > 3) { // 4 5 6 7 8
      currRomanDigit += getRomanDigit(5, power)
      currDigit -= 5
    }
    if (currDigit < 0) { // 4 - 5 = -1
      currRomanDigit = getRomanDigit(1, power) + currRomanDigit
    }
    while (currDigit > 0) { // 1 2 3
      currRomanDigit += getRomanDigit(1, power)
      currDigit--
    }

    romanNum = currRomanDigit + romanNum
    num = parseInt(num / 10)
    power *= 10
  }

  return romanNum
}

console.log(intToRoman(49))
