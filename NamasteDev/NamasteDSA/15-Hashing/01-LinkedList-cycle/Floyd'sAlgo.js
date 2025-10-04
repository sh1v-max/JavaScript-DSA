// Using floyd's cycle finding algorithm
// Also called tortoise and hare algo
// using two pointers, slow and fast
// if there's a cycle, they'll eventually meet
// if fast or fast.next become null, there's no cycle

function hasCycle(head) {
  if(!head) return false;
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Time complexity: O(n)
// Space complexity: O(1)