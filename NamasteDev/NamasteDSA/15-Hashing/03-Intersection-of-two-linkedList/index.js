// Function to find the intersecting node of two linked lists

// approach one, brute force
// Loop through each node in headA, and for every node,
// loop through headB to check if any node is the same by reference.

function getIntersectionNode(headA, headB) {
  let currA = headA

  while (currA) {
    let currB = headB
    while (currB) {
      if (currA === currB) return currA
      currB = currB.next
    }
    currA = currA.next
  }
  return null
}

// Time: O(n × m)
// Space: O(1)

// using set
// intuition:
// we need to find the intersection node of two singly linked lists
// - intersection means both lists share the same node reference
// - idea: store all nodes of list A in a set for quick lookup
// - then traverse list B and check if any node exists in the set
// - the first node from list B that exists in the set is the intersection
// - if no node from list B is in the set → return null (no intersection)

// approach:
// create an empty set
// traverse listA and add each node to the set
// traverse listB and for each node:
// - if node exists in set → return node (intersection found)
// if traversal ends → return null (no intersection)

function getIntersectionNode(headA, headB) {
  const Store = new Set()

  let currA = headA
  while (currA) {
    Store.add(currA)
    currA = currA.next
  }

  let currB = headB
  while (currB) {
    if (Store.has(currB)) return currB
    currB = currB.next
  }

  return null
}

// Time: O(n + m)
// Space: O(n) for the Set

// intuition: using two pointer
// we need to find the node where two singly linked lists intersect
// - intersection means the two lists share the same node reference (not just value)
// - a simple trick: use two pointers, one for each list, and traverse them
// - when a pointer reaches the end of its list, redirect it to the head of the other list
// - by doing this, both pointers traverse the same total distance (lengthA + lengthB)
// - if the lists intersect, the pointers will meet at the intersection node
// - if the lists do not intersect, both pointers will eventually become null at the same time

// approach:
// initialize two pointers pA and pB at headA and headB
// iterate while pA != pB:
// - move pA to next node, or if pA is null, redirect to headB
// - move pB to next node, or if pB is null, redirect to headA
// when pA == pB, it could be either:
// - the intersection node → return pA
// - or null → no intersection → return null

var getIntersectionNode = function (headA, headB) {
  let pA = headA
  let pB = headB

  while (pA != pB) {
    pA = pA == null ? headB : pA.next
    pB = pB == null ? headA : pB.next
  }
  return pA
}

// time complexity: O(m + n) → each pointer traverses each list at most once
// space complexity: O(1) → no extra data structures used
