```js
// Node constructor function to create a single node of the linked list
function Node(val) {
  this.val = val;     // Store the value/data in the node
  this.next = null;   // Initially, the next pointer is null (no next node)
}

// Custom Linked List class constructor
function MyLinkedList() {
  this.head = null;   // Start of the linked list; initially empty
  this.size = 0;      // Tracks how many nodes are in the list
}

// Creating an instance of the LinkedList
const list = new MyLinkedList();

// Creating individual nodes manually
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Linking the nodes together
node1.next = node2;   // 10 → 20
node2.next = node3;   // 20 → 30

// Assign the first node to the list's head and update the size
list.head = node1;    // Head now points to node with value 10
list.size = 3;        // Total of 3 nodes in the list

// Traverse and print all node values in the list
let current = list.head;
while (current) {
  console.log(current.val);  // Prints: 10, 20, 30
  current = current.next;    // Move to the next node
}
```

---

### Summary of Design:

* You defined a basic `Node` structure with `val` and `next`.
* Built a `MyLinkedList` class that maintains the `head` and `size`.
* Manually created and linked 3 nodes: `10 -> 20 -> 30`.
* Set the `head` to the first node and updated size.
* Finally, traversed the list and printed each node’s value.
