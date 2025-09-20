# Heap Sort

## 1. Introduction

**Heap Sort** is a **comparison-based sorting algorithm** that uses a **heap data structure** (usually a Max-Heap) to sort elements efficiently.

Key properties:

* **Time Complexity:** `O(n log n)`
* **Space Complexity:** `O(1)` (in-place)
* **Sorting Type:** In-place, comparison-based
* **Stability:** **Unstable** (equal elements may change relative order)

Heap Sort is especially useful when:

* You need **guaranteed `O(n log n)` performance**
* You want an **in-place sorting algorithm**
* You want to leverage **heap/priority queue properties**


## 2. Prerequisites: Heaps

Heap Sort relies on **heaps**, so let's review:

* **Max-Heap:** Every parent ≥ children. Root is **maximum element**.
* **Min-Heap:** Every parent ≤ children. Root is **minimum element**.
* **Complete Binary Tree (CBT):** All levels fully filled except possibly the last, and nodes in the last level are **left-aligned**.

**Array representation of a heap (0-based index):**

| Node        | Formula               |
| ----------- | --------------------- |
| Left Child  | `2*i + 1`             |
| Right Child | `2*i + 2`             |
| Parent      | `Math.floor((i-1)/2)` |


## 3. Heap Sort Algorithm

Heap Sort works in **two main phases**:

1. **Build a Max-Heap** from the unsorted array.
2. **Repeatedly extract the root** (largest element) and place it at the end of the array.

**Steps in words:**

1. Start with an unsorted array `[1, 5, 4, 10, 3]`.
2. Transform it into a **Max-Heap**, so the largest element is at the root.
3. Swap the root with the **last element** in the heap.
4. Reduce the heap size (ignore the last element in further heap operations).
5. Call **heapify-down** on the new root to restore the Max-Heap property.
6. Repeat steps 3–5 until all elements are sorted.


## 4. Step 1 – Building the Max-Heap

**Given array:** `[1, 5, 4, 10, 3]`

**Visualize it as a CBT:**

```
        1
      /   \
     5     4
    / \
  10   3
```

**Start building Max-Heap:**

* Find the **last non-leaf node**: `i = Math.floor(n/2) - 1 = 1` (value `5`)

* **Heapify-down** at index `1`:

  * Children: left = 10, right = 3
  * Max child = 10 → swap `5` with `10`
  * Array becomes `[1, 10, 4, 5, 3]`

* Move to root `i = 0` (value `1`)

  * Children: left = 10, right = 4 → max = 10 → swap `1` with `10`
  * Array: `[10, 1, 4, 5, 3]`
  * Heapify-down at index `1` (value `1`)

    * Children: 5 and 3 → max = 5 → swap `1` with `5`
    * Array: `[10, 5, 4, 1, 3]` ✅ Max-Heap complete

**Max-Heap (visual tree):**

```
        10
       /  \
      5    4
     / \
    1   3
```


## 5. Step 2 – Extract and Sort

**Goal:** Place the maximum element at the **end** of the array.

**Heap before extraction:** `[10, 5, 4, 1, 3]`

**Step-by-step extraction:**

1. Swap **root (10)** with **last element (3)** → `[3, 5, 4, 1, 10]`

2. Reduce heap size: `[3, 5, 4, 1]` (ignore last element `10`)

3. Heapify-down at root:

   * Children: left = 5, right = 4 → max = 5 → swap with 3
   * Array: `[5, 3, 4, 1, 10]` ✅

4. Swap root `5` with last heap element `1` → `[1, 3, 4, 5, 10]`

5. Heap size = 3 → Heapify-down at root:

   * Children: left = 3, right = 4 → max = 4 → swap with 1
   * Array: `[4, 3, 1, 5, 10]` ✅

6. Swap root `4` with last heap element `1` → `[1, 3, 4, 5, 10]`

7. Heap size = 2 → Heapify-down at root:

   * Children: left = 3 → swap with 1
   * Array: `[3, 1, 4, 5, 10]` ✅

8. Swap root `3` with last heap element `1` → `[1, 3, 4, 5, 10]`

9. Heap size = 1 → sorting complete

**Sorted array:** `[1, 3, 4, 5, 10]`


## 6. Heapify-Down Function

```javascript
function heapify(arr, n, i) {
    let largest = i
    let left = 2*i + 1
    let right = 2*i + 2

    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest != i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest)
    }
}
```

* Recursively ensures **Max-Heap property** at each subtree
* Swaps root with largest child if necessary


## 7. Full Heap Sort Implementation

```javascript
function heapSort(arr) {
    let n = arr.length

    // Build Max-Heap
    for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }

    // Extract elements
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]] // move max to end
        heapify(arr, i, 0)                  // heapify reduced heap
    }

    return arr
}

// Example
let arr = [1, 5, 4, 10, 3]
console.log("Sorted:", heapSort(arr))
```

**Output:** `[1, 3, 4, 5, 10]`


## 8. Step-by-Step Array Changes (Max-Heap)

| Step | Array              | Action                       |
| ---- | ------------------ | ---------------------------- |
| 1    | `[1, 5, 4, 10, 3]` | Original array               |
| 2    | `[10, 5, 4, 1, 3]` | Build Max-Heap               |
| 3    | `[5, 3, 4, 1, 10]` | Swap root with last, heapify |
| 4    | `[4, 3, 1, 5, 10]` | Swap root with last, heapify |
| 5    | `[3, 1, 4, 5, 10]` | Swap root with last, heapify |
| 6    | `[1, 3, 4, 5, 10]` | Swap root with last, sorted  |


## 9. Time & Space Complexity

| Operation        | Complexity        |
| ---------------- | ----------------- |
| Build Max-Heap   | `O(n)`            |
| Heapify per node | `O(log n)`        |
| Heap Sort        | `O(n log n)`      |
| Space Complexity | `O(1)` (in-place) |

> Building heap is `O(n)` due to starting heapify from bottom non-leaf nodes.


## 10. Advantages & Disadvantages

**Advantages:**

* In-place → no extra memory
* Predictable `O(n log n)` time
* Works well for large datasets

**Disadvantages:**

* Unstable sort
* Slightly slower than Quick Sort on average
* Implementation more complex than simpler sorts


## 11. Key Takeaways

* Heap Sort = Build Heap + Repeatedly Extract Root
* Max-Heap → Ascending sort, Min-Heap → Descending sort
* Array representation of heap makes it compact and efficient
* Heap property ensures correct element extraction
* Multiple valid heap arrays exist due to sibling order flexibility

## 12. Super Visual Step-by-Step Heap Sort

**Array:** `[1, 5, 4, 10, 3]`
**Goal:** Sort in **ascending order** using Max-Heap


### Step 0 – Initial Array (as CBT)

```
        1
      /   \
     5     4
    / \
  10   3
```

**Array Representation:** `[1, 5, 4, 10, 3]`


### Step 1 – Build Max-Heap

* Heapify from last non-leaf nodes
* After heapify:

```
        10
       /  \
      5    4
     / \
    1   3
```

**Array Representation:** `[10, 5, 4, 1, 3]`

✅ Max-Heap ready (largest element at root)


### Step 2 – Extract Max (10)

1. Swap root `10` with last element `3`
2. Heapify root to restore Max-Heap

```
Before heapify:      After heapify:
        3                     5
       / \                   / \
      5   4                 3   4
     /                           \
    1                             1
```

**Array:** `[5, 3, 4, 1, 10]`

* `10` is now **sorted** at the end


### Step 3 – Extract Max (5)

1. Swap root `5` with last heap element `1`
2. Heapify root:

```
Before heapify:      After heapify:
        1                     4
       / \                   / \
      3   4                 1   3
```

**Array:** `[4, 1, 3, 5, 10]`

* `5` is now **sorted**


### Step 4 – Extract Max (4)

1. Swap root `4` with last heap element `3`
2. Heapify root:

```
Before heapify:      After heapify:
        3                     3
       /                     /
      1                     1
```

**Array:** `[3, 1, 4, 5, 10]`

* `4` is now **sorted**


### Step 5 – Extract Max (3)

1. Swap root `3` with last heap element `1`
2. Heapify root:

```
Before heapify:      After heapify:
        1                     1
```

**Array:** `[1, 3, 4, 5, 10]`

* `3` is now **sorted**
* Heap size = 1 → Sorting complete


### ✅ Final Sorted Array

```
[1, 3, 4, 5, 10]
```

**Tree representation at the end:**

```
        1
```

* All elements sorted in **ascending order**
* Max-Heap property guided the sorting


### Visual Summary Table

| Step | Heap Tree             | Array          | Sorted Portion |
| ---- | --------------------- | -------------- | -------------- |
| 0    | `[1,5,4,10,3]` as CBT | `[1,5,4,10,3]` | `[]`           |
| 1    | Max-Heap built        | `[10,5,4,1,3]` | `[]`           |
| 2    | Swap 10 ↔ 3, heapify  | `[5,3,4,1,10]` | `[10]`         |
| 3    | Swap 5 ↔ 1, heapify   | `[4,1,3,5,10]` | `[5,10]`       |
| 4    | Swap 4 ↔ 3, heapify   | `[3,1,4,5,10]` | `[4,5,10]`     |
| 5    | Swap 3 ↔ 1, heapify   | `[1,3,4,5,10]` | `[3,4,5,10]`   |
| End  | Final sorted          | `[1,3,4,5,10]` | `[1,3,4,5,10]` |
