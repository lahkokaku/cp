/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let delayed = head
    let curr = head

    for (let i = 0; i < n; i++) {
        curr = curr.next
    }
    
    if (!curr) {
        head = delayed.next
        return head
    }

    while (curr.next) {
        delayed = delayed.next
        curr = curr.next
    }

    let toBeDeleted = delayed.next

    if (toBeDeleted) {
        if (toBeDeleted.next) {
            const temp = toBeDeleted.next
            delayed.next = temp
            toBeDeleted = null
        } else {
            delayed.next = null
        }
    } else {
        head = null
    }


    return head
};

const node3 = new ListNode(3, null)
const node2 = new ListNode(2, node3)
const node1 = new ListNode(1, node2)
console.log(removeNthFromEnd(node1, 2))