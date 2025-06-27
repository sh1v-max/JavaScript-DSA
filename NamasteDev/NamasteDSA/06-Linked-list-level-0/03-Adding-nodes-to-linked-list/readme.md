# Inserting Elements in a Linked List (JavaScript)

When working with a **singly linked list**, inserting nodes is a fundamental operation. We'll break it into:

* Inserting at the **head** (beginning)
* Inserting at the **tail** (end)
* Inserting at a **specific index**

All examples are based on the following base structure:

```js
function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}
```


## 🔹 Insert at Head

### Goal:

Insert a node as the **first** node in the list.

### Why?

* It’s the **fastest** insert — requires no traversal.
* Often used in **stacks**, or when new elements should appear first.

### Code:

```js
MyLinkedList.prototype.insertAtHead = function(val) {
  const newNode = new Node(val);  // Create a new node with given value
  newNode.next = this.head;       // Point new node's next to current head
  this.head = newNode;            // Update head to point to new node
  this.size++;                    // Increase the size of the list
};
```

### Example:

* Initial: `null`
* insert(10): `10 → null`
* insert(20): `20 → 10 → null`
* insert(30): `30 → 20 → 10 → null`

### Edge Cases:

* Inserting when list is empty → becomes new head


## 🔹 Insert at Tail

### Goal:

Add a node at the **end** of the list.

### Why?

* Used in **queues**, or when new elements should come last.
* Slower than `insertAtHead` (requires traversal).

### Code:

```js
MyLinkedList.prototype.insertAtTail = function(val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;         // If list is empty, new node is the head
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;    // Traverse to the last node
    }
    current.next = newNode;      // Link the last node to the new node
  }

  this.size++;
};
```

### Example:

* Initial: `null`
* insert(10): `10 → null`
* insert(20): `10 → 20 → null`
* insert(30): `10 → 20 → 30 → null`

### Edge Cases:

* Empty list → node becomes head
* You can optimize this with a `this.tail` pointer (O(1) instead of O(n))


## 🔹 Insert at Specific Index

### Goal:

Insert a node **at a given position** (0-based index).

### Why?

* Gives full control over where data is placed.
* Useful in building editable data structures.

### Code:

```js
MyLinkedList.prototype.insertAtIndex = function(index, val) {
  if (index < 0 || index > this.size) {
    console.log("Invalid index");
    return;
  }

  const newNode = new Node(val);

  if (index === 0) {
    newNode.next = this.head;
    this.head = newNode;
  } else {
    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    newNode.next = current;
    previous.next = newNode;
  }

  this.size++;
};
```

### Breakdown:

* If `index === 0`, behaves like `insertAtHead`.
* If `index === size`, behaves like `insertAtTail`.
* For any index in between:

  * Traverse to `index - 1`
  * Adjust pointers to insert node in the middle

### Example:

Start with: `10 → 30 → null`
Call: `insertAtIndex(1, 20)`
Result: `10 → 20 → 30 → null`

### Edge Cases:

| Case                          | Behavior             |
| ----------------------------- | -------------------- |
| `index === 0`                 | Inserts at head      |
| `index === size`              | Inserts at tail      |
| `index < 0` or `index > size` | Invalid — do nothing |


## Sample Test Code

```js
const list = new MyLinkedList();

list.insertAtHead(20);      // 20
list.insertAtHead(10);      // 10 → 20
list.insertAtTail(40);      // 10 → 20 → 40
list.insertAtIndex(2, 30);  // 10 → 20 → 30 → 40
list.insertAtIndex(0, 5);   // 5 → 10 → 20 → 30 → 40

// Print list
let current = list.head;
while (current) {
  console.log(current.val);
  current = current.next;
}
```

### Output:

```
5
10
20
30
40
```


## Time & Space Complexity

| Operation       | Time | Space |
| --------------- | ---- | ----- |
| Insert at Head  | O(1) | O(1)  |
| Insert at Tail  | O(n) | O(1)  |
| Insert at Index | O(n) | O(1)  |

> You only use constant space for new nodes; no extra memory is used regardless of list size.


## Summary

| Method                  | Use When...                                                   |
| ----------------------- | ------------------------------------------------------------- |
| `insertAtHead(val)`     | You want to prepend data — fastest insert                     |
| `insertAtTail(val)`     | You want to append data — slow unless tail is stored          |
| `insertAtIndex(i, val)` | You need full control of where to insert — requires traversal |

