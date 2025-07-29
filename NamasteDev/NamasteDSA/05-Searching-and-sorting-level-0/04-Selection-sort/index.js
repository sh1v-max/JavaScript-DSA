// write a function to sort an array using selection sort

// Approach: Selection Sort
// Selection Sort is a simple comparison-based algorithm.
// It works by repeatedly finding the minimum element in the array
// and swapping it with the first unsorted element.
// The algorithm repeats this process until the entire array is sorted.

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    // Find index of the smallest element in the rest of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Swap only if needed
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

// Example usage
const arr = [29, 10, 14, 37, 13];
console.log(selectionSort(arr)); // Output: [10, 13, 14, 29, 37]

// Time complexity: O(n^2)
// Space complexity: O(1)