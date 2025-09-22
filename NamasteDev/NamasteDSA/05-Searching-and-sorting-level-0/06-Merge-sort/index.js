// write a function to sort array using merge sort algorithm

// approach: divide and conquer
// Divide the array into two halves.
// Sort each half using merge sort.
// Merge the two sorted halves into one sorted array.
// divide, conquer, and merge

function mergeSort(arr) {
  if (arr.length <= 1) return arr

  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

function merge(left, right) {
  const result = []
  let i = 0,
    j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j))
}

// Example
const nums1 = [38, 27, 43, 3, 9, 82, 10]
console.log('Recursive:', mergeSort(nums1))

// time complexity: O(n log n)
// space complexity: O(n)