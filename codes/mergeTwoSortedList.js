/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    if (!list1 && !list2) {
        return list1
    }

    let head = new ListNode(0, null)
    let curr = head

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            curr.val = list1.val
            list1 = list1.next
        } else {
            curr.val = list2.val
            list2 = list2.next
        }

        if (list1 || list2) {
            curr.next = new ListNode()
            curr = curr.next
        }
    }

    while (list1) {
        curr.val = list1.val
        list1 = list1.next
        if (list1) {
            curr.next = new ListNode()
            curr = curr.next
        }
    }
    while (list2) {
        curr.val = list2.val
        list2 = list2.next
        if (list2) {
            curr.next = new ListNode()
            curr = curr.next
        }
    }

    return head
};