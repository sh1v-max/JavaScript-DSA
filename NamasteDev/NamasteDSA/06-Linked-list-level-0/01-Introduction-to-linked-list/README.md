# Linked List – Quick Notes

### 🔹 What is a Linked List?

A **Linked List** is a linear data structure where each element (node) contains:

* A **value** (data)
* A **pointer** to the next node (and optionally to the previous node)

Unlike arrays, elements are not stored in contiguous memory — each node is connected using references.


### 🔹 Types of Linked Lists

**1. Singly Linked List**

* Each node has: `value` and `next`
* Moves only forward
* Structure: `[value | next] -> [value | next] -> null`

**2. Doubly Linked List**

* Each node has: `value`, `next`, and `prev`
* Allows forward and backward traversal
* Structure: `null <- [prev | value | next] <-> ... -> null`


### 🔹 Key Terminology

* **Head**: First node of the list
* **Tail**: Last node (points to `null`)
* **Linked List Representation**: Typically starts from the head and is traversed node-by-node


## Arrays vs Linked Lists — At a Glance

| Feature                | Array                               | Linked List                      |
| ---------------------- | ----------------------------------- | -------------------------------- |
| **Type**               | Index-based linear structure        | Node-based linear structure      |
| **Memory Layout**      | Contiguous memory                   | Non-contiguous (scattered)       |
| **Size**               | Fixed or resizing is costly         | Dynamic, easily grows/shrinks    |
| **Access Time**        | O(1) via index                      | O(n), sequential access          |
| **Insertion/Deletion** | Costly in middle (shift required)   | Efficient (pointer change only)  |
| **Memory Use**         | More efficient, no pointer overhead | Less efficient (stores pointers) |


### 🔹 When to Use What?

| Use Case                                 | Prefer          |
| ---------------------------------------- | --------------- |
| Fast access by index                     | **Array**       |
| Frequent inserts/deletes at head/tail    | **Linked List** |
| Fixed-size and memory-sensitive data     | **Array**       |
| Unknown or dynamic size                  | **Linked List** |
| Lots of structure manipulation/traversal | **Linked List** |

