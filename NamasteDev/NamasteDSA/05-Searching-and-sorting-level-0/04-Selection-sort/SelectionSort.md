## What is Selection Sort?

Selection Sort works by **repeatedly finding the smallest (or largest) element** from the unsorted part of the array and putting it at the **beginning**.

It "selects" the minimum and places it where it belongs.

## How It Works (Step-by-Step):

Let’s sort:

```js
[29, 10, 14, 37, 13]
```

### Step-by-Step:

1. Find min from index 0 to end → 10
   Swap 29 and 10 → `[10, 29, 14, 37, 13]`

2. Find min from index 1 to end → 13
   Swap 29 and 13 → `[10, 13, 14, 37, 29]`

3. Find min from index 2 to end → 14
   No swap needed → `[10, 13, 14, 37, 29]`

4. Find min from index 3 to 4 → 29
   Swap 37 and 29 → `[10, 13, 14, 29, 37]`

✅ Done!

## JavaScript Code:

```js
function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find index of the smallest element in the rest of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap only if needed
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

// Example usage
const nums = [29, 10, 14, 37, 13];
console.log(selectionSort(nums)); // Output: [10, 13, 14, 29, 37]
```

## Key Points:

* **Always** performs `n*(n-1)/2` comparisons — even if already sorted.
* **Fewer swaps** than Bubble Sort → better when swaps are expensive.
* **Not stable** (can change order of equal elements).
* Easy to understand, but inefficient for large datasets.

## Time & Space Complexity:

| Scenario | Time Complexity |
| -------- | --------------- |
| Best     | O(n²)           |
| Worst    | O(n²)           |
| Average  | O(n²)           |
| Space    | O(1)            |
