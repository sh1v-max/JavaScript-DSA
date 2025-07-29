// write a function to search for an element in a sorted array using binary search

// approach:
// Set a start and end pointer.
// Keep moving the pointers until they cross.
// At each step, calculate the middle index.
// If the middle element is the target, return the index.
// If the target is less than the middle element, move the end pointer to the left.
// If the target is more than the middle element, move the start pointer to the right.
// If the target is not found, return -1.


function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === target) return mid
    if (arr[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1
}

console.log(binarySearch([1, 2, 3, 4, 5], 3))

// Time Complexity: O(log n)
// Space Complexity: O(1)