# Heap in Data Structures

## What is a Heap?

A **heap** is a special type of **binary tree** that satisfies two main rules:

1. **Complete Binary Tree**

   * All levels are completely filled except possibly the last.
   * The last level is filled **from left to right**.

2. **Heap Order Property**

   * **Max-Heap:** Parent ≥ Children (root is maximum).
   * **Min-Heap:** Parent ≤ Children (root is minimum).

Because of the "complete" property, heaps are usually implemented using **arrays**, not node-based trees.


## Array Representation

* Root at index `0`.
* For a node at index `i`:

  * **Left child:** `2*i + 1`
  * **Right child:** `2*i + 2`
  * **Parent:** `Math.floor((i-1)/2)`

Example (Max-Heap):

```
        50
      /    \
    30      40
   / \     
  10 20   

Array = [50, 30, 40, 10, 20]
```


## Operations on Heap

### 1. Insert (`O(log n)`)

* Add element at the end.
* Bubble it up (swap with parent until heap property is restored).


### 2. Extract Max / Min (`O(log n)`)

* Root is always the max (or min).
* Swap root with last element, remove last, then **heapify down**.


### 3. Peek (`O(1)`)

* Just return the root (`this.heap[0]`).


## Time Complexity

| Operation      | Complexity |
| -------------- | ---------- |
| Insert         | `O(log n)` |
| Extract Max    | `O(log n)` |
| Peek (Get Max) | `O(1)`     |
| Heapify        | `O(log n)` |
| Build Heap     | `O(n)`     |


## Applications of Heap

* Any `Kth` largest/smallest element or `K` top/bottom elements.
* **Priority Queues** (task schedulers, bandwidth allocation).
* **Heap Sort** (sorting in `O(n log n)`).
* **Graph Algorithms:**
  * Dijkstra’s shortest path
  * Prim’s minimum spanning tree
* **Median of a Stream** (using two heaps).


## Key Takeaways

* Heap = **complete binary tree + heap property**.
* Max-Heap → root is largest.
* Min-Heap → root is smallest.
* Usually implemented using **arrays** (efficient index formulas).
* Powerful for **priority-based problems**.


