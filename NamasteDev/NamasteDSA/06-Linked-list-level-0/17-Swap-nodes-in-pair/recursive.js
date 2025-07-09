// given a linked list, swap every two adjacent nodes and return head
// using recursion

// approach:
// base case: if head is null or head.next is null, return head
// let l be the first node and r be the second node
// recursive case: swap the values of the current node and the next node
// call recursion on the next node, r.next
// now, set l.next to the result of the recursive call
// and make r point to l
// return r

function swapPairs(head) {
  // checking base case
  if (!head || !head.next) return head;
  let l = head;
  let r = head.next;

  // calling recursion
  l.next = swapPairs(r.next);
  r.next = l;
  return r;
}


// time complexity: O(n)
// space complexity: O(n) (due to recursion stack)