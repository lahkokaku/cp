/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
    this.nums1 = nums1
    this.nums2 = nums2
    this.nums2Map = new Map()
    for (let i = 0; i < this.nums2.length; i++) {
        if (this.nums2Map.has(this.nums2[i])) {
            this.nums2Map.get(this.nums2[i]).push(i)
        } else {
            this.nums2Map.set(this.nums2[i], [i])
        }
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
    const key = this.nums2[index]
    const arr = this.nums2Map.get(key)
    arr.splice(arr.indexOf(index), 1)
    const newVal = key + val
    if (this.nums2Map.has(newVal)) {
        this.nums2Map.get(newVal).push(index)
    } else {
        this.nums2Map.set(newVal, [index])
    }
    this.nums2[index] = newVal
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
    let res = 0
    for (let i = 0; i < this.nums1.length; i++) {
        const complement = tot - this.nums1[i]
        if (this.nums2Map.has(complement)) {
            res += this.nums2Map.get(complement).length
        }
    }

    return res
};

/** 
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */