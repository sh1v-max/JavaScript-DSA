// given a linked list, swap every two adjacent nodes and return head

// approach:
// use a dummy node before the head
// use two pointers, one for the current node and one for the next node
// swap the values of the current node and the next node
// use the dummy node to maintain the structure of the linked list
//iterate through the list with curr, next and dummy pointer
// stop wen curr.next or next.next is null

function swapPairs(head) {
  if(!head || !head.next) {
    return head
  }
  let dummy = new ListNode()
  dummy.next = head

  let prev = dummy
  let c = head
  let n = head.next

  while(c && n){
    // order matters
    prev.next = n
    c.next = n.next
    n.next = c

    // move pointers
    prev = c
    c = prev.next
    // if condition to handle last case
    if(c) {
      n = c.next
    }
  }

  return dummy.next
}

// time complexity: O(n)
// space complexity: O(1)