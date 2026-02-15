## 707. Design Linked List

`Difficulty - Medium 🟡`

### Description

Design your implementation of the **linked list**. You can choose to use a **singly** or **doubly linked list**.

* A **node** in a singly linked list should have two attributes:
  `val` — the value of the current node
  `next` — a pointer/reference to the next node

* If you use a **doubly linked list**, add one more attribute:
  `prev` — pointer/reference to the previous node

Assume all nodes are **0-indexed**.

---

### Implement the `MyLinkedList` class:

* `MyLinkedList()`
  Initializes the `MyLinkedList` object.

* `int get(int index)`
  Get the value of the `index`th node in the linked list. If the index is invalid, return `-1`.

* `void addAtHead(int val)`
  Add a node of value `val` before the first element of the linked list. The new node becomes the first node.

* `void addAtTail(int val)`
  Append a node of value `val` as the last element of the linked list.

* `void addAtIndex(int index, int val)`
  Add a node of value `val` before the `index`th node.
  If `index` == length of the list, append to end.
  If `index` > length, the node will not be inserted.

* `void deleteAtIndex(int index)`
  Delete the `index`th node in the linked list, if the index is valid.

---

### Example 1

**Input:**

```
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
```

**Output:**

```
[null, null, null, null, 2, null, 3]
```

**Explanation:**

```
MyLinkedList myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);           // List: 1
myLinkedList.addAtTail(3);           // List: 1 → 3
myLinkedList.addAtIndex(1, 2);       // List: 1 → 2 → 3
myLinkedList.get(1);                 // returns 2
myLinkedList.deleteAtIndex(1);       // List: 1 → 3
myLinkedList.get(1);                 // returns 3
```

---

### Constraints

* `0 <= index, val <= 1000`
* Do **not** use built-in `LinkedList` library
* At most **2000** calls to any method will be made

---

Let me know if you want the full implementation in Python or JavaScript.
