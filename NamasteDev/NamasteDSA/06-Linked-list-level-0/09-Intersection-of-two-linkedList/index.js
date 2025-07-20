// Function to find the intersecting node of two linked lists

// approach one, brute force
// Loop through each node in headA, and for every node, 
// loop through headB to check if any node is the same by reference.

function getIntersectionNode(headA, headB) {
  let currA = headA;

  while (currA) {
    let currB = headB;
    while (currB) {
      if (currA === currB) return currA;
      currB = currB.next;
    }
    currA = currA.next;
  }

  return null;
}

// Time: O(n × m)
// Space: O(1)

// using set
// Store all nodes from headA in a Set (reference, not value)
// Then traverse headB and check if any node exists in the set

function getIntersectionNode(headA, headB) {
  const Store = new Set();

  let currA = headA;
  while (currA) {
    Store.add(currA);
    currA = currA.next;
  }

  let currB = headB;
  while (currB) {
    if (Store.has(currB)) return currB;
    currB = currB.next;
  }

  return null;
}

// Time: O(n + m)
// Space: O(n) for the Set