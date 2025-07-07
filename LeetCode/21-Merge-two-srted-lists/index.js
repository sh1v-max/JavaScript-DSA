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

// approach 2: using dummy node
// use a dummy node to handle edge cases
// use a pointer to track the current node in the result list
// compare the values of the current nodes in both lists and add the smaller one to the result list
// move the pointer of the list with the smaller value to the next node
// and once the list with the smaller value is empty, add the remaining nodes of the other list to the result list
// return the merged list as dummy.next


var mergeTwoLists = function (list1, list2) {
    let dummy = new ListNode()
    let curr = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }

    if (!list1) {
        curr.next = list2
    }
    if (!list2) {
        curr.next = list1
    }

    return dummy.next
};