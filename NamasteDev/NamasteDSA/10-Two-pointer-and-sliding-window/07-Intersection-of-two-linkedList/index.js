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
// store all nodes from headA in a Set (reference, not value)
// then traverse headB and check if any node exists in the set

function getIntersectionNode(headA, headB) {
  const Store = new Set()

  while (headA) {
    Store.add(headA)
    headA = headA.next
  }

  while (headB) {
    if (Store.has(headB)) {
      return headB
    }
    headB = headB.next
  }

  return null
}

// Time: O(n + m)
// Space: O(n) for the Set

// optimized approach: length difference approach, using two pointer

// intuition
// the part after intersection is the same for both
// difference will be extra nodes before the intersection
// so we can skip the difference, not both will be of same length, and traverse using two pointer
// the first common node will be the intersection

// approach:
// find the length of the two linked lists
// if the length of the any list is greater than, then move the pointer of the longer list by the difference between the lengths of the two lists
// now traverse and compare the nodes of the two lists

function getIntersectionNode(headA, headB) {
  // length
  let n = 0
  let pA = headA
  while (pA) {
    n++
    pA = pA.next
  }

  let m = 0
  let pB = headB
  while (pB) {
    m++
    pB = pB.next
  }

  // the longer list
  let diff = Math.abs(n - m)
  if (n > m) {
    temp = headA
    headA = headB
    headB = temp
  }

  // move the pointer of the longer list by the diff
  for (let i = 0; i < diff; i++) {
    headB = headB.next
  }

  // checking for the first common node
  pA = headA
  pB = headB
  while (pA !== pB) {
    pA = pA.next
    pB = pB.next
  }

  return pA
}

// time: O(n + m)
// space: O(1)

// another approach:

// intuition
// as both have diff length and when we traverse, one the the pointer will reach null before the other

// approach:
// traverse both pointer
// when any of pointer reach to null, redirect it to the other list
// if pA is null, move pA to headB
// if pB is null, move pB to headA
// they point when they both intersect, that will the common node

function getIntersectionNode(headA, headB) {
  let pA = headA
  let pB = headB

  while (pA !== pB) {
    // pA = pA === null ? headB : pA.next
    // pB = pB === null ? headA : pB.next

    if (pA !== null) {
      pA = pA.next
    } else {
      pA = headB
    }

    if (pB !== null) {
      pB = pB.next
    } else {
      pB = headA
    }
  }
}

// time: O(n + m)
// space: O(1)