# What is Merge Sort?

**Merge Sort** is a **Divide and Conquer** algorithm.

It:

1. **Divides** the array into halves,
2. **Sorts** each half recursively,
3. Then **merges** the sorted halves together.

Think of it like splitting the array until it’s just single items (which are already sorted), then stitching them back together in order.


## How It Works — Step-by-Step:

Sort `[38, 27, 43, 3, 9, 82, 10]`

1. Split into halves until 1 element:

   ```
   [38, 27, 43, 3, 9, 82, 10]
   → [38, 27, 43] + [3, 9, 82, 10]
   → [38], [27, 43], [3, 9], [82, 10]
   → etc...
   ```

2. Merge sorted subarrays:

   * `[27, 43]` → merge to `[27, 43]`
   * `[38]` + `[27, 43]` → `[27, 38, 43]`
   * etc...

3. Final merge gives sorted array:
   `[3, 9, 10, 27, 38, 43, 82]`


## JavaScript Code:

Here you go — both **recursive** and **iterative** versions of **Merge Sort** in JavaScript, side by side for easy comparison.


### 1. Recursive Merge Sort (Standard)

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example
const nums1 = [38, 27, 43, 3, 9, 82, 10];
console.log("Recursive:", mergeSort(nums1));
```


### 2. Iterative Merge Sort (Bottom-Up)

This version avoids recursion by iteratively merging subarrays of increasing sizes.

```js
function iterativeMergeSort(arr) {
  const n = arr.length;
  let currentSize;

  // Merge subarrays in bottom-up manner
  for (currentSize = 1; currentSize < n; currentSize *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currentSize) {
      const mid = Math.min(leftStart + currentSize - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * currentSize - 1, n - 1);

      // Merge subarray arr[leftStart...mid] & arr[mid+1...rightEnd]
      mergeInPlace(arr, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

function mergeInPlace(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) arr[k++] = leftArr[i++];
  while (j < rightArr.length) arr[k++] = rightArr[j++];
}

// Example
const nums2 = [38, 27, 43, 3, 9, 82, 10];
console.log("Iterative:", iterativeMergeSort(nums2));
```


## Key Differences:

| Version   | Pros                                 | Cons                        |
| --------- | ------------------------------------ | --------------------------- |
| Recursive | Simpler, clean                       | Uses call stack (O(log n))  |
| Iterative | No recursion → avoids stack overflow | More code, harder to follow |


Lete know if you want a **visual representation**, React version, or to combine both versions in one function with a toggle.



## Key Points:

* **Divide and conquer** strategy.
* Not in-place (uses extra space).
* **Very efficient** for large arrays.
* **Stable** sort (preserves order of equal elements).


## Time & Space Complexity:

| Scenario | Time Complexity |
| -------- | --------------- |
| Best     | O(n log n)      |
| Worst    | O(n log n)      |
| Average  | O(n log n)      |
| Space    | O(n)            |