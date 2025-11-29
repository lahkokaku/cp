/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    const triangleTypes = {
        equilateral: 'equilateral',
        isosceles: 'isosceles',
        scalene: 'scalene'
    }

    const sortedNums = nums.toSorted((a, b) => a - b)

    if (sortedNums[0] === sortedNums[1] && sortedNums[1] === sortedNums[2]) {
        return triangleTypes.equilateral
    }
    if (sortedNums[2] >= sortedNums[0] + sortedNums[1]) {
        return 'none'
    }
    if (sortedNums[0] === sortedNums[1] || sortedNums[1] === sortedNums[2]) {
        return triangleTypes.isosceles
    }
    return triangleTypes.scalene
};

console.log(triangleType([10, 4, 6]))