// you're given the heads of two sorted linked lists list1 and list2.
// merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// return the head of the merged linked list

// approach:
// use two pointers to track the current nodes in both lists
// compare the values of the current nodes and add the smaller one to the result list
// move the pointer of the list with the smaller value to the next node

// without dummy node
function mergeTwoLists(l1, l2){
  // corner case, if any of list is empty
  if(!l1) return l2
  if(!l2) return l1

  // comparing the val to get the curr, to start with
  let curr = null
  if(l1.val < l2.val){
    curr = l1
    l1 = l1.next
  }else {
    curr = l2
    l2 = l2.next
  }

  // curr is our head now
  let head = curr
  // note:
  // loops runs as long as both l1, and l2 and not null
  while (l1 !== null && l2 !== null){
    if(l1.val < l2.val){
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }

  // moving curr to the next node
  if(!l1){
    curr.next = l2
  }
  if(!l2){
    curr.next = l1
  }

  return head
}

// time complexity: O(n)
// space complexity: O(1)


// or:
// use a dummy node to handle edge cases
// use a pointer to track the current node in the result list
// compare the values of the current nodes in both lists and add the smaller one to the result list
// move the pointer of the list with the smaller value to the next node
// and once the list with the smaller value is empty, add the remaining nodes of the other list to the result list
// return the merged list as dummy.next

function mergeTwoLists1(l1, l2){
  // corner case, if any of list is empty
  // if(!l1) return l2
  // if(!l2) return l1

  // comparing the val to get the curr, to start with
  // let curr = null
  // if(l1.val < l2.val){
  //   curr = l1
  //   l1 = l1.next
  // }else {
  //   curr = l2
  //   l2 = l2.next
  // }
  
  let dummy = new ListNode()
  let curr = dummy
  // now, after creating dummy node we can run while loop
  // we don't need to compare to get smaller value 

  // note:
  // loops runs as long as both l1, and l2 and not null
  while (l1 !== null && l2 !== null){
    if(l1.val < l2.val){
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }
    curr = curr.next
  }

  // moving curr to the next node
  if(!l1){
    curr.next = l2
  }
  if(!l2){
    curr.next = l1
  }

  return dummy.next
}

// time complexity: O(n)
// space complexity: O(1)