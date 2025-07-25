/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// intuitiong
// find the middle using slow and fast approach
// reverse the second half using temp variable
// compare corresponding element in first and second half
 
var isPalindrome = function (head) {
  if (!head || !head.next) return true //checking the corner case

  // Step 1: Find middle using slow and fast pointers
  let slow = head,
      fast = head
  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
  }

  // Step 2: Reverse the second half
  let prev = null,
      curr = slow
  while (curr) {
      let nextTemp = curr.next
      curr.next = prev
      prev = curr
      curr = nextTemp
  }

  // Step 3: Compare first and second half
  let first = head,
      second = prev
  while (second) {
      if (first.val !== second.val) return false
      first = first.next
      second = second.next
  }

  return true
};