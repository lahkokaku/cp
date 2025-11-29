// Difficulty: Medium
// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    const toBeRemoved = new Set(nums)

    let curr = head
    let prev = head

    while (curr) {
        if (toBeRemoved.has(curr.val)) {
            if (curr === head) {
                head = curr.next
            }
            prev.next = curr.next
        } else {
            prev = curr
        }
        curr = curr.next
    }

    return head
};