## What is Bubble Sort?

Bubble Sort is a simple comparison-based sorting algorithm.
It **compares each pair of adjacent items** and **swaps them if they’re in the wrong order**.
It keeps doing this until the entire array is sorted.

## How It Works (Step-by-Step):

Let’s sort this array:

```js
;[5, 1, 4, 2, 8]
```

### Pass 1:

- Compare 5 & 1 → Swap → `[1, 5, 4, 2, 8]`
- Compare 5 & 4 → Swap → `[1, 4, 5, 2, 8]`
- Compare 5 & 2 → Swap → `[1, 4, 2, 5, 8]`
- Compare 5 & 8 → No swap

👉 Biggest number (8) is now at the end.

### Pass 2:

- Compare 1 & 4 → OK
- Compare 4 & 2 → Swap → `[1, 2, 4, 5, 8]`
- Compare 4 & 5 → OK

👉 5 is in position.

### Pass 3:

- Compare 1 & 2 → OK
- Compare 2 & 4 → OK

✅ No swaps → Array is sorted early.

## JavaScript Code:

```js
function bubbleSort(arr) {
  let n = arr.length

  for (let i = 0; i < n - 1; i++) {
    let swapped = false

    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap them if they’re in the wrong order
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        // let temp = arr[j]
        // arr[j] = arr[j + 1]
        // arr[j + 1] = temp
        swapped = true
      }
    }

    // If no swaps happened, array is already sorted
    if (!swapped) break
  }

  return arr
}

// Example usage
const nums = [5, 1, 4, 2, 8]
console.log(bubbleSort(nums)) // Output: [1, 2, 4, 5, 8]
```

## Key Features:

| Feature     | Details                       |
| ----------- | ----------------------------- |
| In-place    | No extra memory used          |
| Stable      | Keeps equal elements in order |
| Simple      | Very easy to understand       |
| Inefficient | Not good for large arrays     |

## Complexity:

| Scenario      | Time Complexity |
| ------------- | --------------- |
| Best (sorted) | O(n)            |
| Worst         | O(n²)           |
| Average       | O(n²)           |
| Space         | O(1) (in-place) |

## When to Use:

Only in **learning or small input** cases. It’s mostly used to **teach sorting logic** — not for production use.
