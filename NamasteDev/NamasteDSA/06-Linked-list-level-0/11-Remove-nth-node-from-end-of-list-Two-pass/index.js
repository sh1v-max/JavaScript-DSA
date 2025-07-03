// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// approach: Two-pass algorithm
// Use a sentinel (dummy) node before the head to simplify edge cases.
// First, calculate the total length of the list.
// Find the previous node of the one to be deleted using the length – n formula.
// Update the links to skip the target node.

function removeNthFromEnd (head, n) {
  // creating a sentinel
  let sentinel = new ListNode ()
  // assigning sentinel to the head, ie first node
  sentinel.next = head
  // finding length
  let length = 0
  while (head){
    length++
    head = head.next
  }
  // prev will start from sentinel
  let prev = sentinel
  // loop till next element
  for (let i = 0; i < length -n; i++){
    prev = prev.next
  }
  // removing the element
  prev.next = prev.next.next
  return sentinel.head
}