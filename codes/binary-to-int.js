/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    // Two Pass
    // let curr = head
    // let temp = ""
    // while (curr) {
    //     temp += curr.val
    //     curr = curr.next
    // }
    // const len = temp.length
    // let res = 0
    // for (let i = len - 1; i >= 0; i--) {
    //     res = res * 2 + parseInt(temp[i]) 
    // }
    // return res

    // One Pass
    let curr = head
    let res = 0
    while (curr) {
        res = (res << 1) + curr.val
        curr = curr.next
    }

    return res
};