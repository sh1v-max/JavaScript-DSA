// write a function to sort an array using insertion sort

// Approach: Insertion Sort
// Start with the second element.
// Store the current element and compare it with all previous elements.
// If a previous element is greater than the current element, move it one position forward.
// Keep doing this until the correct position for the current element is found.
// Repeat until the whole array is sorted.

function insertionSort(arr) {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let pre = i - 1;

    // Move elements of arr[0..i-1], that are
    // greater than curr, to one position ahead
    // of their current position
    while (pre >= 0 && arr[pre] > curr) {
      arr[pre + 1] = arr[pre];
      pre = pre - 1;
    }
    arr[pre + 1] = curr;
  }
  return arr;
}

let arr = [5, 4, 3, 2, 1]
console.log(insertionSort(arr));

// Time Complexity: O(n^2)
// Space Complexity: O(1)