// Using floyd's cycle finding algorithm
// Also called slow and fast pointer approach

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