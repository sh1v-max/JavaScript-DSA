/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// approach:
// find the length of the list
// find the kth node from the end of the list
// adjust k using modulo operation with the length of the list. k % length
// and then we will use first and second pointer
// move second to the kth node
// update the next pointer of the kth node to null
// update the next pointer of the last node to the head

var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let len = 0;
  let curr = head;
  while (curr) {
      len++;
      curr = curr.next;
  }

  k = k % len
  if (k === 0) return head
  let f = head
  let s = head
  for (let i = 0; i < k; i++) {
      s = s.next
  }

  while (s.next) {
      f = f.next
      s = s.next
  }

  let newHead = f.next;
  s.next = head;
  f.next = null;
  return newHead
};