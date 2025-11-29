/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const mappedNums1 = new Set(nums1)
    const mappedNums2 = new Set(nums2)

    const diffNums1 = new Set()
    const diffNums2 = new Set()

    for (let i = 0; i < nums1.length; i++) {
        if (!mappedNums2.has(nums1[i])) {
            diffNums1.add(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!mappedNums1.has(nums2[i])) {
            diffNums2.add(nums2[i])
        }
    }

    return [
        Array.from(diffNums1),
        Array.from(diffNums2)
    ]
};