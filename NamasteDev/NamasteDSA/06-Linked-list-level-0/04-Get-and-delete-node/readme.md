# Get and Delete Nodes in a Linked List (JavaScript)

We're building on this base:

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


## 1️⃣ `get(index)` – Get Value at Index

### Purpose:

Return the value of the node at a specific index (0-based).

### Code:

```js
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.size) {
    return -1;  // Invalid index
  }

  let current = this.head;
  let i = 0;

  while (i < index) {
    current = current.next;
    i++;
  }

  return current.val;
};
```

### Logic:

* Traverse from the head node.
* Move forward until reaching the `index`.
* Return the `val` at that node.

### Edge Cases:

| Case              | Behavior           |
| ----------------- | ------------------ |
| index < 0         | Invalid, return -1 |
| index ≥ size      | Invalid, return -1 |
| index == 0        | Return head value  |
| index == size - 1 | Return tail value  |

### Example:

```js
const list = new MyLinkedList();
list.insertAtHead(30);
list.insertAtHead(20);
list.insertAtHead(10);  // List: 10 → 20 → 30

console.log(list.get(0)); // 10
console.log(list.get(1)); // 20
console.log(list.get(2)); // 30
console.log(list.get(3)); // -1 (invalid)
```


## 2️⃣ `deleteAtIndex(index)` – Delete Node at Index

### Purpose:

Remove the node at the given index. Requires pointer updates to unlink the node.

### Code:

```js
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index < 0 || index >= this.size) {
    return;  // Invalid index, do nothing
  }

  if (index === 0) {
    this.head = this.head.next;  // Move head forward
  } else {
    let current = this.head;
    let previous = null;
    let i = 0;

    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = current.next;  // Unlink the node
  }

  this.size--;
};
```

### Logic:

* If index is `0`, remove the head by pointing `this.head` to the next node.
* Otherwise, traverse to the node before the target (index - 1), and set `previous.next = current.next`.

### Edge Cases:

| Case                | Behavior                                  |
| ------------------- | ----------------------------------------- |
| index < 0 or ≥ size | Do nothing                                |
| index == 0          | Remove head node                          |
| index == size - 1   | Remove tail node (no tail reference here) |
| index in middle     | Unlink the node at that position          |

### Example:

```js
const list = new MyLinkedList();
list.insertAtTail(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.insertAtTail(40); // List: 10 → 20 → 30 → 40

list.deleteAtIndex(2); // Remove 30 → 10 → 20 → 40
list.deleteAtIndex(0); // Remove 10 → 20 → 40

console.log(list.get(0)); // 20
console.log(list.get(1)); // 40
```


## Sample Test Code (Combined)

```js
const list = new MyLinkedList();

list.insertAtTail(100);
list.insertAtTail(200);
list.insertAtTail(300);
list.insertAtTail(400);
// List: 100 → 200 → 300 → 400

console.log(list.get(2)); // 300
list.deleteAtIndex(1);    // Delete 200
// Now: 100 → 300 → 400

console.log(list.get(1)); // 300
console.log(list.get(2)); // 400
console.log(list.get(3)); // -1
```


## Time & Space Complexity

| Operation         | Time | Space |
| ----------------- | ---- | ----- |
| `get(index)`      | O(n) | O(1)  |
| `deleteAtIndex()` | O(n) | O(1)  |

> In both cases, you may have to traverse up to `index` nodes — no shortcut unless you maintain additional references (e.g., tail or cache).


## Summary

| Method                 | Purpose                                                   |
| ---------------------- | --------------------------------------------------------- |
| `get(index)`           | Returns the value at a specific index (or -1 if invalid)  |
| `deleteAtIndex(index)` | Deletes the node at a specific index by updating pointers |
