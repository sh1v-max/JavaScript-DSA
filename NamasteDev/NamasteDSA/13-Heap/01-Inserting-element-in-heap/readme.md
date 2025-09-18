# Inserting an Element in a Heap

Inserting an element in a heap involves **adding the element while maintaining both the complete binary tree structure and the heap property**.


## Steps to Insert

1. **Add the element at the end** of the heap (maintains CBT property).
2. **Heapify-Up (Bubble-Up):**
   Compare the inserted element with its parent:

   * In **Min-Heap**: If child < parent, swap.
   * In **Max-Heap**: If child > parent, swap.
3. Repeat step 2 until the heap property is restored or the element reaches the root.


### Example: Min-Heap Insertion

**Initial Heap (Array + Tree):**

```
Binary Tree:
         10
       /    \
     20      15
    /  \    
  30    25

Array: [10, 20, 15, 30, 25]
```

**Insert 5:**

```
Step 1: Add 5 at the end
Array: [10, 20, 15, 30, 25, 5]

Binary Tree:
         10
       /    \
     20      15
    /  \    /
  30    25 5
```

```
Step 2: Heapify-Up
5 swaps with 15 -> [10, 20, 5, 30, 25, 15]

Step 3: Heapify-Up
5 swaps with 10 -> [5, 20, 10, 30, 25, 15]

Final Heap:
Binary Tree:
         5
       /    \
     20      10
    /  \    /
  30    25 15
```


### Time Complexity

| Operation             | Complexity |
| --------------------- | ---------- |
| Insert (Heapify-Up)   | `O(log n)` |
| Access Min/Max (Peek) | `O(1)`     |


### Key Points

* Always insert at the **end** to maintain the complete binary tree.
* Use **Heapify-Up** to restore heap property.
* Min-Heap ensures **root = smallest element**, Max-Heap ensures **root = largest element**.

