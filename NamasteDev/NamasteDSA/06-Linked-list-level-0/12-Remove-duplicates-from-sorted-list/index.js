// given head of sorted linked list, remove duplicates
// return head

// approach:
// iterate through the list with curr pointer
// check if curr.val === curr.next.val
// if yes, skip the node by curr.next = curr.next.next
// else, curr = curr.next

function removeDuplicates(head) {
  let curr = head;
  while (curr !== null && curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

// time complexity: O(n)
// space complexity: O(1)