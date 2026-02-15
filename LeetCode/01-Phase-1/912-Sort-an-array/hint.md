# 📝 Notes on 912. Sort an Array

**Difficulty:** Medium 🟡
**Tag:** Sorting, Divide & Conquer

### ✅ Problem Summary

Given an array of integers `nums`, sort it in **ascending order**.
Constraints require a **custom sorting implementation**, with:

* Time complexity: **O(n log n)**
* Space complexity: **as low as possible** (preferably in-place)

### 💡 Intuition

This is a classic sorting problem.
Built-in sort methods (like `nums.sort()`) are disallowed, so we must use a **manual implementation** of an efficient sorting algorithm.
We aim for:

* **Fast performance:** `O(n log n)`
* **Low memory usage:** ideally `O(1)` or `O(log n)` auxiliary space

### 🔧 Approach Used: **Quick Sort (Randomized Pivot)**

Quick Sort is an efficient, comparison-based, divide-and-conquer algorithm.
Here's how it works:

1. **Pick a pivot** element (randomized to avoid worst-case)
2. **Partition** the array so that:

   * Elements < pivot go to the left
   * Elements > pivot go to the right
3. **Recursively sort** the left and right subarrays

We chose **randomized pivot** to reduce the chances of hitting the worst-case (`O(n²)`) scenario, which can happen if the pivot always ends up at one end (like with already sorted arrays).

### 📦 Time & Space Complexity

* **Time:** Average → O(n log n), Worst → O(n²)
* **Space:** O(log n) (for recursion stack only — in-place otherwise)
* Much better space-wise than Merge Sort (which uses O(n) extra space)

### 🛠️ Why Not Merge Sort / Heap Sort?

* **Merge Sort:** Always O(n log n) but needs O(n) space → not optimal here
* **Heap Sort:** O(n log n) and in-place, but not stable and harder to implement
* **Quick Sort:** Best compromise between time, space, and ease of implementation

### ✨ Key Takeaways

* Implemented Quick Sort from scratch with randomized pivot
* Met both the **O(n log n)** time and **low space** constraints
* Practiced recursion and in-place partitioning — important for interviews
