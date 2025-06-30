/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// using set
var hasCycle = function (head) {
  let set = new Set();
  let curr = head
  while (curr) {
      if (set.has(curr)) return true;
      set.add(curr);
      curr = curr.next;
  }
  return false;
};