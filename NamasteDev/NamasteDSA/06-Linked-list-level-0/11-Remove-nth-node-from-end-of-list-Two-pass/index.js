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
  return sentinel.next
}

// approach 2: One-pass algorithm
// using two pointers
// use a dummy node before the head to handle edge cases easily
// move the first pointer n steps ahead
// move both first and second pointer until first reaches the end
// now second is just before the node to be deleted
// use second.next = second.next.next to remove the node

function removeNthFromEnd1 (head, n) {
  // creating the sentinel node
  let sentinel = new ListNode()
  sentinel.next = head
  let first = sentinel

  // moving first n step ahead
  for (let i = 0; i < n; i++){
    first = first.next
  }

  let second = sentinel
  // moving both pointers until first reaches the end
  while (first.next){
    first = first.next
    second = second.next
  }
  // removing the node
  second.next = second.next.next
  return sentinel.next
}

// time complexity: O(n)
// space complexity: O(1)

// more optimized solution
function removeNthFromEnd2 (head, n) {
  let sentinel = new ListNode()
  sentinel.next = head
  // creating first, second and a count variable
  let first = sentinel
  let second = sentinel
  let count = 0
  // doing everything in one loop
  // moving first n step ahead, and only moving second if count is greater than n
  while (first){
      first = first.next
      if (count > n) {
          second = second.next
      }
      count++
  }

  second.next = second.next.next
  return sentinel.next
}

// time complexity: O(n)
// space complexity: O(1)