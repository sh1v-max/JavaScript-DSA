// given the head, rotate the list to the right by k places

// approach:
// find the length of the list
// find the kth node from the end of the list
// adjust k using modulo operation with the length of the list. k % length
// and then we will use first and second pointer
// move second to the kth node
// update the next pointer of the kth node to null
// update the next pointer of the last node to the head

function rotateRight(head, k) {
  if (!head || !head.next) return head

  // find the length of the list
  let len = 0
  let curr = head
  while (curr) {
    len++
    curr = curr.next
  }

  k = k % len
  if (k === 0) return head

  // using first and second pointer
  let f = head
  let s = head
  // moving second k % length step ahead
  for (let i = 0; i < k; i++) {
    s = s.next
  }

  while (s.next) {
    f = f.next
    s = s.next
  }

  // remember to create new hear first, or it won't link
  let newHead = f.next // new head
  s.next = head // connect end to start
  f.next = null // break link

  return newHead
}
