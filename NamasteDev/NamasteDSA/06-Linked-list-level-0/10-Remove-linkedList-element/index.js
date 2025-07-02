//  function to remove element from linked list

// intuition: create a sentinel node and traverse the linked list, 
// if the current node's value is equal to the given value, 
// remove it by skipping it, else move to the next node

function removeElement(head, val) {
  const sentinel = new ListNode(null);
  sentinel.next = head;
  let current = sentinel;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return sentinel.next;
}

// Time complexity: O(n)
// Space complexity: O(1)