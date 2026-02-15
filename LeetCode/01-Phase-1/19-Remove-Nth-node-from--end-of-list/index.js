/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// approach: Two-pass algorithm
// Use a sentinel (dummy) node before the head to simplify edge cases.
// Calculate the total length of the list.
// Find the previous node of the one to be deleted using the length – n formula.
// Update the links to skip the target node.
 
var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode()
    sentinel.next = head
    let length = 0
    while (head) {
        length++
        head = head.next
    }
    let prev = sentinel
    for (let i = 0; i < length - n; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next
    return sentinel.next
};

// time complexity: O(n)
// space complexity: O(1)