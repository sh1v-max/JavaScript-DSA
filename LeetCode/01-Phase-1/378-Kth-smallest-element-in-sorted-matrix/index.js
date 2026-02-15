// 378. Kth smallest Element in a Sorted Matrix
// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

// You are given an n x n matrix where each of the rows and columns is sorted in ascending order. Find the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).

// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

// Example 2:
// Input: matrix = [[-5]], k = 1
// Output: -5

// intuition:
// the smallest element in the matrix is always at the top left corner, matrix[0][0]
// each row is sorted so the next element after matrix[i][j] is matrix[i][j+1]
// each column is sorted, so moving to the right in a row always give larger number
// this is very similar to k way merge (like merging n sorted lists)
// each row is like a sorted list, we want the kth element if we merged all rows together
// so, we use a min heap(priority queue) to always pull the smallest available element among the rows

// approach:
// initialize minHeap (pq)
// push the first element of every row (matrix[i][j]) into the minHeap
// at each entry, keep track of val, row, and col to ensure we start with the smallest element from each row
// pop and push (repeat k-1 times)
// pop the smallest element from the heap
// if the element was at (row, col), push the next element in the same row (matrix[row][col+1]) into the heap (if it exists)
// this way, the heap will always contains the next possible candidates across rows
// the next popped element will be the kth smallest

var kthSmallest = function (matrix, k) {
  // adding all the elements in first col into the minPQ

  let n = matrix[0].length
  let heap = new MinPriorityQueue((x) => x.val)
  for (let i = 0; i < n; i++) {
    heap.push({ val: matrix[i][0], row: i, col: 0 })
  }

  // find the min value in PQ one by one and increase count till k
  for (let count = 0; count < k - 1; count++) {
    let { row, col } = heap.pop()
    // add the next element if it's present
    if (col + 1 < n) {
      heap.push({ val: matrix[row][col + 1], row: row, col: col + 1 })
    }
  }
  return heap.pop().val
}

// heap has at most n elements, one from each row
// each pop + push is O(log n)
// we do k pops, so total time complexity is O(k log n)

// space complexity: O(n)
