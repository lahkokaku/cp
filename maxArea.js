const getMin = (a, b) => a < b ? a : b
const getMax = (a, b) => a > b ? a : b

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0
    let leftIndex = 0
    let rightIndex = height.length - 1

    while (leftIndex < rightIndex) {
      let leftHeight = height[leftIndex]
      let rightHeight = height[rightIndex]
      let distance = rightIndex - leftIndex

      let area = distance * getMin(leftHeight, rightHeight)
      res = getMax(res, area)

      if (leftHeight > rightHeight) {
        rightIndex--
      } else {
        leftIndex++
      }
    }

    return res
};

const tc1 = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(tc1))