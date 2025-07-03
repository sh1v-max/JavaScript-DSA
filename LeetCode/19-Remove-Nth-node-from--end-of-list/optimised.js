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

// approach 2: One-pass algorithm
// using two pointers
// use a dummy node before the head to handle edge cases easily
// move the first pointer n steps ahead
// move both first and second pointer until first reaches the end
// now second is just before the node to be deleted
// use second.next = second.next.next to remove the node

// hint: think of using a count variable

var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode()
  sentinel.next = head
  // creating first, second and a count variable
  let first = sentinel
  let second = sentinel
  let count = 0
  // doing everything in one loop
  // moving first n step ahead, and only moving second if count is greater than n
  while (first) {
      first = first.next
      if (count > n) {
          second = second.next
      }
      count++
  }

  second.next = second.next.next
  return sentinel.next
};

// time complexity: O(n)
// space complexity: O(1)