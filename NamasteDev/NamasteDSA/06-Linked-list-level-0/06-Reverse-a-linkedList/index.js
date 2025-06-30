// write a function to reverse a linked list

function reverseLinkedList(head) {
  let prev = null; // Initialize prev to null as it will become the new tail
  let curr = head; // Start with the head of the list

  // Traverse the list
  while (curr !== null) {
    let next = curr.next; // Store the next node
    curr.next = prev;     // Reverse the current node's pointer
    prev = curr;          // Move prev to current node
    curr = next;          // Proceed to the next node
  }

  head = prev; // Update head to the new front of the list
  return head;
}

// time complexity: O(n)
// space complexity: O(1)