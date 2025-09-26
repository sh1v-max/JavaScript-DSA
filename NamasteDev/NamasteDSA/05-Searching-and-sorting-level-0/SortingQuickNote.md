# **Sorting Algorithms – Notes**


## **1. Bubble Sort**

* **Idea:** Repeatedly swap adjacent elements if they are in the wrong order; “bubble” largest elements to the end.
* **Time Complexity:**

  * Best: O(n) (already sorted)
  * Average/Worst: O(n²)
* **Space Complexity:** O(1) (in-place)
* **Stable:** ✅
* **In-place:** ✅
* **Use Cases:** Educational, tiny datasets; rarely used in practice.
* **Notes:** Can optimize with a flag to stop if no swaps.


## **2. Insertion Sort**

* **Idea:** Build sorted portion one element at a time by inserting each new element at the correct position.
* **Time Complexity:**

  * Best: O(n) (already sorted)
  * Average/Worst: O(n²)
* **Space Complexity:** O(1) (in-place)
* **Stable:** ✅
* **In-place:** ✅
* **Use Cases:** Small datasets, nearly sorted arrays, online insertion.
* **Notes:** Very efficient for small or almost sorted data.


## **3. Selection Sort**

* **Idea:** Repeatedly select the minimum (or maximum) element from unsorted portion and place it at the correct position.
* **Time Complexity:** O(n²) for all cases
* **Space Complexity:** O(1) (in-place)
* **Stable:** ❌
* **In-place:** ✅
* **Use Cases:** Simple datasets, easy to implement.
* **Notes:** Always O(n²); not stable; rarely used in practice.


## **4. Merge Sort**

* **Idea:** Divide array into halves, sort recursively, merge sorted halves. “Divide and Conquer.”
* **Time Complexity:** O(n log n) for all cases
* **Space Complexity:** O(n) (requires extra array for merge)
* **Stable:** ✅
* **In-place:** ❌ (classic implementation)
* **Use Cases:** Large datasets, stable sort required, external sorting.
* **Notes:** Good for linked lists; consistent O(n log n).


## **5. Heap Sort**

* **Idea:** Build a max-heap (or min-heap), repeatedly extract the root (largest element) and rebuild heap.
* **Time Complexity:** O(n log n) for all cases
* **Space Complexity:** O(1) (in-place)
* **Stable:** ❌
* **In-place:** ✅
* **Use Cases:** Large datasets, memory-limited scenarios, priority queue-based sorting.
* **Notes:** Efficient but not stable; harder to implement than merge/insertion.


## **6. Quick Sort**

* **Idea:** Pick a pivot, partition array into <pivot and >pivot, sort recursively. “Divide and Conquer.”
* **Time Complexity:**

  * Best/Average: O(n log n)
  * Worst: O(n²) (can be improved with random pivot)
* **Space Complexity:** O(log n) (recursive stack)
* **Stable:** ❌
* **In-place:** ✅
* **Use Cases:** Large datasets; very fast in practice.
* **Notes:** Classic choice for general-purpose sorting; worst-case can be avoided with randomized pivot.


### **Quick Summary Table (Optional)**

| Algorithm      | Time (Best/Avg/Worst)       | Space    | Stable | In-place |
| -------------- | --------------------------- | -------- | ------ | -------- |
| Bubble Sort    | O(n)/O(n²)/O(n²)            | O(1)     | ✅      | ✅        |
| Insertion Sort | O(n)/O(n²)/O(n²)            | O(1)     | ✅      | ✅        |
| Selection Sort | O(n²)/O(n²)/O(n²)           | O(1)     | ❌      | ✅        |
| Merge Sort     | O(n log n)                  | O(n)     | ✅      | ❌        |
| Heap Sort      | O(n log n)                  | O(1)     | ❌      | ✅        |
| Quick Sort     | O(n log n)/O(n log n)/O(n²) | O(log n) | ❌      | ✅        |

