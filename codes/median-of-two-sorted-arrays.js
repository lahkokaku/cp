/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let array = [...nums1, ...nums2]
    array.sort((a,b) => a - b)
    let len = array.length

    let res
    if (len % 2 != 0) {
      res = array[Math.floor(len/2)]
    } else {
      res = (array[(len/2)-1] + array[(len/2)]) / 2
    }
    
    return res
}