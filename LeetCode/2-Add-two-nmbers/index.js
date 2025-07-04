/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// approach:
// use two pointers to track the sum and carry
// use a dummy node to handle edge cases, and build the result list
// traverse both lists simultaneously, adding the digits and the carry
// create a new node with sum % 10, ad update carry to sum / 10
// continue until both lists are empty or carry is null/0


var addTwoNumbers = function (l1, l2) {
  // create a dummy node to handle edge cases, and build the result list
  let dummy = new ListNode(0);
  let curr = dummy;
  let carry = 0;

  // traverse both lists simultaneously, adding the digits and the carry
  while (l1 || l2 || carry) {
      let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      carry = Math.floor(sum / 10);
      let digit = sum % 10;

      let node = new ListNode(digit);
      dummy.next = node
      dummy = dummy.next

      l1 = l1 && l1.next
      l2 = l2 && l2.next
  }

  return curr.next;
};


// time complexity: O(n), where n is the length of the longest list
// space complexity: O(n), where n is the length of the longest list