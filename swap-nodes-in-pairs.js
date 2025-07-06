/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // Empty or One
    if (!head?.next) {
        return head
    }

    // Need to swap head separately
    let next = head.next.next
    let curr = head
    head = head.next
    head.next = curr
    curr.next = next

    while (curr.next) {
        // Two more nodes exist
        if (curr.next.next !== null) {
            // i + 3 node
            const nextOfNext = curr.next.next.next
            // i + 2 node
            next = curr.next.next
            // i + 1 node
            const swap = curr.next
            
            // Swap i + 1 and i + 2 
            curr.next = next
            next.next = swap

            // Set next of swapped i + 2 to i + 3
            swap.next = nextOfNext

            // Move curr to i + 2
            curr = swap

        // Less than two nodes exists
        } else {
            curr = curr.next
        }
    }

    return head
};