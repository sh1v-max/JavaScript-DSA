# Extracting an Element from a Heap

Extraction removes the **root element** (minimum for Min-Heap, maximum for Max-Heap) while maintaining the **complete binary tree** and **heap property**.


### Steps to Extract

1. **Remove the root element**.
2. **Move the last element** of the heap to the root (maintains CBT).
3. **Heapify-Down (Bubble-Down):**

   * Compare the new root with its children.
   * Swap with the **smaller child** in a Min-Heap, or **larger child** in a Max-Heap.
4. Repeat step 3 until the heap property is restored.


### Example: Min-Heap Extraction

**Initial Heap (Array + Tree):**

```
Binary Tree:
         5
       /    \
     20      10
    /  \    /
  30    25 15

Array: [5, 20, 10, 30, 25, 15]
```

**Extract Min (5):**

```
Step 1: Move last element (15) to root
Array: [15, 20, 10, 30, 25]

Binary Tree:
         15
       /    \
     20      10
    /  \    
  30    25
```

```
Step 2: Heapify-Down
15 swaps with 10 (smaller child) -> [10, 20, 15, 30, 25]

Final Heap:
Binary Tree:
         10
       /    \
     20      15
    /  \    
  30    25
```


### Time Complexity

| Operation              | Complexity |
| ---------------------- | ---------- |
| Extract (Heapify-Down) | `O(log n)` |
| Access Min/Max (Peek)  | `O(1)`     |


### Key Points

* Always remove from the **root**.
* Move the **last element to root** to maintain CBT.
* Use **Heapify-Down** to restore the heap property.
* Min-Heap ensures **root = smallest**, Max-Heap ensures **root = largest**.
