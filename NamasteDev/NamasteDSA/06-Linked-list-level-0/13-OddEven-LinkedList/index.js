// head is given, group all the nodes with odd together, followed by
// the nodes with even index together
// return the head of the new linked list

// approach:
// use two pointers to track the odd and even nodes
// also store reference to evenHead so that we can attach it to the end of the odd list
// link odd nodes together and even nodes together
// link the last odd node to the head of the even nodes

var oddEvenList = function(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even  = head.next
  let evenHead = even
  
  while(even && even.next){
    odd.next = odd.next.next
    even.next = even.next.next
    odd = odd.next
    even = even.next
  }

  odd.next = evenHead
  return head
};



// Time: O(n)
// Space: O(1)