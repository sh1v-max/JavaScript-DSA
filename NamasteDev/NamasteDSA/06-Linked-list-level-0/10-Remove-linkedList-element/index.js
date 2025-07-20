//  function to remove element from linked list

// approach:
// create a sentinel/dummy node before head
// iterate through the list
// skip any node whose value matches val
// return the next of sentinel as the new head

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