//  find the middle node of a singly linked list

// defining node and linked list
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Build: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);


// using array method

function findMiddleByArray(head) {
  const nodes = [];
  let current = head;

  while (current !== null) {
    nodes.push(current.val);
    current = current.next;
  }

  const midIndex = Math.floor(nodes.length / 2);
  return nodes[midIndex];
}

// time complexity: O(n)
// space complexity: O(n)


// using fast and slow pointer
// this is more efficient

function findMiddleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

console.log(findMiddleNode(head)); // Output: 3


// time complexity: O(n)
// space complexity: O(1) (no extra space in order of n)