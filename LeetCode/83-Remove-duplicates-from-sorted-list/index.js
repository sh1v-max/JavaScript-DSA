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

// approach:
// iterate through the list with curr pointer
// check if curr.val === curr.next.val
// if yes, skip the node by curr.next = curr.next.next
// else, curr = curr.next
 
var deleteDuplicates = function (head) {
    let curr = head;
    while (curr !== null && curr.next !== null) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};

// Time complexity: O(n), where n is the number of nodes in the linked list
// Space complexity: O(1)