## What is Insertion Sort?

**Insertion Sort** builds the sorted array one element at a time.
It takes one element from the unsorted part and **inserts it into the correct position** in the sorted part — like sorting playing cards in your hand.

## How It Works (Step-by-Step):

Let’s sort this array:

```js
[8, 4, 1, 5, 9]
```

### Step-by-Step:

1. First element `8` is already "sorted".
2. Pick `4`, insert it before `8` → `[4, 8, 1, 5, 9]`
3. Pick `1`, insert before both → `[1, 4, 8, 5, 9]`
4. Pick `5`, insert between `4` and `8` → `[1, 4, 5, 8, 9]`
5. Pick `9`, already in correct place.

✅ Sorted.

## JavaScript Code:

```js
function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    // Move elements greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the key in correct position
    arr[j + 1] = key;
  }

  return arr;
}

// Example usage
const nums = [8, 4, 1, 5, 9];
console.log(insertionSort(nums)); // Output: [1, 4, 5, 8, 9]
```

## Key Points:

* Builds the sorted array step by step.
* **Efficient** for small or nearly sorted data.
* **Stable** sorting algorithm.
* Often used in real-world hybrid sorts like TimSort (used in JS, Python built-in sort).

## Time & Space Complexity:

| Scenario              | Time  |
| --------------------- | ----- |
| Best (already sorted) | O(n)  |
| Worst (reverse order) | O(n²) |
| Average               | O(n²) |
| Space                 | O(1)  |

