# Linked List in JavaScript (Beginner to Advanced)

## What is a Linked List?

A **Linked List** is a linear data structure where elements are stored in **nodes**, and each node points to the next node using a reference (or pointer). Unlike arrays, linked lists don’t store elements in contiguous memory, which means:

* They can grow/shrink dynamically.
* Insertions and deletions are efficient.
* But accessing a node is not instant (no index-based access).


## Node Structure (Singly Linked List)

Every node contains:

* `data`: the actual value
* `next`: a pointer to the next node

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

### Explanation:

* `this.data = data` sets the value stored in the node.
* `this.next = null` means it initially doesn’t point to any next node.


## Creating a Basic Linked List

```js
class LinkedList {
  constructor() {
    this.head = null;
  }
}
```

* The `head` is the starting point of the list. If `head === null`, the list is empty.


## Inserting a Node at the End

```js
insert(data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let current = this.head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
}
```

### Explanation:

* If `head` is null, we’re inserting into an empty list.
* Otherwise, we traverse to the end using `while (current.next !== null)` and attach the new node there.


## Inserting a Node at the Beginning

```js
insertAtHead(data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
}
```

### Why this is O(1):

* We don’t loop through the list.
* Just update `newNode.next` to the current head, then reassign head.


## Traversing the List (Print All Elements)

```js
printList() {
  let current = this.head;
  let result = '';
  while (current !== null) {
    result += current.data + ' -> ';
    current = current.next;
  }
  console.log(result + 'null');
}
```

### Output:

For list: `1 -> 2 -> 3 -> null`


## Deleting a Node by Value

```js
delete(data) {
  if (!this.head) return;

  if (this.head.data === data) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next && current.next.data !== data) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next;
  }
}
```

### What’s Happening:

* Check if head is the target node.
* If not, loop through until you find the node whose `.next.data` matches the target.
* Bypass the node by setting `current.next = current.next.next`.


## Reversing a Linked List (Iterative)

```js
reverse() {
  let prev = null;
  let current = this.head;

  while (current) {
    let next = current.next;   // Store reference to next node
    current.next = prev;       // Reverse the pointer
    prev = current;            // Move prev forward
    current = next;            // Move current forward
  }

  this.head = prev;
}
```

### Dry Run (List: 1 → 2 → 3 → null):

After first iteration:

* 1 → null
  After second:
* 2 → 1 → null
  And finally:
* 3 → 2 → 1 → null


## Finding the Middle Node

```js
findMiddle() {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}
```

### Two Pointer Technique:

* `slow` moves 1 step at a time.
* `fast` moves 2 steps.
* When `fast` reaches end, `slow` is at the middle.


## Detecting a Cycle (Floyd’s Cycle Detection)

```js
hasCycle() {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
```

### Intuition:

If there's a loop, `fast` will eventually "lap" `slow`, and they’ll meet. If there’s no loop, `fast` will reach null.


## Removing N-th Node from End

```js
removeNthFromEnd(n) {
  const dummy = new Node(0);
  dummy.next = this.head;

  let fast = dummy;
  let slow = dummy;

  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  this.head = dummy.next;
}
```

### How it works:

* Create a gap of `n` between `fast` and `slow`.
* When `fast` hits end, `slow` is right before the node to remove.


## Merge Two Sorted Linked Lists

```js
function mergeLists(l1, l2) {
  let dummy = new Node(-1);
  let current = dummy;

  while (l1 && l2) {
    if (l1.data < l2.data) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;
  return dummy.next;
}
```

### Merge Strategy:

* Use a dummy node to simplify pointer juggling.
* Always point `current.next` to the smaller node.
* At the end, append whichever list still has nodes left.


## Time and Space Complexity Summary

| Operation              | Time | Space |
| ---------------------- | ---- | ----- |
| Insert at Head         | O(1) | O(1)  |
| Insert at Tail         | O(n) | O(1)  |
| Delete by Value        | O(n) | O(1)  |
| Search                 | O(n) | O(1)  |
| Reverse                | O(n) | O(1)  |
| Find Middle            | O(n) | O(1)  |
| Detect Cycle           | O(n) | O(1)  |
| Merge Two Sorted Lists | O(n) | O(1)  |


## Key Takeaways

* Linked Lists are a pointer-based structure ideal for dynamic memory.
* Efficient for frequent insertions/deletions, but not for indexed access.
* Mastering them is critical for interviews and leads into trees, stacks, queues, and graphs.
* Start with basic operations → pointer manipulation → two-pointer patterns → recursion-based problems.

