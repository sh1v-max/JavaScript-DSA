// write a function to reverse a linked list

// approach:
// as we can only move forward in linked list
// we'll use three pointer, prev, curr, and temp
// do these until curr is null
// point curr to prev and move prev and curr a step forward
// also store the temp to maintain link
// return prev as new head

function reverseLinkedList(head) {
  let prev = null // Initialize prev to null as it will become the new tail
  let curr = head // Start with the head of the list

  // Traverse the list
  while (curr !== null) {
    // core logic, create temp the next node
    // curr.next -> prev, prev -> curr, curr-> temp
    let temp = curr.next // Store the next node
    curr.next = prev // Reverse the current node's pointer
    prev = curr // Move prev to current node
    curr = temp // Proceed to the next node
  }

  head = prev // Update head to the new front of the list
  return head
}

// time complexity: O(n)
// space complexity: O(1)
