# Heap in Data Structures

## Introduction to Heaps

A **heap** is a special type of **binary tree** that is used primarily to efficiently find the minimum or maximum element. Heaps are widely used in **priority queues, sorting algorithms, and graph algorithms**.

Heaps are built upon the concept of a **complete binary tree** and maintain the **heap property**.


## Complete Binary Tree (CBT) – Visuals

A **Complete Binary Tree** is filled **level by level**, left to right. Only the last level may be partially filled, but **all nodes are as left as possible**.

### Example 1: Complete Binary Tree

```
Level 0:          1
                 / \
Level 1:       2     3
              / \   /
Level 2:    4   5 6
```

* **Array Representation (0-based index):** `[1, 2, 3, 4, 5, 6]`
* Notice how all levels except the last are completely filled.
* Last level nodes (4,5,6) are filled **from left to right**.


### Example 2: Not a Complete Binary Tree

```
Level 0:          1
                 / \
Level 1:       2     3
              /       \
Level 2:    4         5
```

* **Array Representation (0-based index if treated as CBT):** `[1, 2, 3, 4, #, #, 5]`
* **Problem:** Node `5` has no corresponding left sibling. Last level is **not filled from left**.
* ❌ This is **not a complete binary tree**.


### Key Points to Remember (CBT)

1. All levels are **fully filled**, except possibly the last.
2. Nodes at the last level are as far **left as possible**.
3. Missing nodes **cannot appear in between** nodes at the last level.
4. **Array mapping** is efficient because of the compact layout of CBT.

**Array Mapping Recap (0-based index):**

* **Left child:** `2*i + 1`
* **Right child:** `2*i + 2`
* **Parent:** `Math.floor((i-1)/2)`


### Full Binary Tree vs Complete Binary Tree

* A **Full Binary Tree** has every level completely filled with nodes.
* Every **Full Binary Tree** is also a Complete Binary Tree.
* For a level `n` (starting from 0), the number of nodes should be `2^n`.
* In simpler terms, a Complete Binary Tree looks like a perfectly filled binary tree, except the bottom-most row may have empty spots on the **right side only**.

**Important Points:**

* All levels are fully filled except possibly the last.
* Nodes at the last level are as far **left as possible**.
* No node can exist on the right without a corresponding left node at the same level.

**Practice:** Determine whether a tree is a complete binary tree by checking the above rules.


## Heap Overview

A **heap** is a **complete binary tree** that also satisfies the **heap order property**:

1. **Max-Heap:**
   Parent ≥ Children (root is the maximum element).

2. **Min-Heap:**
   Parent ≤ Children (root is the minimum element).

**All heaps are complete binary trees**, ensuring efficient storage and easy array representation.


## Array Representation of Heap

Heaps are **usually implemented using arrays** for efficiency, though they can also be represented using pointers or references.

* **Root** at index `0`.
* For a node at index `i`:

  * **Left child:** `2*i + 1`
  * **Right child:** `2*i + 2`
  * **Parent:** `Math.floor((i-1)/2)`

### Min-Heap (Array + Binary Tree)

```
Binary Tree:
         10
       /    \
     20      15
    /  \    
  30    25

Array Representation: [10, 20, 15, 30, 25]

heap[0] = 10  // minimum element, O(1)
```

### Max-Heap (Array + Binary Tree)

```
Binary Tree:
         50
       /    \
     30      40
    /  \    
  10    20

Array Representation: [50, 30, 40, 10, 20]

heap[0] = 50  // maximum element, O(1)
```


## Finding Children & Parent

**Formulas (1-based index):**

* Left child = `2 * i`
* Right child = `2 * i + 1`
* Parent = `i / 2` (floor division)

**Formulas (0-based index):**

* Left child = `2*i + 1`
* Right child = `2*i + 2`
* Parent = `Math.floor((i-1)/2)`


## Operations in Heap

### 1. Insert

* Ensure **complete binary tree** structure.
* Maintain **heap property**:

  * Min-Heap: Parent ≤ Children
  * Max-Heap: Parent ≥ Children
* **Heapify-up:** Bubble the inserted element up until the heap property is satisfied.

### 2. Extract / Delete

* Always extract/delete from the **root**.
* Min-Heap: Extract the **minimum** element (`heap[0]`)
* Max-Heap: Extract the **maximum** element (`heap[0]`)
* **Heapify-down:** After removing root, move the last element to root and bubble down to maintain heap property.

### 3. Peek

* Return the element at the root (`heap[0]`) in **O(1)** time.


## Heapify

**Heapify** is the process of rearranging elements to maintain the heap property:

* **Heapify-Up (Insertion):** Move the element up to restore heap property.
* **Heapify-Down (Deletion/Extraction):** Move the element down to restore heap property.

**Example of Heapify-Up in Min-Heap:**

```
Initial Array: [10, 20, 15, 30, 25]

Insert 5:
Array: [10, 20, 15, 30, 25, 5]

Heapify-Up:
5 swaps with 15 -> [10, 20, 5, 30, 25, 15]
5 swaps with 10 -> [5, 20, 10, 30, 25, 15]
```
