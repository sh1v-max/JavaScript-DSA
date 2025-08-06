# 📘 Binary Search Algorithm in DSA


## 🧠 What is Binary Search?

**Binary Search** is a search algorithm used to find the position of a target element **in a sorted array** by repeatedly dividing the search interval in half.


### ✅ Conditions:

* Works only on **sorted** arrays or monotonic functions.
* Time Complexity: **O(log n)**
* Space Complexity: **O(1)** (iterative), **O(log n)** (recursive)


## ⚙️ How it Works

### Algorithm (Iterative)

```js
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return -1; // not found
}
```

### 🔄 Recursive Version

```js
function binarySearchRec(arr, low, high, target) {
    if (low > high) return -1;
    
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearchRec(arr, mid + 1, high, target);
    else return binarySearchRec(arr, low, mid - 1, target);
}
```


## 🧩 Variants of Binary Search

### 1. 🔁 **Find First or Last Occurrence**

Use when duplicates are present in a sorted array.

```js
// Find first occurrence of target
function firstOccurrence(arr, target) {
    let low = 0, high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            result = mid;
            high = mid - 1; // go left
        } else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }

    return result;
}
```


### 2. 🔼 **Lower Bound / Upper Bound**

* **Lower Bound**: first index with value ≥ target
* **Upper Bound**: first index with value > target

Used in STL (`std::lower_bound`, `upper_bound`) and in competitive coding.


### 3. 📦 **Binary Search on Answer**

You apply binary search on a range of answers instead of array elements.

#### 🧠 Key Idea:

* Define a predicate function: isPossible(mid)
* Move search space based on result

#### 🔥 Examples:

* Allocate minimum pages
* Ship capacity in D days
* Aggressive cows
* Koko eating bananas
* Painter partition problem


## 🗺️ Special Use-Cases

### 4. 🔄 **Binary Search in Rotated Sorted Array**

```js
// Rotated sorted array without duplicates
function searchRotated(arr, target) {
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return mid;

        // Left half sorted
        if (arr[low] <= arr[mid]) {
            if (arr[low] <= target && target < arr[mid])
                high = mid - 1;
            else
                low = mid + 1;
        }
        // Right half sorted
        else {
            if (arr[mid] < target && target <= arr[high])
                low = mid + 1;
            else
                high = mid - 1;
        }
    }

    return -1;
}
```


### 5. 🧮 **Search in 2D Matrix**

#### Problem: Given a matrix with sorted rows and columns, search for a target.

```js
function searchMatrix(matrix, target) {
    let row = 0, col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }

    return false;
}
```


## ⚠️ Common Mistakes in Binary Search

1. Infinite loop due to `low` not updating properly
2. Integer overflow with `(low + high) / 2`
   Use: `low + (high - low) // 2` in languages like Java/C++
3. Off-by-one errors in finding first/last occurrence
4. Not checking if array is sorted when applying


## 📚 Real-World Examples

* Auto-suggestion with dictionary
* Time-based decisions (scheduling, capacity)
* Google Maps pathfinding (indirect)
* LeetCode + Coding Interviews (tons of usage)


## 🧪 Time & Space Complexity Summary

| Operation        | Time     | Space    |
| ---------------- | -------- | -------- |
| Search (Basic)   | O(log n) | O(1)     |
| Recursive Search | O(log n) | O(log n) |
| Variants         | O(log n) | O(1)     |
| 2D Matrix Search | O(n + m) | O(1)     |


## 🧠 Must-Solve Problems (LeetCode/DSA)

| Problem                               | Type                    |
| ------------------------------------- | ----------------------- |
| 704. Binary Search                    | Basic                   |
| 34. First and Last Position           | First/Last              |
| 852. Peak Index in Mountain Array     | Peak Element            |
| 33. Search in Rotated Sorted Array    | Rotation                |
| 81. Search in Rotated Sorted Array II | Rotation + Duplicates   |
| 4. Median of Two Sorted Arrays        | Advanced                |
| 875. Koko Eating Bananas              | Binary Search on Answer |
| 410. Split Array Largest Sum          | BSOA                    |
| 287. Find Duplicate Number            | BS on Condition         |


## 🏁 Takeaways

* Binary search is **more than just searching** — it's about recognizing patterns and applying it smartly.
* **Knowing when** to apply binary search is as important as how.
* Practice is key: master the classic template and its variants.

