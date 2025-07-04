// head is given, group all the nodes with odd together, followed by
// the nodes with even index together
// return the head of the new linked list

// approach:
// use two pointers to track the odd and even nodes
// also store reference to evenHead so that we can attach it to the end of the odd list
// link odd nodes together and even nodes together
// link the last odd node to the head of the even nodes

var oddEvenList = function(head) {
  // check if the list is empty or have one node
  // return the head, because no need to do anything
  if (!head || !head.next) return head;
  let odd = head;
  let even  = head.next
  // maintaining another copy of even, so that we can attach it to the end
  let evenHead = even
  
  // loop until the end of the list, either the last even node, or next to it is null
  while(even && even.next){
    odd.next = odd.next.next
    even.next = even.next.next
    // update the pointers
    odd = odd.next
    even = even.next
  }

  // link the last odd node to the head of the even node, evenHead
  odd.next = evenHead
  return head
};



// Time: O(n)
// Space: O(1)