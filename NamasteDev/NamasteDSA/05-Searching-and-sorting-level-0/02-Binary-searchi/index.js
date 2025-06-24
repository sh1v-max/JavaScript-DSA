// write a function to search for an element in a sorted array using binary search

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