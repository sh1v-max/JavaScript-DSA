## Reversing a Singly Linked List (Iterative Approach)

### Function: `reverse()`

We’ll add this method to your `MyLinkedList` class.

### Goal:

Turn this → `10 → 20 → 30 → null`
Into this → `30 → 20 → 10 → null`

### Code with Comments:

```js
MyLinkedList.prototype.reverse = function () {
  let prev = null;
  let current = this.head;

  while (current !== null) {
    const nextNode = current.next; // Temporarily store next node
    current.next = prev;           // Reverse the pointer
    prev = current;                // Move prev to current node
    current = nextNode;            // Move to next node
  }

  this.head = prev; // Update head to the new first node
};
```

### Logic Step-by-Step:

1. Start with two pointers: `prev = null` and `current = head`.
2. In each iteration:

   * Save the next node (`nextNode = current.next`)
   * Reverse the current node’s link (`current.next = prev`)
   * Move `prev` and `current` one step forward
3. After the loop, `prev` will be the new head.

### Example:

```js
const list = new MyLinkedList();
list.addAtTail(10);
list.addAtTail(20);
list.addAtTail(30);
// List: 10 → 20 → 30

list.reverse();
// Now: 30 → 20 → 10
```

You can print it to check:

```js
let curr = list.head;
while (curr) {
  console.log(curr.val);
  curr = curr.next;
}
```

**Output:**

```
30
20
10
```

### Time & Space Complexity

| Operation | Time | Space |
| --------- | ---- | ----- |
| Reverse   | O(n) | O(1)  |

> Efficient — no extra memory used, and runs in linear time.
