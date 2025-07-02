/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */


// Quick Intuition:
// Use a dummy (sentinel) node to handle edge cases cleanly (like removing the head node).
// Traverse the list with a pointer (`prev`) and skip nodes whose value matches `val`.
// ime: O(n), Space: O(1) — single pass through the list, no extra memory used apart from the dummy node.


var removeElements = function(head, val) {
    let sentinel = new ListNode() // sentinel is dummy node
    sentinel.next = head // dont forget to add sentinel to head
    let prev = sentinel
    while(prev && prev.next){
        if(prev.next.val == val){
            prev.next = prev.next.next
        } else {
            prev = prev.next
        }
    }
    return sentinel.next
};